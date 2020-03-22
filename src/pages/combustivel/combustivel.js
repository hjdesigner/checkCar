import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker'
import RNPickerSelect from 'react-native-picker-select'
import { Title, Icon } from '../../componentes/'
import {
  Container,
  Fields,
  TextFields,
  InputField,
  FieldButton,
  Button,
  Register,
  TextKm,
} from './style'
import { useFuel } from '../../hooks'

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

const Combustivel = () => {
  const { saveFuel } = useFuel()
  const [liters, setLiters] = useState('')
  const [km, setKm] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState(new Date())
  const [post, setPost] = useState('')
  const [average, setAverage] = useState('')

  const handleSave = () => {
    const data = {
      liters,
      km,
      value,
      date,
      post,
      average,
    }
    saveFuel(data).then(() => {
      setLiters('')
      setKm('')
      setValue('')
      setDate(new Date())
      setPost('')
      setAverage('')
    })
  }

  const handleAverage = () => {
    if (liters !== '' && km !== '') {
      setAverage(km / liters)
    }
  }

  return (
    <Container>
      <ScrollView>
        <Title>
          <Icon name='money' size={24} color='#000' /> Combustivel
        </Title>
        <Fields>
          <TextFields>Quantidade de litros abastecido</TextFields>
          <InputField
            value={liters}
            placeholder='10'
            onChangeText={(text) => setLiters(text.replace(/[^\d/]/g, ""))}
            onBlur={handleAverage} />
        </Fields>
        <Fields>
          <TextFields>KM rodado</TextFields>
          <InputField
            value={km}
            placeholder='350'
            onChangeText={(text) => setKm(text.replace(/[^\d/]/g, ""))}
            onBlur={handleAverage} />
        </Fields>
        <Fields>
          <TextFields>Valor total</TextFields>
          <InputField value={value} placeholder='10,30' onChangeText={(text) => setValue(text.replace(/[^\d\,\./]/g, ""))} />
        </Fields>
        <Fields>
          <TextFields>Data do abastecimento</TextFields>
          <DatePicker date={date} onDateChange={setDate} locale='pt-BR' mode='date' />
        </Fields>
        <Fields>
          <TextFields>Local do abastecimento</TextFields>
          <RNPickerSelect
            onValueChange={(value) => setPost(value)}
            value={post}
            placeholder={{
              label: 'Selecione um posto',
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
          <TextFields>A média de consumo do seu veiculo foi:</TextFields>
          <TextKm>{average} Km por litro</TextKm>
        </Fields>
        <FieldButton>
          <Button disabled={
            liters === '' ||
            km === '' ||
            post === ''
          }
          onPress={handleSave}>
            <Register>Cadastrar</Register>
          </Button>
        </FieldButton>
      </ScrollView>
    </Container>
  )
}

export default Combustivel;