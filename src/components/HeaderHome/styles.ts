import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 175px;
  align-items: center;
  justify-content: space-between;
  background-color:#1967FB;
  flex-direction: row;
  padding: 24px;
`;

export const Imagem = styled.Image`
  width:56px;
  height:56px;
  border-radius: 5px;
`;

export const ContainerUser = styled.View`
  flex:1;
  margin-left: 12px;
`;

export const Title = styled.Text`
font-size: 20px;
color: #ffffff;
`;

export const Subtitle = styled.Text`
font-size: 13px;
color: #EDEDC1;
`;

export const ButtonVoltar = styled.TouchableOpacity`
width: 56px;
height: 56px;
border: 1px solid #E3E3E3;
align-items: center;
justify-content: center;
`;