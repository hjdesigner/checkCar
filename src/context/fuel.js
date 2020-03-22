import React, { createContext, useState } from 'react'
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

const FuelContext = createContext()

function FuelProvider ({ children }) {
  const [fuel, setFuel] = useState([])

  /* const getRegister = async () => {
    try {
      const value = await AsyncStorage.getItem('fuel')
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        setVehicleDate(jsonValue)
        setLoaderVehicle(false)
      } else {
        Alert.alert('Você precisa cadastrar um veiculo')
        navigation.navigate('Cadastro')
      }
    } catch (e) {
      Alert.alert('Houve um erro, tente novamente mais tarde!')
    }
  } */

  const saveFuel = async (value) => {
    await setFuel(prevState => [...prevState, value])

    try {
      await AsyncStorage.setItem('fuel', JSON.stringify(fuel))
      Alert.alert('Combustivel cadastrado com sucesso')
    } catch (e) {
      Alert.alert('Houve um erro, tente novamente mais tarde!')
    }
  }

  return (
    <FuelContext.Provider value={{
      fuel,
      saveFuel,
    }}>
      {children}
    </FuelContext.Provider>
  )  
}

export { FuelProvider, FuelContext }