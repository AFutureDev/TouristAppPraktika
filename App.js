import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigation/AuthStack';

const Stack = createNativeStackNavigator();

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://192.168.1.186:3000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </ApolloProvider>
  );
};

AppRegistry.registerComponent('TouristAplikacija', () => App);

export default App;
