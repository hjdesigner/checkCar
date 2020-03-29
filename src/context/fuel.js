import React, { createContext, useState } from 'react'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const FuelContext = createContext()

const initialGraphic = [
  { label:'Jan', liters: 0, km: 0 },
  { label:'Fev', liters: 0, km: 0 },
  { label:'Mar', liters: 0, km: 0 },
  { label:'Abr', liters: 0, km: 0 },
  { label:'Mai', liters: 0, km: 0 },
  { label:'Jun', liters: 0, km: 0 },
  { label:'Jul', liters: 0, km: 0 },
  { label:'Ago', liters: 0, km: 0 },
  { label:'Set', liters: 0, km: 0 },
  { label:'Out', liters: 0, km: 0 },
  { label:'Nov', liters: 0, km: 0 },
  { label:'Dez', liters: 0, km: 0 },
]

function FuelProvider ({ children }) {
  const [fuel, setFuel] = useState([])
  const [graphic, setGraphic] = useState([])

  function filterFuel(item) {
    
    for (i = 1; i <= 12; i++) {
      item.forEach(item => {
        let data = item.date.split('-');
        if (data[0] === '2020' && parseInt(data[1].replace('0','')) === i) {
          initialGraphic[i - 1].liters = initialGraphic[i - 1].liters + parseInt(item.liters)
          initialGraphic[i - 1].km = initialGraphic[i - 1].liters + parseInt(item.km)
        }        
      }) 
    }
    setGraphic(initialGraphic)
  }

  const getFuel = async () => {
    try {
      const value = await AsyncStorage.getItem('fuell')
      if (value !== null) {
        const items = JSON.parse(value);
        setFuel(items)
        filterFuel(items)
      }
    } catch (e) {
      Alert.alert('Houve um erro, tente novamente mais tarde!')
    }
  }

  const saveFuel = async (value) => {
    try {
      const valueStorage = await AsyncStorage.getItem('fuell')
      
      if (valueStorage !== null) {
        const item = JSON.parse(valueStorage)
        const newItems = await item.concat(value)
        setFuel(newItems)
        await AsyncStorage.setItem('fuell', JSON.stringify(newItems))        
      } else {
        console.log('aqui');
        const item = [];
        item.push(value);
        await setFuel(item)
        await AsyncStorage.setItem('fuell', JSON.stringify(item))
      }
      Alert.alert('Combustivel cadastrado com sucesso')
    } catch (e) {
      Alert.alert('Houve um erro, tente novamente mais tarde!')
    }
  }

  return (
    <FuelContext.Provider value={{
      fuel,
      saveFuel,
      getFuel,
      graphic,
    }}>
      {children}
    </FuelContext.Provider>
  )  
}

export { FuelProvider, FuelContext }