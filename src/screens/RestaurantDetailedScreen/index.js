import React from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

import restaurants from '../../../assets/data/restaurants';
import RestaurantReCItem from '../../components/RestaurantReCItem';
import RestaurantMenu from '../../components/RestaurantMenuCItem';
import openMap from 'react-native-open-maps';

const RestaurantDetailedScreen = () => {
  const route = useRoute();

  // console.warn(route.params);
  const restaurant = restaurants.find(
    (place) => place.id === route.params.restaurantId,
  );
  const menuItem = restaurants.map((i) => i.menu.filter((f) => f.name));

  const mLatitude = restaurant.coordinate.latitude;
  const mLongitude = restaurant.coordinate.longitude;
  const mapEvent = () => {
    openMap({ latitude: mLatitude, longitude: mLongitude });
  };

  return (
    <ScrollView style={[styles.container]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{restaurant.title}</Text>
      </View>

      {/* Image */}
      <Image style={styles.image} source={{ uri: restaurant.image }} />
      <View style={styles.row}>
        <Pressable style={styles.gMap} onPress={mapEvent}>
          <Text style={styles.gText}>Google maps</Text>
        </Pressable>
        <Pressable style={styles.gMap}>
          <Text style={styles.gText}>Kontaktai</Text>
        </Pressable>
      </View>
      <View>
        <View style={{ padding: 5 }}>
          <Text style={{ fontSize: 16 }}>Meniu</Text>
          <RestaurantMenu />
        </View>
      </View>
      <Text style={styles.description}>{restaurant.description}</Text>
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
