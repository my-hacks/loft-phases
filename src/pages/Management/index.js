import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {DefaultSafeArea, Container, DefaultContainer} from './styles';
import graph from '../../assets/img/graph.png';

export class Management extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DefaultSafeArea>
        <Container>
          <DefaultContainer>
            <Text>Caminho ate seu sonho</Text>
            <Image
              source={graph}
              resizeMode="contain"
              style={{
                width: 350,
                height: 350,
              }}
            />

            <Text
              style={{
                marginTop: 10,
              }}>
              Rendimento obtido a partir do fundo de investimento
            </Text>
            <Text
              style={{
                marginTop: 10,
              }}>
              Data da aplicacao: 28/07/16
            </Text>

            <Text
              style={{
                marginTop: 10,
              }}>
              Valor Acumulado: 96.314,19
            </Text>

            <Text
              style={{
                marginTop: 10,
              }}>
              Prazo minimo para retirada: 28/07/18
            </Text>

            <Text
              style={{
                color: 'orange',
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 30,
              }}>
              Estas analises sao feitas diariamente, desta forma voce acompanha
              sua evolucao em busca do seu sonho
            </Text>
          </DefaultContainer>
        </Container>
      </DefaultSafeArea>
    );
  }
}

export default Management;
