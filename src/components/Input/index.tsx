import { TextInputProps } from "react-native";
import { Container, Label, TextInputF } from './styles';

type Props = TextInputProps & {
  label: string;
}

export function Input({ label, ...rest }: Props) {
  return (
    <Container>
      <Label>
        {label}
      </Label>
      <TextInputF
        {...rest}
      />
    </Container>
  )
}