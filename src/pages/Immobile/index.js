import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Container, DefaultSafeArea, BoxImmobile} from './styles';
import apt from '../../assets/img/apt-1.jpeg';
import apt2 from '../../assets/img/apt-2.jpeg';
import apt3 from '../../assets/img/apt-3.jpeg';
import {Divider} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

export class Immobile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <DefaultSafeArea>
        <Container>
          <Text
            style={{
              marginTop: 10,
              marginBottom: 10,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Os 3 melhores de acordo com seus filtros
          </Text>
          <ScrollView
            horizontal
            contentContainerStyle={{
              height: 220,
            }}>
            <BoxImmobile>
              <TouchableOpacity onPress={() => navigate('ImmobileDetails')}>
                <Image
                  source={apt}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 10,
                }}>
                Residencial Flores
              </Text>
              <Text>R$ 593.000,00</Text>
            </BoxImmobile>

            <BoxImmobile>
              <Image
                source={apt2}
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  marginTop: 10,
                }}>
                Broklin Novo
              </Text>
              <Text>R$ 693.000,00</Text>
            </BoxImmobile>
            <BoxImmobile>
              <Image
                source={apt3}
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  marginTop: 10,
                }}>
                Granja dos Sena
              </Text>
              <Text>R$ 634.000,00</Text>
            </BoxImmobile>
            <Divider style={{backgroundColor: 'blue'}} />
          </ScrollView>
        </Container>
      </DefaultSafeArea>
    );
  }
}

export default withNavigation(Immobile);
