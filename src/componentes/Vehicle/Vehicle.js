import React from 'react'
import {
  Container,
  TextVehicle,
} from './style'

const Vehicle = ({ item }) => {

  return (
    <>
      <Container>
        <TextVehicle>{item.brand} {item.model}</TextVehicle>
      </Container>
      <Container>
        <TextVehicle>
          {item.yearOfManufacture} / {item.modelYear} - {item.color} - {item.board}
        </TextVehicle>
      </Container>
      <Container>
        <TextVehicle>Você roda {item.km} km por mês</TextVehicle>
      </Container>
    </>
  )
}

export default Vehicle