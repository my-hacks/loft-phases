import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, Alert} from 'react-native';
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
import Modal from 'react-native-modal';

export class ImALofter extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

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

          <ButtonSend onPress={() => Alert.alert('Documentos Enviados')}>
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
