import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
import EventDetailedScreen from '../screens/EventDetailedScreen';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerBackground: () => (
          <Image
            style={{
              width: 60,
              height: 25,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}
            source={require('../../assets/images/logo.png')}
          />
        ),
        headerTitle: '',
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default AuthStack;
