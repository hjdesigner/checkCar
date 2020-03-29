import React from 'react'
import { StackedBarChart, XAxis } from 'react-native-svg-charts'
import { View, Text } from 'react-native'
import { useFuel } from '../../hooks'
import { 
  Container,
  Label,
  ContainerLabel,
  LabelLiters,
  LabelKm,
  LabelMonth,
  LitersColor,
  KmColor,
} from './style'

const ConsumptionGraph = () => {
  const { graphic } = useFuel()
  
  const colors = ['#4477AA', '#1B3147']
  const keys = ['liters', 'km']

  return (
    <Container>
      <StackedBarChart
        style={{ height: 200 }}
        keys={keys}
        colors={colors}
        data={graphic}
        showGrid={false}
        contentInset={{ top: 30, bottom: 30 }}
      />
      <XAxis
        style={{ marginHorizontal: 10 }}
        data={graphic}
        formatLabel={(value, index) => index + 1}
        contentInset={{ left: 12, right: 12 }}
        svg={{ fontSize: 10, fill: 'black' }}
      />
      <ContainerLabel>
        {graphic.map((item) => {
          if (item.liters > 0 && item.km > 0) {
            return (
              <Label key={item.label}>
                <LabelMonth>{item.label}:</LabelMonth>
                <LitersColor />
                <LabelLiters>{item.liters} Litros e</LabelLiters>
                <KmColor />
                <LabelKm>{item.km} Km</LabelKm>
              </Label>
            )
          }
        })}
      </ContainerLabel>
    </Container>
  )
}

export default ConsumptionGraph