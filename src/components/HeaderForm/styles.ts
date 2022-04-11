import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 110px;
  background-color: #FFF;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px;
  margin-bottom: 24px;
`;

export const ButtonBack = styled.TouchableOpacity`
z-index: 100;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #3D434D;
  font-weight: bold;
  flex: 1;
  text-align: center;
  margin-left: -32px;
`;