import React, { useEffect } from 'react'
import {
  View,
  Platform,
} from 'react-native';
import { Title, Icon, Vehicle } from '../../componentes/'
import { useVehicle } from '../../hooks'

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