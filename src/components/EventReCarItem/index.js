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

import events from '../../../assets/data/events';

const EventRecomendet = (props) => {
  const route = useRoute();
  const width = useWindowDimensions().width;
  const navigation = useNavigation();

  const recommendedEvents = events.filter(
    (place) => place.id !== route.params.eventId,
  );

  return (
    <View>
      <FlatList
        data={recommendedEvents}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate('EventDetailedPage', { eventId: item.id })
            }
          >
            <View style={styles.container}>
              <Image style={styles.image}
                source={{ uri: item.image }}
              />
              <Text>{item.title}</Text>
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

export default EventRecomendet;
