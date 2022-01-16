import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import restaurants from '../../../assets/data/restaurants';

const RestaurantMenu = (props) => {
  const route = useRoute();
  const width = useWindowDimensions().width;
  const navigation = useNavigation();

  const recommendedEvents = restaurants.filter(
    (place) => place.id !== route.params.restaurantId,
  );

  return (
    <View>
      <FlatList
        data={recommendedEvents}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => (
          
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{ uri: item.menu[0].image }}
              />
              <Text>{item.menu[0].name}</Text>
            </View>
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

export default RestaurantMenu;
