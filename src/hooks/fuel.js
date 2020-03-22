import { useContext } from 'react'
import { FuelContext } from '../context'

function useFuel() {
  return useContext(FuelContext)
}

export default useFuel