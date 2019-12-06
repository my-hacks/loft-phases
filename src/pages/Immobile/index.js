import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Container, DefaultSafeArea, BoxImmobile} from './styles';
import apt from '../../assets/img/apt-1.jpeg';
import apt2 from '../../assets/img/apt-2.jpeg';
import apt3 from '../../assets/img/apt-3.jpeg';
import apt4 from '../../assets/img/apt-4.jpeg';
import apt5 from '../../assets/img/apt-5.jpeg';
import apt6 from '../../assets/img/apt-6.jpeg';
import apt8 from '../../assets/img/apt-8.jpg';
import apt9 from '../../assets/img/apt-9.jpg';
import apt10 from '../../assets/img/apt-10.jpg';

import {Divider} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';
Icon.loadFont();

export class Immobile extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'FILTROS APLICADOS',
    headerBackTitle: null,
    headerRight: (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 100,
          padding: 10,
        }}
        onPress={() => navigation.navigate('Manegement')}>
        <Icon
          name="line-graph"
          size={25}
          style={{color: 'orange', marginLeft: 40}}
        />
      </TouchableOpacity>
    ),
  });

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
              height: 200,
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
                Joana Brandao Loft
              </Text>
              <Text>R$ 634.000,00</Text>
            </BoxImmobile>
            <Divider style={{backgroundColor: 'blue'}} />
          </ScrollView>

          <Text
            style={{
              marginTop: 10,
              marginBottom: 10,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Os mais buscados na semana
          </Text>

          <ScrollView
            horizontal
            style={{
              height: 220,
            }}>
            <BoxImmobile>
              <Image
                source={apt4}
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

            <BoxImmobile>
              <Image
                source={apt5}
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
                Fernada Lima Loft
              </Text>
              <Text>R$ 1.200.000,00</Text>
            </BoxImmobile>

            <BoxImmobile>
              <Image
                source={apt6}
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
          </ScrollView>

          <Text
            style={{
              marginTop: 10,
              marginBottom: 10,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Destaques Vendidos
          </Text>

          <ScrollView
            horizontal
            style={{
              height: 220,
            }}>
            <BoxImmobile>
              <Image
                source={apt8}
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
                Lorena Assis
              </Text>
              <Text>R$ 834.000,00</Text>
            </BoxImmobile>

            <BoxImmobile>
              <Image
                source={apt9}
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
                Polo 12
              </Text>
              <Text>R$ 988.000,00</Text>
            </BoxImmobile>

            <BoxImmobile>
              <Image
                source={apt10}
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
              <Text>R$ 766.000,00</Text>
            </BoxImmobile>
          </ScrollView>
        </Container>
      </DefaultSafeArea>
    );
  }
}

export default withNavigation(Immobile);
