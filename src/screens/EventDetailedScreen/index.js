import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import EventCarouselItem from '../../components/EventCarouselItem';

import events from '../../../assets/data/events';
import EventRecomendet from '../../components/EventReCarItem';
const EventDetailedScreen = (props) => {
  const route = useRoute();

  // console.warn(route.params);
  const event = events.find((place) => place.id === route.params.eventId);
  const recommendedEvents = events.filter(
    (place) => place.id !== route.params.eventId,
  );

  const width = useWindowDimensions().width;
  const navigation = useNavigation();

  return (
    <ScrollView style={[styles.container]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{event.title}</Text>
      </View>

      {/* Image */}
      <Image style={styles.image} source={{ uri: event.image }} />
      <View style={styles.row}>
        <Pressable style={styles.gMap}>
          <Text style={styles.gText}>Google maps</Text>
        </Pressable>
        <Pressable style={styles.gMap}>
          <Text style={styles.gText}>Kontaktai</Text>
        </Pressable>
      </View>
      <Text style={styles.description}>{event.description}</Text>
      <View>
        <View style={{ padding: 5 }}>
          <Text style={{ fontSize: 16 }}>Rekomenduojame</Text>
        </View>
        <EventRecomendet />
      </View>
    </ScrollView>
  );
};

export default EventDetailedScreen;
