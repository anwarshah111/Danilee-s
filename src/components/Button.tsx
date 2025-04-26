import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';

const CustomButton = ({
  title,
  onPress,
  customStyle,
}: {
  title: any;
  onPress: () => void;
  customStyle?: ViewStyle;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, customStyle]}>
      <Text style={{fontSize: 16, color: '#FFF', fontWeight: '600'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    minWidth: 100,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#A8CE2E',
  },
});

export default CustomButton;
