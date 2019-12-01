import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Button, Image} from 'react-native';
import {Input} from 'react-native-elements';
import {Container, DefaultSafeArea, DefaultContainer} from './styles';
import Modal from 'react-native-modal';
import deal2 from '../../assets/img/deal2.png';

export class BuyNow extends Component {
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
            <Text>
              {' '}
              Vamos fechar tudo por aqui, nos mande sua proposta, iremos
              analisar e entraremos em contato{' '}
            </Text>
          </DefaultContainer>

          <DefaultContainer>
            <Input placeholder="Passe o valor para analise" />
          </DefaultContainer>

          <DefaultContainer>
            <TouchableOpacity
              onPress={this.toggleModal}
              style={{
                height: 52,
                width: '100%',
                backgroundColor: 'orange',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                borderColor: '#000',
              }}>
              <Text>Enviar agora</Text>
            </TouchableOpacity>
          </DefaultContainer>
        </Container>
        <View style={{flex: 1}}>
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
              <Image source={deal2} />
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

export default BuyNow;
