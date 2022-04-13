import React, { useState, useCallback, useEffect } from 'react';
import { styles, Container, ContainerHeader, Texto, Footer } from './styles'
import { Alert } from 'react-native';

import { Button } from '../../components/Button';

import { HeaderHome } from '../../components/HeaderHome'
import { Card, CardProps } from '../../components/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native';

export function Home() {
  const [data, setData] = useState<CardProps[]>([]);

  async function handleFetchData() {
    const response = await AsyncStorage.getAllKeys();
    console.log(response)
  }

  useEffect(() => {
    handleFetchData();
  }, [])

  function handleClick() {
    Alert.alert("Limpar a lista");
  }

  return (
    <Container>
      <HeaderHome />

      <ContainerHeader>
        <Texto>Suas Senhas</Texto>
        <Texto>{`${data.length} ao total`}</Texto>
      </ContainerHeader>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) =>
          <Card
            data={item}
            onPress={() => { }}
          />
        }
      />

      <Footer>
        <Button onPress={handleClick} title="Limpar Lista" />
      </Footer>
    </Container>
  )
}
