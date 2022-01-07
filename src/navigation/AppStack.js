import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Pressable, Text } from 'react-native';
import EventDetailedScreen from '../screens/EventDetailedScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  const navigation = useNavigation();

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
        headerRight: () => (
          <Pressable
            onPress={() => {
              console.log('clicked');
              AsyncStorage.removeItem('token');
              navigation.navigate('Login');
            }}
          >
            <Text>Logout</Text>
          </Pressable>
        ),
        headerTitle: '',
      }}
      children
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default AuthStack;
