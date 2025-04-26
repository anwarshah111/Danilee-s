import {View, Text, Platform} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HeaderComponent = ({
  title,
  LeftComponent,
  RightComponent,
}: {
  title: string;
  LeftComponent?: React.ReactNode;
  RightComponent?: React.ReactNode;
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: '#A8CE2E',
        paddingTop: Platform.OS === 'ios' ? insets.top : 60,
        paddingBottom: 15,
      }}>
      <View 
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}>
        <View style={{flex: 1}}>
          {LeftComponent}
        </View>
        <Text style={{fontSize: 18, fontWeight: '600', color: '#FFF', flex: 2, textAlign: 'center'}}>
          {title}
        </Text>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          {RightComponent}
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;