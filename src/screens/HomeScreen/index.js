import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import styles from './styles';
import Event from '../../components/Event';
import Party from '../../components/Party';
import Restaurant from '../../components/Restaurant';

import event from '../../../assets/data/events';
import party from '../../../assets/data/partys';
import restaurant from '../../../assets/data/restaurants';

const HomeScreen = () => {
  const width = useWindowDimensions().width;

  return (
    <View>
      <Event event={event} />
      <Party party={party} />
      <View style={[styles.bannerContainer, { width: width - 20 }]}>
        <Text>Full Banner Ad - 468x60</Text>
      </View>
      <Restaurant restaurant={restaurant} />
    </View>
  );
};

export default HomeScreen;
