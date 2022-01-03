import React from 'react';
import { View, Text, FlatList, useWindowDimensions } from 'react-native';
import EventCarouselItem from '../EventCarouselItem';

const Event = (props) => {
  const event = props.event;
  const width = useWindowDimensions().width;
  return (
    <View>
      <FlatList
        data={event}
        renderItem={({ item }) => <EventCarouselItem event={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 180}
        snapToAlignment="center"
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Event;
