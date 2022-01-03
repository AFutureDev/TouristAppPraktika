import React from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

import restaurants from '../../../assets/data/restaurants';

const RestaurantDetailedScreen = () => {
  const route = useRoute();

  // console.warn(route.params);
  const event = restaurants.find(
    (place) => place.id === route.params.restaurantId,
  );

  return (
    <ScrollView style={[styles.container]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{event.title}</Text>
      </View>

      {/* Image */}
      <Image style={styles.image} source={{ uri: event.image }} />
      <View style={styles.row}>
        <Pressable>
          <Text>Google maps</Text>
        </Pressable>
        <Pressable>
          <Text>Kontaktai</Text>
        </Pressable>
      </View>
      <Text style={styles.description}>{event.description}</Text>
    </ScrollView>
  );
};

export default RestaurantDetailedScreen;
