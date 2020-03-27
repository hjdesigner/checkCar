import React, { useEffect } from 'react'
import {
  View,
} from 'react-native';
import { Title, Icon, Vehicle } from '../../componentes/'
import { useVehicle } from '../../hooks'
import AsyncStorage from '@react-native-community/async-storage'

const Home = ({ navigation }) => {
  const { getRegister } = useVehicle()

  useEffect(() => {
    getRegister()
  }, [])

  return (
    <View>
      <Title>
        <Icon name='car' size={24} color='#000' /> Dados do veiculo
      </Title>
      <Vehicle />
    </View>
  )
}

export default Home;