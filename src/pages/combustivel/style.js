import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import styled from 'styled-components';

export const Container = styled.View``;
export const Fields = styled.View`
  padding: 0 24px;
  margin-bottom: 24px;
`;
export const TextFields = styled.Text`
  color: #000000;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;
export const TextKm = styled(TextFields)`
  font-weight: normal;
`;
export const InputField = styled.TextInput`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 10px 8px;
`;
export const FieldButton = styled.View`
padding: 0 24px;
margin-bottom: 24px;
`;
export const Button = styled.TouchableOpacity`
align-items: center;
background-color: #A2EC04;
display: flex;
height: 47px;
justify-content: center;
`;
export const Register = styled.Text`
color: #FFF;
font-size: 18px;
font-weight: bold;
text-transform: uppercase;
`;