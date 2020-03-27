import React, { createContext, useState } from 'react'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const FuelContext = createContext()

function FuelProvider ({ children }) {
  const [fuel, setFuel] = useState([])

  const getFuel = async () => {
    try {
      const value = await AsyncStorage.getItem('fuel')
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        console.log(jsonValue)
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
        item.push(value)
        await setFuel(item)
        await AsyncStorage.setItem('fuel', JSON.stringify(item))        
      } else {
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
    }}>
      {children}
    </FuelContext.Provider>
  )  
}

export { FuelProvider, FuelContext }