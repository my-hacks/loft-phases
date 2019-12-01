import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Container, DefaultSafeArea, BoxImmobile} from './styles';
import apt from '../../assets/img/apt-1.jpeg';
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
            Mais procurados da Semana
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
                  }}
                />
              </TouchableOpacity>
              <Text>Teste</Text>
            </BoxImmobile>

            <BoxImmobile>
              <Image
                source={apt}
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
              <Text>Teste</Text>
            </BoxImmobile>
            <Divider style={{backgroundColor: 'blue'}} />
          </ScrollView>
        </Container>
      </DefaultSafeArea>
    );
  }
}

export default withNavigation(Immobile);
