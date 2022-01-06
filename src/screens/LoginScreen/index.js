import React, { useState } from 'react';
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

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const { height, width } = useWindowDimensions();

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
          value={username}
          onChangeText={setUsername}
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
          onPress={() => navigation.navigate('Route')}
        >
          <Text>Prisijungti</Text>
        </Pressable>
        <View style={styles.regContainer}>
          <Text>Arba</Text>
          <Pressable>
            <Text>Registruotis</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
