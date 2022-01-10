import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import { gql, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const REGISTER_MUTATION = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(
      registerInput: { username: $username, email: $email, password: $password }
    ) {
      id
      email
    }
  }
`;

const RegisterScreen = () => {
  useEffect(() => {
    _retrieveAccessToken().then();
  }, []);

  _storeAccessToken = async (accessToken) => {
    try {
      await AsyncStorage.setItem('token', accessToken);
    } catch (error) {
      alert('feature is not supported');
    }
  };

  _retrieveAccessToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        console.log(value);
        navigation.navigate('Route');
      }
    } catch (error) {}
  };

  const [username, setUsername] = useState('new');
  const [email, setEmail] = useState('new');
  const [password, setPassword] = useState('new');

  const navigation = useNavigation();

  const { height, width } = useWindowDimensions();

  const [registerFunction, { data, loading, error }] =
    useMutation(REGISTER_MUTATION);

  const register = async (username, email, password) => {
    try {
      await registerFunction({
        variables: { username: username, email: email, password: password },
      });
      navigation.navigate('Login');
    } catch (e) {
      alert(e);
    }
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <View style={styles.logTextCont}>
          <Text style={styles.logText}>Prisijungimas</Text>
        </View>

        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={[styles.textInpt, { width: width - 80 }]}
        />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={[styles.textInpt, { width: width - 80 }]}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={[styles.textInpt, { width: width - 80 }]}
          //secureTextEntry={true}
        />

        <Pressable
          style={[styles.btnContainer, { width: width - 80 }]}
          onPress={() => {
            console.log('clicked');
            register(username, email, password);
          }}
        >
          <Text style={{ fontSize: 14 }}>Register</Text>
        </Pressable>

        <Pressable
          style={[
            styles.btnContainer,
            { width: width - 80, backgroundColor: '#4267B2' },
          ]}
        >
          <Text style={styles.textFbGgle}>PRISIJUNGTI SU FACEBOOK</Text>
        </Pressable>

        <Pressable
          style={[
            styles.btnContainer,
            { width: width - 80, backgroundColor: '#4285F4' },
          ]}
        >
          <Text style={styles.textFbGgle}>PRISIJUNGTI SU GOOGLE</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
