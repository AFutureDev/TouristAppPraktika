import React from 'react';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const RestaurantCarouselItem = (props) => {
  const restaurant = props.restaurant;
  const width = useWindowDimensions().width;
  const navigation = useNavigation();

  const goToRestaurantDetailedPage = () => {
    navigation.navigate('RestaurantDetailedPage', {
      restaurantId: restaurant.id,
    });
  };

  return (
    <Pressable
      onPress={goToRestaurantDetailedPage}
      style={[styles.container, { width: width - 180 }]}
    >
      {/* Image */}
      <Image style={styles.image} source={{ uri: restaurant.image }} />
      {/* title */}
      <View style={styles.textStyle}>
        <Text style={styles.title}>{restaurant.title}</Text>
      </View>
    </Pressable>
  );
};

export default RestaurantCarouselItem;
