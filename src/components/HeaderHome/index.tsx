import React from 'react';
import { Container, Imagem, ContainerUser, Title, Subtitle, ButtonVoltar } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export function HeaderHome() {
  const navigation = useNavigation();

  function handleAdd() {
    navigation.navigate("Form", {});
  }

  return (
    <Container>
      <Imagem
        source={{ uri: 'https://github.com/Iann-rst.png' }}
      />
      <ContainerUser>
        <Title>Olá, Iann</Title>
        <Subtitle>Sinta-se seguro aqui</Subtitle>
      </ContainerUser>

      <ButtonVoltar onPress={handleAdd}>
        <MaterialIcons
          name="add"
          size={22}
          color="#FFF"
        />
      </ButtonVoltar>
    </Container>
  )
}