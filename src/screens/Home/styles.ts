import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex:1;
  background-color: #BDBDBD;
`;

export const ContainerHeader = styled.View`
width: 100%;
height: 300px;
padding: 2px 24px;
flex-direction: row;
justify-content: space-between;
`;

export const Texto = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #EFEFEF;
`;

export const Footer = styled.View`
width: 100%;
padding: 24px;
`;

export const FlatList = styled.FlatList`
flex:1;
width: 100%;
`;

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%'
  },

  listContent: {
    padding: 24,
    paddingBottom: 150
  }
})

