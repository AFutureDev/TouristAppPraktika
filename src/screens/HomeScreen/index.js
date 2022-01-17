import React, { useState } from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import styles from './styles';
import Event from '../../components/Event';
import Party from '../../components/Party';
import Restaurant from '../../components/Restaurant';

import event from '../../../assets/data/events';
import party from '../../../assets/data/partys';
import restaurant from '../../../assets/data/restaurants';

const HomeScreen = () => {
  const width = useWindowDimensions().width;

  const [allEvents, setAllEvents] = useState([...event]);
  const [isVisitedStyle, setIsVisitedStyle] = useState({
    backgroundColor: 'transparent',
  });
  const [isNotVisitedStyle, setIsNotVisitedStyle] = useState({
    backgroundColor: 'transparent',
  });

  return (
    <ScrollView>
      <View>
        <View style={[styles.row]}>
          <Pressable
            onPress={(e) => {
              setIsVisitedStyle({
                borderRadius: 5,
                borderWidth: 1,
                marginHorizontal: 15,
                width: 150,
                height: 20,
                alignItems: 'center',
              });
              setIsNotVisitedStyle({ backgroundColor: 'transparent' });

              allEvents.length !== 0
                ? setAllEvents(allEvents.filter((e) => e.isVisited === true))
                : setAllEvents(event);
            }}
          >
            <Text style={[isVisitedStyle, styles.isVisitedText]}>
              Lankytinos vietos
            </Text>
          </Pressable>
          <Pressable
            style={[isNotVisitedStyle, styles.notVisitedContainer]}
            onPress={(e) => {
              setIsVisitedStyle({ backgroundColor: 'transparent' });
              setIsNotVisitedStyle({
                borderRadius: 5,
                borderWidth: 1,
                marginHorizontal: 15,
                width: 150,
                height: 20,
                alignItems: 'center',
              });

              setAllEvents(event.filter((e) => e.isVisited !== true));
            }}
          >
            <Text style={styles.isVisitedText}>Visos lankytinos vietos</Text>
          </Pressable>
        </View>

        <Event
          event={allEvents.length === 0 ? event : allEvents}
          setAllEvents={setAllEvents}
        />
      </View>

      <View>
        <View style={styles.row}>
          <Pressable>
            <Text>Renginiai netoliese</Text>
          </Pressable>
          <Pressable style={styles.isNotVisitedStyle}>
            <Text>Renginių sąrašas</Text>
          </Pressable>
        </View>

        <Party party={party} />
      </View>

      <View style={[styles.bannerContainer, { width: width - 20 }]}>
        <Text>Full Banner Ad - 468x60</Text>
      </View>

      <View>
        <View style={styles.restItem}>
          <Text>Užkasti netoli</Text>
        </View>
        <Restaurant restaurant={restaurant} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
