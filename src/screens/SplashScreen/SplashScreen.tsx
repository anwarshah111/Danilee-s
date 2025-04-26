import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, ImageBackground} from 'react-native';
import {getLocalData} from '../../utils';

type Props = {
  navigation: any;
};

const SplashScreen = (props: Props) => {
  const {navigation} = props;

  useEffect(() => {
    let id = setTimeout(() => {
      const token = getLocalData('token');
      console.log('token', token);
      if (token) {
        navigation.replace('BottomTabs');
      } else {
        navigation.replace('LoginScreen');
      }
    }, 2000);
    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <ImageBackground
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      blurRadius={5}
      source={require('../../assets/image/sample-image.jpg')}>
      <Text style={{fontSize: 32, color: '#FFF'}}>YOUR LOGO HERE...</Text>
    </ImageBackground>
  );
};
export default SplashScreen;
