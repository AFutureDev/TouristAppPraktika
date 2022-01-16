import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Image, Pressable, Text } from 'react-native';
import EventDetailedScreen from '../screens/EventDetailedScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  const navigation = useNavigation();

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Atsijungti"
          onPress={async () => {
            console.log('clicked');
            const value = await AsyncStorage.getItem('method');
            if (value && value == 'google') {
              console.log('signed out from google');
              await GoogleSignin.signOut();
            }
            AsyncStorage.removeItem('token');
            navigation.navigate('Login');
          }}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
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
      children
    >
      <Drawer.Screen name="Pagrindinis" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default AuthStack;
