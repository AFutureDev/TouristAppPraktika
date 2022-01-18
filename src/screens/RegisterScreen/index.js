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
import { useForm, Controller } from 'react-hook-form';

import { gql, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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

  // const [username, setUsername] = useState('new');
  // const [email, setEmail] = useState('new');
  // const [password, setPassword] = useState('new');

  const navigation = useNavigation();

  const { height, width } = useWindowDimensions();

  const {
    control,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm();
  const pwd = watch('password');

  const [registerFunction, { data, loading, error }] =
    useMutation(REGISTER_MUTATION);

  const register = async () => {
    const userValue = getValues('username');
    const emailValue = getValues('email');
    const passwordValue = getValues('password');

    try {
      await registerFunction({
        variables: {
          username: userValue,
          email: emailValue,
          password: passwordValue,
        },
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
          <Text style={styles.logText}>Registracija</Text>
        </View>

        <Controller
          control={control}
          name="username"
          rules={{
            required: 'Įveskite vartotojo vardą',
            minLength: { value: 3, message: 'Mažiausiai gali būti 3 raides' },
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <View>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Vartotojas"
                style={[
                  styles.textInpt,
                  {
                    width: width - 80,
                    borderColor: error ? 'red' : '#e8e8e8',
                  },
                ]}
              />
              {error && (
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'stretch',
                    marginLeft: 15,
                  }}
                >
                  {error.message || 'Error'}
                </Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Įveskite vartotojo el. pašta',
            pattern: { value: EMAIL_REGEX, message: 'Neteisingas El. paštas' },
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <View>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="El. paštas"
                style={[
                  styles.textInpt,
                  {
                    width: width - 80,
                    borderColor: error ? 'red' : '#e8e8e8',
                  },
                ]}
              />
              {error && (
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'stretch',
                    marginLeft: 15,
                  }}
                >
                  {error.message || 'Error'}
                </Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Įveskite vartotojo slaptažodį',
            minLength: {
              value: 6,
              message: 'Slaptažodis gali būti ne mažiau nei 6 raides',
            },
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <View>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Slaptažodis"
                secureTextEntry={true}
                style={[
                  styles.textInpt,
                  {
                    width: width - 80,
                    borderColor: error ? 'red' : '#e8e8e8',
                  },
                ]}
              />
              {error && (
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'stretch',
                    marginLeft: 15,
                  }}
                >
                  {error.message || 'Error'}
                </Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="password-repeat"
          rules={{
            validate: (value) => value === pwd || 'Slaptažodis neatitinka',
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <View>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Pakartoti slaptažodi"
                secureTextEntry={true}
                style={[
                  styles.textInpt,
                  {
                    width: width - 80,
                    borderColor: error ? 'red' : '#e8e8e8',
                  },
                ]}
              />
              {error && (
                <Text
                  style={{
                    color: 'red',
                    alignSelf: 'stretch',
                    marginLeft: 15,
                  }}
                >
                  {error.message || 'Error'}
                </Text>
              )}
            </View>
          )}
        />

        {/* <TextInput
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
        /> */}

        <Pressable
          style={[styles.btnContainer, { width: width - 80 }]}
          onPress={handleSubmit(register)}
        >
          <Text style={{ fontSize: 14 }}>Registruotis</Text>
        </Pressable>

        {/* <Pressable
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
        </Pressable> */}
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
