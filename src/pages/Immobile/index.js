import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {Container, DefaultSafeArea, BoxImmobile} from './styles';
import apt from '../../assets/img/apt-1.jpeg';

export class Immobile extends Component {
  render() {
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
          <ScrollView horizontal>
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
          </ScrollView>
        </Container>
      </DefaultSafeArea>
    );
  }
}

export default Immobile;
