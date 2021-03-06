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

const RestaurantReCItem = (props) => {
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
          <Pressable
            onPress={() =>
              navigation.navigate('RestaurantDetailedPage', {
                restaurantId: item.id,
              })
            }
          >
            <View style={styles.container}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subText}>{item.subTitle}</Text>
            </View>
          </Pressable>
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

export default RestaurantReCItem;
