import React, { useState, useCallback } from 'react';
import { styles } from './styles';
import { Container, ContainerHeader, Texto, Footer } from './styles'

import { FlatList } from 'react-native';

import { Button } from '../../components/Button';
import { HeaderHome } from '../../components/HeaderHome'
import { Card, CardProps } from '../../components/Card';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export function Home() {
  const [data, setData] = useState<CardProps[]>([]);
  const { getItem, setItem } = useAsyncStorage("@savepass:passwords");


  //Função para pegar os valores que estão no asyncStorage e colocar na FlatList
  async function handleFetchData() {
    /*Pega os valores {id, name, password, user} da coleção que salvos no asyncStorage */
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    console.log(data);
    setData(data);
  }

  //função para deletar um item
  async function handleRemove(id: string) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    //Faz um filtro nos dados que estão salvos e filtro por todos os registros menos o registro que tem o id que quero remover
    const data = previousData.filter((item: CardProps) => item.id !== id)
    //adiciono os dados no asyncStorage novamente (sem o item que foi deletado)
    setItem(JSON.stringify(data));
    //adiciona os dados para serem renderizados novamente na FlatList
    setData(data);
  }


  /*Quando o focus voltar para a tela, ela é renderizada novamente. 
  Atualizando e renderizando os novos dados*/
  useFocusEffect(useCallback(() => {
    handleFetchData();
  }, []));


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
            onPress={() => handleRemove(item.id)}
          />
        }
      />

      <Footer>
        <Button title="Limpar Lista" />
      </Footer>
    </Container>
  )
}
