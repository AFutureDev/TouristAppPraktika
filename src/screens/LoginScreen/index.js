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

import { gql, useQuery, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      accessToken
    }
  }
`;

const LoginScreen = () => {
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

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const { height, width } = useWindowDimensions();

  const [loginFunction, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const login = async (email, password) => {
    try {
      const accessToken = await loginFunction({
        variables: { email: email, password: password },
      });
      await _storeAccessToken(accessToken.data.login.accessToken);
      navigation.navigate('Route');
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
          placeholder="Vartotojas"
          value={email}
          onChangeText={setEmail}
          style={[styles.textInpt, { width: width - 80 }]}
        />

        <TextInput
          placeholder="Slaptažodis"
          value={password}
          onChangeText={setPassword}
          style={[styles.textInpt, { width: width - 80 }]}
          //secureTextEntry={true}
        />

        <Pressable
          style={[styles.btnContainer, { width: width - 80 }]}
          onPress={() => {
            console.log('clicked');
            login(email, password);
          }}
        >
          <Text style={{ fontSize: 14 }}>Login</Text>
        </Pressable>

        <Text style={styles.arbaText}>Arba</Text>

        <Pressable
          style={[styles.btnContainer, { width: width - 80 }]}
          onPress={() => navigation.navigate('Route')}
        >
          <Text style={{ fontSize: 14 }}>Registruotis</Text>
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

export default LoginScreen;
