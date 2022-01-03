import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import styles from './styles';

const EventCarouselItem = (props) => {
  const event = props.event;
  const width = useWindowDimensions().width;

  return (
    <View style={[styles.container, { width: width - 180 }]}>
        {/* Image */}
        <Image style={styles.image} source={{ uri: event.image }} />
        {/* title */}
        <View style={styles.textStyle}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.subTitle}>{event.subTitle}</Text>
        </View>
    </View>
  );
};

export default EventCarouselItem;
