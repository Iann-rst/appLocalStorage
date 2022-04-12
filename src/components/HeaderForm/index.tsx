import React from 'react';
import { Container, ButtonBack, Text } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export function HeaderForm() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <ButtonBack onPress={handleBack}>
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