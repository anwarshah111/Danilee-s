import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import CustomBottomTabs from '../BottomTabs';
import Notifications from '../../screens/Notifications/Notifications';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  const routeNameRef: any = React.useRef(null);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="BottomTabs" component={CustomBottomTabs} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
