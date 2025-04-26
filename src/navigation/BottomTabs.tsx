import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileIcon from '../assets/svgs/profile-icon.svg';
import ScheduleIcon from '../assets/svgs/schedule-icon.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BookingsScreen from '../screens/BookingsScreen';

const bookingIcon = require('../assets/image/book-icon.png');

const Tab = createBottomTabNavigator();

function CustomBottomTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: '#888',
        headerShown: false,
        tabBarShowLabel: false,
      }}
      initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name="ticket-percent-outline"
              color={focused ? '#F12D99' : '#000'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BookingsScreen"
        component={BookingsScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name="calendar-clock-outline"
              color={focused ? '#F12D99' : '#000'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name="person-circle-outline"
              color={focused ? '#F12D99' : '#000'}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    // height: 60,
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    paddingBottom: 5,
    paddingTop: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 16,
  },
  icon: {
    height: 24,
    width: 24,
    borderRadius: 12,
    marginBottom: 4,
  },
  iconText: {
    fontSize: 12,
    fontWeight: '500',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CustomBottomTabs;
