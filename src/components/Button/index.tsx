import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Botao, Texto } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <Botao {...rest}
      activeOpacity={0.7}
    >
      <Texto>{title}</Texto>
    </Botao>
  )
}