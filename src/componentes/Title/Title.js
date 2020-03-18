import React from 'react'
import {
  TitleElement,
  BarTitle,
} from './style'

const Title = ({ children }) => {
  
  return (
    <>
      <TitleElement>
        {children}
      </TitleElement>
      <BarTitle />
    </>
  )
}

export default Title