import { useState } from 'react';
import {
  Container,
  ButtonVisible,
  Content,
  View,
  Title,
  Password,
  Email,
  ButtonDelete
} from './styles';

import { MaterialIcons } from '@expo/vector-icons';

export type CardProps = {
  id: string;
  name: string;
  user: string;
  password: string;
}

type Props = {
  data: CardProps;
  onPress: () => void;
}

export function Card({ data, onPress }: Props) {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  function togglePasswordIsVisible() {
    setPasswordIsVisible(prevState => !prevState);
  }

  return (
    <Container>
      <ButtonVisible onPress={togglePasswordIsVisible}>
        <MaterialIcons
          name={passwordIsVisible ? "visibility" : "visibility-off"}
          size={22}
          color="#888D97"
        />
      </ButtonVisible>

      <Content>
        <View>
          <Title>{data.name}</Title>
          {
            passwordIsVisible
              ?
              <Password>{data.password}</Password>
              :
              <Email>{data.user}</Email>
          }
        </View>
      </Content>
      <ButtonDelete
        onPress={onPress}
      >
        <MaterialIcons
          name="delete"
          size={22}
          color="#888D97"
        />
      </ButtonDelete>
    </Container>
  )
}