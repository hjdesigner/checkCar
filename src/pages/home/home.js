import React from 'react'
import {
  View,
  Text,
  Platform,
  StatusBar,
} from 'react-native';

const Home = () => {
  
  return (
    <View>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <Text>Home</Text>
    </View>
  )
}

Home.navigationOptions = () => {
  const opcoes = {
    title: 'Home'
  }
  if(Platform.OS == "android"){
    opcoes.header = null;
  }
  

  return opcoes;
}

export default Home;