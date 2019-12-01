import styled from 'styled-components/native';
import {metrics} from '../../styles';

export const DefaultSafeArea = styled.SafeAreaView`
  flex: 1;
  /* background-color: gray; */
`;

export const Container = styled.View`
  padding: ${metrics.basePadding}px;
  flex: 1;
`;

export const DefaultContainer = styled.View`
  margin-top: 30px;
  height: auto;
  width: 100%;
`;

export const TextTitle = styled.Text`
  color: black;
  font-size: 20px;
`;

export const ButtonSend = styled.TouchableOpacity`
  height: 52;
  width: 100%;
  background-color: #000;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
