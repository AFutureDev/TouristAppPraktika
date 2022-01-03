import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import AppStack from '../navigation/AppStack';
import EventDetailedScreen from '../screens/EventDetailedScreen';
import PartyDetailedScreen from '../screens/PartyDetailedScreen';
import RestaurantDetailedScreen from '../screens/RestaurantDetailedScreen';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={AppStack} />
      <Stack.Screen name="EventDetailedPage" component={EventDetailedScreen} />
      <Stack.Screen
        name="PartyDetailedScreen"
        component={PartyDetailedScreen}
      />
      <Stack.Screen name="RestaurantDetailedPage" component={RestaurantDetailedScreen} />
    </Stack.Navigator>
  );
};

export default Route;
