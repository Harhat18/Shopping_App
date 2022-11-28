import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.style';
// import { MaterialCommunityIcons } from "@expo/vector-icons";
const Input = ({placeholder, onType, value, iconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
      />
      {/* <MaterialCommunityIcons name={iconName} size={24} color="black" /> */}
    </View>
  );
};

export default Input;
