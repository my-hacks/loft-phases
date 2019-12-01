import React, {Component, useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
const {WIDTH, HEIGHT} = Dimensions;
import {Dropdown} from 'react-native-material-dropdown';

import {
  Container,
  DefaultContainer,
  DefaultSafeArea,
  ContainerChecks,
  ButtonNext,
} from './styles';
import {Input, CheckBox} from 'react-native-elements';
import Slider from '@react-native-community/slider';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checked1: false,
      checked2: false,
    };
  }

  changeStatus = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  changeStatus1 = () => {
    this.setState({
      checked: !this.state.checked1,
    });
  };

  changeStatus2 = () => {
    this.setState({
      checked: !this.state.checked2,
    });
  };

  render() {
    let data = [
      {
        value: 'Banana',
      },
      {
        value: 'Mango',
      },
      {
        value: 'Pear',
      },
    ];

    const {navigate} = this.props.navigation;

    return (
      <DefaultSafeArea>
        <Container>
          <Text style={{marginLeft: 10}}>
            Precisamos de alguns dados, por favor preencha os campos
          </Text>
          <DefaultContainer>
            <Input placeholder="Digite seu nome" />
          </DefaultContainer>
          <DefaultContainer>
            <Input placeholder="Seu telefone" />
          </DefaultContainer>

          <DefaultContainer>
            <Text style={{marginLeft: 10}}>
              Qual a faixa de preco que pensa em investir
            </Text>
            <Dropdown
              label="Valor do imovel"
              data={data}
              containerStyle={{
                width: WIDTH,
                marginLeft: 10,
              }}
            />
          </DefaultContainer>

          <DefaultContainer>
            <Text style={{marginLeft: 10}}>
              Ja sabemos algumas coisas, mas vamos melhorar esse filtro
            </Text>
          </DefaultContainer>
          <DefaultContainer>
            <Input placeholder="Endereco de Trabalho" />
          </DefaultContainer>
          <DefaultContainer>
            <Input placeholder="Endereco de estudo" />
          </DefaultContainer>
          <DefaultContainer>
            <Input placeholder="Residencial" />
          </DefaultContainer>

          <DefaultContainer>
            <Text style={{marginLeft: 10}}>Quero morar proximo a: </Text>
            <ContainerChecks>
              <CheckBox
                left
                title="Metro"
                onPress={this.changeStatus}
                checked={this.state.checked}
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderColor: 'white',
                  width: 120,
                }}
              />
            </ContainerChecks>
          </DefaultContainer>
          <ButtonNext onPress={() => navigate('Maps')}>
            <Text
              style={{
                color: 'orange',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Proximo
            </Text>
          </ButtonNext>
        </Container>
      </DefaultSafeArea>
    );
  }
}

export default Calculator;
