import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {FONTS} from '../constants';
// import {getObjectData, getData} from '../utils/localStorage';
// import { loginUser } from '../controllers/LoginController';

const SplashScreen = ({navigation}) => {
  // React.useEffect(() => {
  //   (async () => {
      
  //     await getData('login_token_status').then(res => {
  //       if (res) {
  //         setTimeout(() => {
  //           navigation.navigate('Tabs');
  //         }, 500);
  //       } else {
  //         setTimeout(() => {
  //           navigation.navigate('Login');
  //         }, 100);
  //       }
  //     });

  //   })();
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{...FONTS.h3, color: 'gray', right: 5}}>
        Wait for 5 second...
      </Text>
      <ActivityIndicator size="large"  />
    </View>
  );
};

export default SplashScreen;
