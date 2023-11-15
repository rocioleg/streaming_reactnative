import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState, useEffect, useTransition } from "react";

import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});

const login = (mail, password) => {

  setIsLoading(true);

    axios
    .post(`${BASE_URL}/login`, {
      mail,
      password,
    })
    .then(res =>{
      let userInfo = res.data;
      setUserInfo(userInfo);
      //setUserToken(userInfo.token);

      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      //AsyncStorage.setItem('userToken', userInfo.token);

      setIsLoading(false);

      console.log(userInfo);
      //console.log('User token: ' + userInfo.token);

    })
    .catch(e => {
      console.log(`login error ${e}`);
      setIsLoading(false);
    });
  }

  const logout = () => {
    setSplashLoading(true);
    //setUserToken(null);
    setUserInfo({});
    AsyncStorage.removeItem('userInfo');
    //AsyncStorage.removeItem('userToken');
    setSplashLoading(false);
    //console.log("paso por logout");
  }

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');

      //let userToken = await AsyncStorage.getItem('userToken');

      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        //setUserToken(userToken);
        setUserInfo(userInfo);
      }
      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`isLoggedIn error ${e}`);
    }
  };
 

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
