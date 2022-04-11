import React from 'react';
import { Container, ContainerHeader, Texto, Footer } from './styles'
import { Alert } from 'react-native';

import { Button } from '../../components/Button';

import { HeaderHome } from '../../components/HeaderHome'

export function Home() {

  function handleClick() {
    Alert.alert("Limpar a lista");
  }
  return (
    <Container>
      <HeaderHome />

      <ContainerHeader>
        <Texto>Home</Texto>
        <Texto>0 ao total</Texto>
      </ContainerHeader>

      <Footer>
        <Button onPress={handleClick} title="Limpar Lista" />
      </Footer>
    </Container>
  )
}
