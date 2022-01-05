import React from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

import restaurants from '../../../assets/data/restaurants';
import RestaurantReCItem from '../../components/RestaurantReCItem';
import RestaurantMenu from '../../components/RestaurantMenuCItem';

const RestaurantDetailedScreen = () => {
  const route = useRoute();

  // console.warn(route.params);
  const event = restaurants.find(
    (place) => place.id === route.params.restaurantId,
  );
  const menuItem = restaurants.map((i) => i.menu.filter((f) => f.name));

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
      <View>
        <View style={{ padding: 5 }}>
          <Text style={{ fontSize: 16 }}>Meniu</Text>
          <RestaurantMenu />
        </View>
      </View>
      <Text style={styles.description}>{event.description}</Text>
      <View>
        <View style={{ padding: 5 }}>
          <Text style={{ fontSize: 16 }}>Rekomenduojame</Text>
        </View>
        <RestaurantReCItem />
      </View>
    </ScrollView>
  );
};

export default RestaurantDetailedScreen;
