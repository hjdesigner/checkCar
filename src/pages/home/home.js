import React, { useEffect } from 'react'
import {
  ScrollView,
} from 'react-native';
import {
  Title,
  Icon,
  Vehicle,
  ConsumptionChart,
} from '../../componentes/'
import { useFuel } from '../../hooks'

const Home = () => {
  const { getFuel } = useFuel()

  useEffect(() => {
    getFuel()
  }, [])

  return (
    <ScrollView>
      <Title>
        <Icon name='car' size={24} color='#000' /> Dados do veiculo
      </Title>
      <Vehicle />
      <Title>
        <Icon name='map-pin' size={24} color='#000' /> Consumo do veiculo
      </Title>
      <ConsumptionChart />
    </ScrollView>
  )
}

export default Home;