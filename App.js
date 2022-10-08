/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignUp} from './screens';
import Tabs from './navigation/tabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{headerMode: 'screen', headerShown: false}}>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          // options={{headerShown: false}}
        />
        {/* tabs  */}
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
