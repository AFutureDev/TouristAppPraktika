import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={() => navigation.navigate('Main')}
      >
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
