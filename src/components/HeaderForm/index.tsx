import React from 'react';
import { Container, ButtonBack, Text } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export function HeaderForm() {
  return (
    <Container>
      <ButtonBack>
        <MaterialIcons
          name="chevron-left"
          size={32}
          color="#1967FB"
        />
      </ButtonBack>
      <Text>Cadastro</Text>
    </Container>
  )
}