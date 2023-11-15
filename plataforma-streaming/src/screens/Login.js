import React, {useContext, useState} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {AuthContext} from '../context/AuthContext'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Login = ({ navigation }) => {
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);

  const {login} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login</Text>

      <View style={styles.email}>
        <MaterialIcons name='alternate-email' size={20} color='#666'  style={{marginBottom: 5}}/>
        <TextInput placeholder='Email ID' style= {{flex: 1, paddingVertical:0}} keyboardType='email-address' value={mail} onChangeText={text => setMail(text)}/>
      </View>

      <View style={styles.email}>
        <Ionicons name='ios-lock-closed-outline' size={20} color='#666'  style={{marginBottom: 5}}/>
        <TextInput placeholder='Password' style= {{flex: 1, paddingVertical:0}} secureTextEntry= {true} value={password} onChangeText={text => setPassword(text)}/>

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.olvidopass}>Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => {login(mail, password)}} style={styles.loginbutton}>
        <Text style={styles.logintext}>Login</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 30}}>
        <Text>Nuevo?</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.registrarse}>Registrarse.</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};


//ESTILOS//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:25,
  },
  login:{
    fontFamily: 'Roboto',
    fontSize: 28,
    fontWeight: '500',
    color:'#333',
    marginBottom: 30,
  },
  email:{
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth:1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  olvidopass:{
    color: 'black',
    fontWeight: '700'
  },
  loginbutton:{
    backgroundColor: '#AD40AF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    width: '80%',
  },
  logintext:{
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 15,
    color: '#fff'
  },
  registrarse:{
    color:'#AD40AF',
    fontWeight: '700',
  }
});

export default Login;
