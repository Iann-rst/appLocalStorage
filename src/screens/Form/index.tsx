import React from 'react';
import { Container, Content, ContainerForm, ContainerScrollView, Footer } from './styles';

import { HeaderForm } from '../../components/HeaderForm';
import { Button } from '../../components/Button';
export function Form() {
  return (
    <Container>
      <Content>
        <ContainerScrollView>
          <HeaderForm />

          <ContainerForm>
            {/*inputs*/}
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