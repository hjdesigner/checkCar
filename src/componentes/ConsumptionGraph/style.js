import {
    View,
    Text,
} from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
  padding: 0 24px;
  margin-bottom: 24px;
`;
export const Label = styled.View`
  align-items: center;
  background-color: #E8E6E6;
  flex-direction: row;
  padding: 8px;
  margin-bottom: 8px;
`
export const LabelLiters = styled.Text`
  font-size: 14px;
  margin-right: 8px;
`;
export const LitersColor = styled.Text`
  background-color: #4477AA;
  height: 10px;
  margin-right: 8px;
  width: 10px;
`;
export const KmColor = styled(LitersColor)`
  background-color: #1B3147;
`;
export const LabelKm = styled(LabelLiters)``;
export const LabelMonth = styled(LabelLiters)`
  font-weight: 600;
`;

export const ContainerLabel = styled.View`
  margin-top: 16px;
`