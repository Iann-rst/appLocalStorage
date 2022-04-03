import React from 'react';
import { Container, ContainerHeader, Texto, Footer } from './styles'

import { Button } from '../../components/Button';

import { HeaderHome } from '../../components/HeaderHome'

export function Home() {
  return (
    <Container>
      <HeaderHome />

      <ContainerHeader>
        <Texto>Home</Texto>
        <Texto>0 ao total</Texto>
      </ContainerHeader>

      <Footer>
        <Button title="Limpar Lista" />
      </Footer>
    </Container>
  )
}
