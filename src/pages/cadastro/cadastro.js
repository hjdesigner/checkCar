import React, { useState } from 'react'
import RNPickerSelect from 'react-native-picker-select'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Platform, StyleSheet, ScrollView } from 'react-native';
import {
  Container,
  Title,
  BarTitle,
  Fields,
  TextFields,
  InputField,
  MultiplyField,
  FieldMiddle,
  Register,
  FieldButton,
  Button,
} from './style'

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const Cadastro = () => {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [board, setBoard] = useState('')
  const [yearOfManufacture, setYearOfManufacture] = useState('')
  const [modelYear, setModelYear] = useState('')
  const [color, setColor] = useState('')
  const [km, setKm] = useState('')

  return (
    <Container>
      <ScrollView>
        <Title>
          <Icon name="car" size={24} color="#000" /> Cadastro
        </Title>
        <BarTitle />
        <Fields>
          <TextFields>Marca</TextFields>
          <RNPickerSelect
            onValueChange={(value) => setBrand(value)}
            value={brand}
            placeholder={{
              label: 'Selecione uma marca',
              value: null,
              color: '#000000',
            }}
            style={pickerSelectStyles}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
          />
        </Fields>
        <Fields>
          <TextFields>Modelo</TextFields>
          <RNPickerSelect
            onValueChange={(value) => setModel(value)}
            value={model}
            placeholder={{
              label: 'Selecione um modelo',
              value: null,
              color: '#000000',
            }}
            style={pickerSelectStyles}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
          />
        </Fields>
        <Fields>
          <TextFields>Placa do veículo</TextFields>
          <InputField value={board} placeholder='AVN-7491' onChangeText={(text) => setBoard(text)} />
        </Fields>
        <MultiplyField>
          <FieldMiddle>
            <TextFields>Ano de fabricação</TextFields>
            <InputField value={yearOfManufacture} placeholder='2020' onChangeText={(text) => setYearOfManufacture(text)} />
          </FieldMiddle>
          <FieldMiddle>
            <TextFields>Ano modelo</TextFields>
            <InputField value={modelYear} placeholder='2021' onChangeText={(text) => setModelYear(text)} />
          </FieldMiddle>
        </MultiplyField>
        <Fields>
          <TextFields>Cor do veículo</TextFields>
          <InputField value={color} placeholder='Preto' onChangeText={(text) => setColor(text)} />
        </Fields>
        <Fields>
          <TextFields>Aproximadamente quanto km por mês você roda?</TextFields>
          <InputField value={km} placeholder='300' onChangeText={(text) => setKm(text)} />
        </Fields>
        <FieldButton>
          <Button>
            <Register>Cadastrar</Register>
          </Button>
        </FieldButton>
      </ScrollView>
    </Container>
  )
}

export default Cadastro