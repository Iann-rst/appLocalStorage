import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import Toast from 'react-native-toast-message';

/*Styles*/
import { Container, Content, ContainerForm, ContainerScrollView, Footer } from './styles';

/*Componentes */
import { HeaderForm } from '../../components/HeaderForm';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Form() {

  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  /*sintaxe de hook do próprio AsyncStorage 
  *
  * É a mesma coisa de usar: asyncStorage.getItem("@savepass:passwords"), 
  * asyncStorage.setItem("@savepass:passwords")
  */
  const { getItem, setItem } = useAsyncStorage("@savepass:passwords");

  //função para pegar os dados dos inputs
  async function handleNew() {
    try {
      const id = uuid.v4();
      const newData = {
        id,
        name,
        user,
        password
      }

      /*Busca tudo que ja tem no AsyncStorage para adicionar os dados que tem lá mais os novos dados */
      const response = await getItem();
      const previousData = response ? JSON.parse(response) : [];

      const data = [...previousData, newData];

      //guardar no async storage, converte o objeto para texto com o JSON
      await setItem(JSON.stringify(data));
      Toast.show({
        type: "success",
        text1: "Cadastrado com sucesso!"
      })

      console.log(newData);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Não foi possível cadastrar."
      })
    }
  }


  return (
    <Container>
      <Content>
        <ContainerScrollView>
          <HeaderForm />

          <ContainerForm>
            <Input
              label="Nome do serviço"
              onChangeText={setName}
            />
            <Input
              label="E-mail ou usuário"
              autoCapitalize="none"
              onChangeText={setUser}
            />
            <Input
              label="Senha"
              secureTextEntry
              onChangeText={setPassword}
            />
          </ContainerForm>

          <Footer>
            <Button
              onPress={handleNew}
              title="Salvar"
            />
          </Footer>
        </ContainerScrollView>
      </Content>
    </Container>
  )
}