import styled from 'styled-components/native';

export const Container = styled.View`
  height: 80px;
  width: 100%;
  background-color: #FFF;
  flex-direction: row;
  align-items: center;
  border-color: #E3E3E3;
  border-width: 1px;
  padding-left: 22px;
  margin-bottom: 8px;
  border-radius: 4px;
`;

export const ButtonVisible = styled.TouchableOpacity``;

export const Content = styled.View`
  flex: 1;
  padding: 22px;
`;

export const View = styled.View``;

export const Title = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #3D434D;
  font-weight: bold;
`;

export const Password = styled.Text`
  color: #1967FB;
  font-size: 15px;
  font-weight: bold;
  `;

export const Email = styled.Text`
  color: #888D97;
  font-size: 13px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  height: 80px;
  width:56px;
  align-items: center;
  justify-content: center;
  border-left-width: 1px;
  border-left-color: #E3E3E3;
`;