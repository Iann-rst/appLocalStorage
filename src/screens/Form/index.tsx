import React from 'react';
import { Container, Content, ContainerForm, ContainerScrollView, Footer } from './styles';

import { HeaderForm } from '../../components/HeaderForm';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Form() {
  return (
    <Container>
      <Content>
        <ContainerScrollView>
          <HeaderForm />

          <ContainerForm>
            <Input
              label="Nome do serviço"
            />
            <Input
              label="E-mail ou usuário"
              autoCapitalize="none"
            />
            <Input
              label="Senha"
              secureTextEntry
            />
          </ContainerForm>

          <Footer>
            <Button
              title="Salvar"
            />
          </Footer>
        </ContainerScrollView>
      </Content>
    </Container>
  )
}