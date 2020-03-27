import React, { createContext, useState } from 'react'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const VehicleContext = createContext()

function VehicleProvider ({ children }) {
  const [vehicleDate, setVehicleDate] = useState({})
  const [loaderVehicle, setLoaderVehicle] = useState(true)

  const getRegister = async () => {
    try {
      const value = await AsyncStorage.getItem('register')
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
  }

  return (
    <VehicleContext.Provider value={{
      vehicleDate,
      loaderVehicle,
      getRegister,
    }}>
      {children}
    </VehicleContext.Provider>
  )  
}

export { VehicleProvider, VehicleContext }