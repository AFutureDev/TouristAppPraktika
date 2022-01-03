import React from 'react';
import { View, Text, FlatList, useWindowDimensions } from 'react-native';
import EventCarouselItem from '../EventCarouselItem';
import RestaurantCarouselItem from '../RestaurantCarouselItem';

const Restaurant = (props) => {
  const restaurant = props.restaurant;
  const width = useWindowDimensions().width;
  return (
    <View>
      <FlatList
        data={restaurant}
        renderItem={({ item }) => <RestaurantCarouselItem restaurant={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 180}
        snapToAlignment="center"
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Restaurant;
