import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {
  Container,
  DefaultSafeArea,
  DefaultContainer,
  ContainerDetails,
  ImageContainer,
  TextContainer,
  ContainerCTA,
  BuyNow,
  ButtonLoft,
} from './styles';
import Slideshow from 'react-native-image-slider-show';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

Feather.loadFont();
MaterialIcons.loadFont();
Ionicons.loadFont();

export class ImmobileDetails extends Component {
  static navigationOptions = {
    title: '28BK Residential Apartment',
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Slideshow
          dataSource={[
            {
              url:
                'https://q-cf.bstatic.com/images/hotel/max1280x900/123/123030937.jpg',
            },
            {
              url:
                'https://r-cf.bstatic.com/images/hotel/max1280x900/123/123030929.jpg',
            },
            {
              url:
                'https://r-cf.bstatic.com/images/hotel/max1280x900/123/123030934.jpg',
            },
            {
              url:
                'https://q-cf.bstatic.com/images/hotel/max1280x900/123/123030930.jpg',
            },
          ]}
        />
        <DefaultSafeArea>
          <Container>
            <DefaultContainer>
              <Text> 28BK Residential Apartment </Text>
              <Text> Avenida Paulista , 2340, Baixo Augusta, Sao Paulo </Text>
            </DefaultContainer>

            <DefaultContainer>
              <Text>R$ 690.000,00 </Text>
              <Text>Sendo um lofter voce paga</Text>
              <Text>R$ 6.000,00</Text>
              <Text>Aluguel : R$ 3.500,00</Text>
              <Text>Aporte de investimento1500,00</Text>
            </DefaultContainer>

            <DefaultContainer>
              <ContainerDetails>
                <ImageContainer>
                  <Feather name="layout" size={35} color="orange" />
                </ImageContainer>
                <TextContainer>
                  <Text>2 quartos, 2 suites</Text>
                  <Text>1 hall, cozinha americana planejada</Text>
                </TextContainer>
              </ContainerDetails>
            </DefaultContainer>

            <DefaultContainer>
              <ContainerDetails>
                <ImageContainer>
                  <MaterialIcons name="access-time" size={35} color="orange" />
                </ImageContainer>
                <TextContainer>
                  <Text>Periodo de moradia</Text>
                  <Text>Contrato de 36 meses</Text>
                </TextContainer>
              </ContainerDetails>
            </DefaultContainer>

            <DefaultContainer>
              <ContainerDetails>
                <ImageContainer>
                  <Ionicons name="md-people" size={35} color="orange" />
                </ImageContainer>
                <TextContainer>
                  <Text>Ideal para casais</Text>
                </TextContainer>
              </ContainerDetails>
            </DefaultContainer>

            <DefaultContainer>
              <ContainerDetails>
                <ImageContainer>
                  <Ionicons name="ios-resize" size={30} color="orange" />
                </ImageContainer>
                <TextContainer>
                  <Text>112 metros quadrados</Text>
                </TextContainer>
              </ContainerDetails>
            </DefaultContainer>

            <DefaultContainer>
              <ContainerDetails>
                <ImageContainer>
                  <MaterialIcons name="place" size={33} color="orange" />
                </ImageContainer>
                <TextContainer>
                  <Text>Estabelecimentos proximos</Text>
                  <Text>
                    2 Shoppings, 1 universidade, 1 estacao de metro, ciclovia, 2
                    Hospitais
                  </Text>
                </TextContainer>
              </ContainerDetails>
            </DefaultContainer>

            <ContainerCTA>
              <BuyNow onPress={() => this.props.navigation.navigate('BuyNow')}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
                  Comprar agora
                </Text>
              </BuyNow>
              <ButtonLoft>
                <Text
                  style={{color: 'orange', fontWeight: 'bold', fontSize: 16}}>
                  Plano Loft
                </Text>
              </ButtonLoft>
            </ContainerCTA>
          </Container>
        </DefaultSafeArea>
      </>
    );
  }
}

export default ImmobileDetails;
