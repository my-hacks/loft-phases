import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  DefaultContainer,
  DefaultSafeArea,
  Container,
  TextTitle,
  ButtonSend,
} from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
EvilIcons.loadFont();
Ionicons.loadFont();

export class ImALofter extends Component {
  render() {
    return (
      <DefaultSafeArea>
        <Container>
          <DefaultContainer>
            <TextTitle>
              Parabens voce esta dando um passo muito importante na compra de um
              imovel e iremos te acompanhar nesta etapa
            </TextTitle>
          </DefaultContainer>
          <DefaultContainer>
            <TextTitle>
              Precisamos de alguns documentos para adiantar a papelada, voce
              manda a foto nos cuidamos da burocracia.
            </TextTitle>
          </DefaultContainer>
          <DefaultContainer
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <EvilIcons name="camera" size={45} color="orange" />
            <Text>Comprovante de Renda</Text>
          </DefaultContainer>
          <DefaultContainer
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <EvilIcons name="camera" size={45} color="orange" />
            <Text>Comprovante de Endereco</Text>
          </DefaultContainer>

          <DefaultContainer
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <EvilIcons name="camera" size={45} color="orange" />
            <Text>RG / CPF </Text>
          </DefaultContainer>

          <ButtonSend>
            <Text
              style={{
                color: 'orange',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Enviar Documentos
            </Text>
          </ButtonSend>
        </Container>
      </DefaultSafeArea>
    );
  }
}

export default ImALofter;
