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

import event from '../../../assets/data/events';
import party from '../../../assets/data/partys';

const HomeScreen = () => {
  const width = useWindowDimensions().width;

  return (
    <View>
      <Event event={event} />
      <Party party={party} />
    </View>
  );
};

export default HomeScreen;
