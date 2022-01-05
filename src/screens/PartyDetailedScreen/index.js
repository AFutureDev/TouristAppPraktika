import React from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

import partys from '../../../assets/data/partys';
import PartyReCarItem from '../../components/PartyReCarItem';

const PartyDetailedScreen = () => {
  const route = useRoute();

  //console.warn(route.params);
  const party = partys.find((place) => place.id === route.params.partyId);

  return (
    <ScrollView style={[styles.container]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{party.title}</Text>
      </View>

      <View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{party.date}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{party.subTitle}</Text>
        </View>
        <View>
          <Pressable style={styles.ticketContainer}>
            <Text style={styles.ticketText}>
              Įsigyti bilietus (Paysera tickets)
            </Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Image style={styles.image} source={{ uri: party.image }} />
        <Text style={styles.description}>{party.description}</Text>
      </View>
      {/* Image */}
      <View>
        <View style={{ padding: 5 }}>
          <Text style={{ fontSize: 16 }}>Kiti Renginiai</Text>
        </View>
        <PartyReCarItem />
      </View>
    </ScrollView>
  );
};

export default PartyDetailedScreen;
