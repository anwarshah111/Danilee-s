import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import HeaderComponet from '../components/HeaderComponet';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {clearLocalData} from '../utils';

const data = [
  {title: 'My Profile', onPressNavigation: ''},
  {title: 'Invoices', onPressNavigation: ''},
  {title: 'Kids', onPressNavigation: ''},
  {title: 'About Us', onPressNavigation: ''},
  {title: 'Terms & Conditions', onPressNavigation: ''},
  {title: 'Logout', onPressNavigation: ''},
  {title: 'Close Account', onPressNavigation: ''},
];

const FlatListItem = ({
  item,
  index,
  onPress,
}: {
  item: any;
  index: number;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        // paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <Text style={{color: '#000', fontSize: 18, fontWeight: '500'}}>
        {item.title}
      </Text>
      <Entypo name={'chevron-right'} size={20} color="#AAA" />
    </TouchableOpacity>
  );
};

const ProfileScreen = ({navigation}: any) => {
  const handlerLogOut = () => {
    Alert.alert(
      'Logout',
      'Do you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Logout cancelled'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            console.log('Logged out');
            clearLocalData();
            navigation.reset({
              index: 0,
              routes: [{name: 'LoginScreen'}],
            });
          },
        },
      ],
      {cancelable: true},
    );
  };
  return (
    <View>
      <HeaderComponet
        title="My Profile"
        RightComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <Ionicons name="notifications-sharp" color="#fff" size={30} />
          </TouchableOpacity>
        }
      />
      <FlatList
        data={data}
        contentContainerStyle={{paddingHorizontal: 15}}
        renderItem={({item, index}) => (
          <FlatListItem
            item={item}
            index={index}
            onPress={() => {
              item.title === 'Logout' ? handlerLogOut() : null;
            }}
          />
        )}
      />
      <View
        style={{
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#CCC',
          marginHorizontal: 15,
          paddingVertical: 15,
        }}>
        <Text style={{color: '#AAA', fontSize: 18}}>Version 0.1</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
