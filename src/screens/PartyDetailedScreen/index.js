import React from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

import partys from '../../../assets/data/partys';

const PartyDetailedScreen = () => {
  const route = useRoute();

  //console.warn(route.params);
  const party = partys.find((place) => place.id === route.params.partyId);

  return (
    <ScrollView style={[styles.container]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{party.title}</Text>
      </View>

      {/* Image */}
      <Image style={styles.image} source={{ uri: party.image }} />
      <Text style={styles.description}>{party.description}</Text>
    </ScrollView>
  );
};

export default PartyDetailedScreen;
