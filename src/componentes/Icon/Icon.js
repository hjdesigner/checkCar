import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont()

const IconElement = ({ name, size, color }) => {
  
  return (
    <Icon name={name} size={size} color={color} />
  )
} 

export default IconElement