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

export const BoxImmobile = styled.View`
  height: 150px;
  width: 150px;
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 10px;
`;
