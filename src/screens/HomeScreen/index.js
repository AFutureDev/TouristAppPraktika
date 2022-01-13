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
              setIsVisitedStyle({ backgroundColor: 'blue' });
              setIsNotVisitedStyle({ backgroundColor: 'transparent' });

              allEvents.length !== 0
                ? setAllEvents(allEvents.filter((e) => e.isVisited === true))
                : setAllEvents(event);
            }}
          >
            <Text style={isVisitedStyle}>Lankytinos vietos</Text>
          </Pressable>
          <Pressable
            onPress={(e) => {
              setIsVisitedStyle({ backgroundColor: 'transparent' });
              setIsNotVisitedStyle({ backgroundColor: 'blue' });

              setAllEvents(event.filter((e) => e.isVisited !== true));
            }}
          >
            <Text style={isNotVisitedStyle}>Visos lankytinos vietos</Text>
          </Pressable>
        </View>

        <Event
          event={allEvents.length === 0 ? event : allEvents}
          setAllEvents={setAllEvents}
        />
      </View>

      <View>
        <View style={styles.row}>
          <Pressable onPress={() => console.warn('pressed')}>
            <Text>Renginiai netoliese</Text>
          </Pressable>
          <Pressable onPress={() => console.warn('pr2')}>
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
