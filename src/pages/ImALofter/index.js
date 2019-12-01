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
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

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

          <DefaultContainer>
            <ButtonSend onPress={() => this.toggleModal}>
              <Text
                style={{
                  color: 'orange',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Enviar Documentos
              </Text>
            </ButtonSend>
          </DefaultContainer>
        </Container>
        <View
          style={{
            flex: 1,
          }}>
          <Modal
            isVisible={this.state.isModalVisible}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 400,
                width: '100%',
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                }}>
                Negócio Fechado
              </Text>
              {/* <Image source={deal2} /> */}
              <Text
                style={{
                  fontSize: 16,
                }}>
                Ficamos muito felizes pela proposta, iremos analisar e
                retornaremos o contato
              </Text>
              <TouchableOpacity
                title="Fechar"
                onPress={this.toggleModal}
                style={{
                  height: 52,
                  width: '80%',
                  borderRadius: 10,
                  backgroundColor: 'black',
                  marginTop: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'orange',
                    fontSize: 16,
                    alignSelf: 'center',
                  }}>
                  Fechar
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </DefaultSafeArea>
    );
  }
}

export default ImALofter;
