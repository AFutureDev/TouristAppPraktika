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

import partys from '../../../assets/data/partys';

const PartyReCarItem = (props) => {
  const route = useRoute();
  const width = useWindowDimensions().width;
  const navigation = useNavigation();

  const recommendedEvents = partys.filter(
    (place) => place.id !== route.params.partyId,
  );

  return (
    <View>
      <FlatList
        data={recommendedEvents}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate('PartyDetailedScreen', { partyId: item.id })
            }
          >
            <View style={styles.container}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
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

export default PartyReCarItem;
