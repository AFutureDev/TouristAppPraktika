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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useForm, Controller } from 'react-hook-form';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '634893355227-5okafvnailq49vf47p4t8emfi4j7hnts.apps.googleusercontent.com',
});

import { gql, useQuery, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      accessToken
    }
  }
`;

const GOOGLE_SIGNIN_MUTATION = gql`
  mutation GoogleSignIn($idToken: String!) {
    googleSignIn(googleSignInInput: { idToken: $idToken }) {
      accessToken
    }
  }
`;

const LoginScreen = () => {
  useEffect(() => {
    _retrieveAccessToken().then();
  }, []);

  _storeAccessToken = async (accessToken, isGoogleSignIn) => {
    try {
      await AsyncStorage.setItem('token', accessToken);
      if (isGoogleSignIn) {
        await AsyncStorage.setItem('method', 'google');
      }
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

  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const { height, width } = useWindowDimensions();

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [loginFunction] = useMutation(LOGIN_MUTATION);
  const [googleLoginFunction] = useMutation(GOOGLE_SIGNIN_MUTATION);

  const login = async () => {
    const emailValue = getValues('email');
    const passwordValue = getValues('password');

    console.log(emailValue, passwordValue);

    try {
      const accessToken = await loginFunction({
        variables: { email: emailValue, password: passwordValue },
      });
      //console.log(accessToken.data.login.accessToken);
      await _storeAccessToken(accessToken.data.login.accessToken);
      navigation.navigate('Route');
    } catch (e) {
      alert(e);
    }
  };

  const GoogleLogin = async () => {
    try {
      console.log('Pressed Google Login');
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const accessToken = await googleLoginFunction({
        variables: { idToken: idToken },
      });
      await _storeAccessToken(accessToken.data.googleSignIn.accessToken, true);
      navigation.navigate('Route');
    } catch (error) {
      alert(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
        // some other error happened
      }
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
              value: 1,
              message: 'Slaptažodis gali būti ne mažiau nei 3',
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

        {/* <TextInput
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
        /> */}

        <Pressable
          style={[styles.btnContainer, { width: width - 80 }]}
          onPress={handleSubmit(login)}
        >
          <Text style={{ fontSize: 14 }}>Prisijungti</Text>
        </Pressable>

        <View style={styles.orText}>
          <View
            style={{
              backgroundColor: '#A9A9A9',
              height: 1,
              flex: 1,
              alignSelf: 'center',
            }}
          />
          <Text style={styles.arbaText}>Arba</Text>
          <View
            style={{
              backgroundColor: '#A9A9A9',
              height: 1,
              flex: 1,
              alignSelf: 'center',
            }}
          />
        </View>

        <Pressable
          style={[styles.btnContainer, { width: width - 80 }]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={{ fontSize: 14 }}>Registruotis</Text>
        </Pressable>

        <Pressable
          style={[
            styles.btnContainer,
            { width: width - 80, backgroundColor: '#4267B2' },
          ]}
        >
          <View style={styles.colorBtnContainer}>
            <FontAwesome name="facebook" size={16} color={'#fff'} />
            <Text style={styles.textFb}>Prisijungti su Facebook</Text>
          </View>
        </Pressable>

        <Pressable
          onPress={GoogleLogin}
          style={[
            styles.btnContainer,
            { width: width - 80, backgroundColor: '#DB4437' },
          ]}
        >
          <View style={styles.colorBtnContainer}>
            <AntDesign name="google" size={16} color={'#fff'} />
            <Text style={styles.textGoogle}>Prisijungti su Google</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
