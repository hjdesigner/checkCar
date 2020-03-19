import { useContext } from 'react'
import { VehicleContext } from '../context'

function useVehicle() {
  return useContext(VehicleContext)
}

export default useVehicle