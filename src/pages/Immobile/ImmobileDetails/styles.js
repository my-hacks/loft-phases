import styled from 'styled-components/native';
import {metrics} from '../../../styles';

export const DefaultSafeArea = styled.SafeAreaView`
  flex: 1;
  /* background-color: gray; */
`;

export const Container = styled.View`
  padding: ${metrics.basePadding}px;
  flex: 1;
`;

export const DefaultContainer = styled.View`
  margin-top: 15px;
  height: auto;
  width: 100%;
`;

export const ImageContainer = styled.View`
  width: 12%;
  height: auto;
`;
export const TextContainer = styled.View`
  width: 80%;
  height: auto;
  flex-direction: column;
`;

export const ContainerDetails = styled.View`
  flex-direction: row;
`;

export const BuyNow = styled.TouchableOpacity`
  height: 52px;
  width: 45%;
  border-radius: 10px;
  border: 2px solid black;
  align-items: center;
  justify-content: center;
  background-color: orange;
`;

export const ButtonLoft = styled.TouchableOpacity`
  height: 52px;
  width: 45%;
  border-radius: 10px;
  border: 2px solid orange;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

export const ContainerCTA = styled.View`
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
`;
