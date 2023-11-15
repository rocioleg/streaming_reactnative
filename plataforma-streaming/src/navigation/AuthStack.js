import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Onboarding from '../screens/OnBoarding';
import Login from '../screens/Login';
import Register from '../screens/Register'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;