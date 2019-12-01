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

export const ContainerChecks = styled.View``;

export const ButtonNext = styled.TouchableOpacity`
  height: 52px;
  width: 100%;
  border: 1px solid orange;
  background-color: #000;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
