import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponet';
import Feather from 'react-native-vector-icons/Feather';

const notifyData = [
  {
    title: 'Booking has Approved,( no data to show here)',
    date: '12-Apr-25',
    time: '3:38 PM',
  },
  {
    title: 'Invoce of Booking is ready',
    date: '10-Apr-25',
    time: '3:38 PM',
  },
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
    date: '14-Apr-25',
    time: '2:38 PM',
  },
];

const FlatListItem = ({item, index}: {item: any; index: number}) => {
  return (
    <TouchableOpacity
      style={{
        borderBottomWidth: 1,
        paddingVertical: 20,
        borderBottomColor: '#CCC',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View style={{width: '95%'}}>
          <Text style={{color: '#000', fontSize: 18, fontWeight: '400'}}>
            {item.title}
          </Text>
        </View>
        <Feather name="chevron-right" />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
        <Text>{item.date}</Text>
        <Text style={{fontSize: 14, color: '#000'}}>{', ' + item.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Notifications = ({navigation}: any) => {
  return (
    <View>
      <HeaderComponent
        title="Notification"
        LeftComponent={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={40} color={'#FFF'} />
          </TouchableOpacity>
        }
      />
      <FlatList
        data={notifyData}
        contentContainerStyle={{paddingHorizontal: 15}}
        renderItem={({item, index}) => (
          <FlatListItem item={item} index={index} />
        )}
      />
    </View>
  );
};

export default Notifications;
