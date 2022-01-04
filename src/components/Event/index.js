import React from 'react';
import { View, Text, FlatList, useWindowDimensions } from 'react-native';
import EventCarouselItem from '../EventCarouselItem';

const Event = (props) => {
  const event = props.event;
  const setAllEvents = props.setAllEvents;

  const width = useWindowDimensions().width;

  return (
    <View>
      <FlatList
        data={event}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => (
          <EventCarouselItem
            allEvents={event}
            setAllEvents={setAllEvents}
            event={item}
          />
        )}
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
