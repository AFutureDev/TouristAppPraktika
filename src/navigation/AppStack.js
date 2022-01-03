import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
import { logo } from '../../assets/images';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerBackground: () => (
          <Image
            style={{
              width: 25,
              height: 25,
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 10,
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
