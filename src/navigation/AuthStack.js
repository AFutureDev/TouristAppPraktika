import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import AppStack from '../navigation/AppStack';
import EventDetailedScreen from '../screens/EventDetailedScreen';
import PartyDetailedScreen from '../screens/PartyDetailedScreen';
import Route from './Route';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Route" component={Route} />
    </Stack.Navigator>
  );
};

export default AuthStack;
