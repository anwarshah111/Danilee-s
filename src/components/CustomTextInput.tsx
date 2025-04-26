import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TextInput as RNTextInput,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  style = {},
  containerStyle = {},
  onFocus = () => {},
  onBlur = () => {},
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);
  const floatAnim = useRef(new Animated.Value(value ? 1 : 0)).current;
  const [secureText, setSecureText] = useState(secureTextEntry);

  useEffect(() => {
    setHasValue(!!value);
  }, [value]);

  useEffect(() => {
    Animated.timing(floatAnim, {
      toValue: isFocused || hasValue ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, hasValue, floatAnim]);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur();
  };

  const handleChangeText = text => {
    onChangeText(text);
    setHasValue(!!text);
  };

  const labelPositionTop = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [14, 0],
  });

  const labelFontSize = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [16, 12],
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.inputContainer}>
        {/* Input field */}
        <RNTextInput
          style={[
            styles.input,
            {fontWeight: '500'},
            isFocused && styles.focusedInput,
            style,
          ]}
          value={value}
          onChangeText={handleChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={secureText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          placeholder=""
        />

        {/* Floating label */}
        <Animated.View
          style={[
            styles.labelContainer,
            {
              top: labelPositionTop,
            },
          ]}
          pointerEvents="none">
          <Animated.Text
            style={[
              styles.label,
              {
                fontSize: labelFontSize,
                color: '#AAA',
                backgroundColor:
                  isFocused || hasValue ? 'transparent' : 'transparent',
                paddingLeft: 4,
              },
            ]}>
            {label}
          </Animated.Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '90%',
    position: 'relative',
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    height: 55,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  focusedInput: {
    borderColor: '#888',
  },
  labelContainer: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  label: {
    letterSpacing: 0.3,
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: 0,
    height: 50,
    justifyContent: 'center',
  },
});

export default CustomTextInput;
