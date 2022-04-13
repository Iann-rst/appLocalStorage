import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%'
  },
  listContent: {
    padding: 24,
    paddingBottom: 150
  }
});

export const Container = styled.View`
  flex:1;
  background-color: #F2F3F5;
  align-items: center;
`;

export const ContainerHeader = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 10px;
padding: 2px 24px;
`;

export const Texto = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #3D434D;
`;

export const Footer = styled.View`
width: 100%;
padding: 24px;
`;

