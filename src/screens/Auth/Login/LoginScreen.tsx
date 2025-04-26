import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import {Text} from 'react-native';
import HeaderComponet from '../../../components/HeaderComponet';
import CustomButton from '../../../components/Button';
import CustomTextInput from '../../../components/CustomTextInput'; // Import the new component
import {setLocalData} from '../../../utils';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('sinhagourav010@gmail.com');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    if (email.trim().length === 0) {
      Alert.alert('Email is Requied');
    } else if (password.trim().length === 0) {
      Alert.alert('Password is Requied');
    } else {
      setLocalData('token', email);
      navigation.navigate('BottomTabs');
      console.log('Logging in with:', email, password);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderComponet title={'Login'} />
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <View style={{marginBottom: 20}}>
          <Text style={{color: '#000', fontSize: 34}}>YOUR LOGO HERE...</Text>
        </View>

        {/* Replace this component with logo */}
        {/* <View style={{}}>
          <Image style={{width: '100%', height: 200}} source={{uri:'../sourceTOFile'}}/>
        </View> */}

        <CustomTextInput
          label="Email"
          value={email}
          onChangeText={(text: any) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <CustomTextInput
          label="Password"
          value={password}
          onChangeText={(text: any) => setPassword(text)}
          secureTextEntry={true}
          autoCapitalize="none"
        />

        <TouchableOpacity onPress={() => console.log('Forgot Password')}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>

        <CustomButton
          onPress={onLogin}
          title="Login"
          customStyle={{marginVertical: 16}}
        />

        <CustomButton onPress={onLogin} title="Create Account" />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  link: {
    textAlign: 'center',
    color: '#AAA',
    fontSize: 15,
    marginTop: 8,
  },
});
