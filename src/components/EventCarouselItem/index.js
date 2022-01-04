import React from 'react';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const EventCarouselItem = (props) => {
  const event = props.event;
  const setAllEvents = props.setAllEvents;
  const allEvents = props.allEvents;

  const width = useWindowDimensions().width;
  const navigation = useNavigation();

  const goToEventDetailedPage = () => {
    navigation.navigate('EventDetailedPage', { eventId: event.id });
  };

  return (
    <Pressable
      onPress={() => {
        const visited = allEvents.map((e) => {
          if (e.id !== event.id) return e;
          return { ...e, isVisited: true };
        });
        // console.log(visited);
        setAllEvents([...visited]);
        goToEventDetailedPage();
      }}
      style={[styles.container, { width: width - 180 }]}
    >
      {/* Image */}
      <Image style={styles.image} source={{ uri: event.image }} />
      {/* title */}
      <View style={styles.textStyle}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.subTitle}>{event.subTitle}</Text>
      </View>
    </Pressable>
  );
};

export default EventCarouselItem;
