import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select'
import {
  ConsumptionGraph,
} from '../../componentes/'
import {
  Fields,
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

const ConsumptionChart = () => {
  const [year, setYear] = useState('2020')

  return (
    <>
      <Fields>
        <RNPickerSelect
          onValueChange={(value) => setYear(value)}
          value={year}
          placeholder={{
            label: 'Selecione um ano',
            value: null,
            color: '#000000',
          }}
          style={pickerSelectStyles}
          items={[
              { label: '2020', value: '2020' },
              { label: '2019', value: '2019' },
              { label: '2018', value: '2018' },
          ]}
        />
      </Fields>
      <ConsumptionGraph />
    </>
  )
}

export default ConsumptionChart