import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {DefaultSafeArea} from './styles';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

// -23.564893, -46.667689;

export class Maps extends Component {
  render() {
    return (
      <DefaultSafeArea>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: -23.564893,
              longitude: -46.667689,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={{latitude: -23.564893, longitude: -46.667689}}
              title={'Marcador Loft'}
              description={'LOFt'}
            />
          </MapView>
        </View>
      </DefaultSafeArea>
    );
  }
}

export default Maps;
