import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import styles from './styles';
import EventCarouselItem from '../../components/EventCarouselItem';

import event from '../../../assets/data/events';

const HomeScreen = () => {
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

export default HomeScreen;
