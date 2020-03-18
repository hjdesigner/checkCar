import React, { useState, useEffect } from 'react'
import {
  View,
  Platform,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { Title, Icon, Vehicle } from '../../componentes/'

const Home = ({ navigation }) => {
  const [vehicleData, setVehicleData] = useState({})
  
  useEffect(() => {
    getRegister()
  }, [])

  const getRegister = async () => {
    try {
      const value = await AsyncStorage.getItem('register')
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        setVehicleData(jsonValue)
      } else {
        Alert.alert('Você precisa cadastrar um veiculo')
        navigation.navigate('Cadastro')
      }
    } catch (e) {
      Alert.alert('Houve um erro, tente novamente mais tarde!')
    }
  }

  return (
    <View>
      <Title>
        <Icon name='car' size={24} color='#000' /> Dados do veiculo
      </Title>
      <Vehicle item={vehicleData} />
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