import React from 'react'
import {
  Container,
  TextVehicle,
  ContainerLoader,
} from './style'
import { Icon } from '../../componentes/'
import { useVehicle } from '../../hooks'

const Vehicle = () => {
  const { vehicleDate, loaderVehicle } = useVehicle()

  return (
    <>
      {loaderVehicle ? (
        <ContainerLoader>
          <Icon name='spinner' size={24} color='#000' />
        </ContainerLoader>
      ) : (
        <>
          <Container>
            <TextVehicle>{vehicleDate.brand} {vehicleDate.model}</TextVehicle>
          </Container>
          <Container>
            <TextVehicle>
              {vehicleDate.yearOfManufacture} / {vehicleDate.modelYear} - {vehicleDate.color} - {vehicleDate.board}
            </TextVehicle>
          </Container>
          <Container>
            <TextVehicle>Você roda {vehicleDate.km} km por mês</TextVehicle>
          </Container>
        </>
      )}
    </>
  )
}

export default Vehicle