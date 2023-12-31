import React, {useContext} from 'react';
import { View, Text, Button } from 'react-native';

import {AuthContext} from '../context/AuthContext'

const AuthStack = () => {
  const {logout, userInfo} = useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido {userInfo.nombre}</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
};

export default AuthStack;