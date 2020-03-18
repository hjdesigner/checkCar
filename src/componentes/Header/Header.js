import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import style from './style'

const Header = () => {
  
  return (
    <View style={style.header}>
      <Icon style={style.icon} name="car" size={30} color="#00B2EA" />
      <Text style={style.textLogo}>Check Car</Text>
    </View>
  )
};

export default Header;