import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import Search from '../Search';

// import { Container } from './styles';

interface RegionProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const Map: React.FC = () => {
  const [region, setRegion] = useState<RegionProps>({
    latitude: -5.756007663197315,
    longitude: -35.162054669414646,
    latitudeDelta: 0.01143,
    longitudeDelta: 0.0134,
  });

  useEffect(() => {
    async function loadRegion() {
      await Geolocation.getCurrentPosition(
        ({coords}) => {
          setRegion({
            ...region,
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        }, // succes
        () => {}, // error
        {
          timeout: 2000,
          enableHighAccuracy: true,
          maximumAge: 1000,
        },
      );
    }
    loadRegion();
  }, [region]);
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        region={region}
        showsUserLocation
        loadingEnabled
      />

      <Search />
    </View>
  );
};

export default Map;
