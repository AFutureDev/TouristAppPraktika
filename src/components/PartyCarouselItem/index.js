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

const PartyCarouselItem = (props) => {
  const party = props.party;
  const width = useWindowDimensions().width;
  const navigation = useNavigation();

  const goToPartyDetailedScreen = () => {
    navigation.navigate('PartyDetailedScreen', { partyId: party.id });
  };

  return (
    <Pressable
      onPress={goToPartyDetailedScreen}
      style={[styles.container, { width: width - 180 }]}
    >
      <View style={styles.dateTextContainer}>
        <Text style={styles.dateText}>{party.date}</Text>
      </View>
      <View>
        <Image style={styles.image} source={{ uri: party.image }} />
        {/* title */}
        <View style={styles.textStyle}>
          <Text style={styles.title}>{party.title}</Text>
          <Text style={styles.subTitle}>{party.subTitle}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PartyCarouselItem;
