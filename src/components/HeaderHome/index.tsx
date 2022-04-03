import React from 'react';
import { Container, Imagem, ContainerUser, Title, Subtitle, ButtonVoltar } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export function HeaderHome() {
  return (
    <Container>
      <Imagem
        source={{ uri: 'https://github.com/Iann-rst.png' }}
      />
      <ContainerUser>
        <Title>Olá, Iann</Title>
        <Subtitle>Sinta-se seguro aqui</Subtitle>
      </ContainerUser>

      <ButtonVoltar>
        <MaterialIcons
          name="add"
          size={22}
          color="#FFF"
        />

      </ButtonVoltar>
    </Container>
  )
}