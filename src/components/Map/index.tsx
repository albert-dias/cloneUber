import React, {useEffect, useState} from 'react';
//import Geolocation from '@react-native-community/geolocation';
import {View} from 'react-native';
import MapView from 'react-native-maps';
// import Search from '../Search';
import OneSignal from 'react-native-onesignal';

// import { Container } from './styles';

interface RegionProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
// latitude: -5.856007663197315,
//     longitude: -35.262054669414646,
//     latitudeDelta: 0.01143,
//     longitudeDelta: 0.0134,

// ({coords: {latitude, longitude}}) => {
//   console.log(region);
//   setRegion({
//     latitude,
//     longitude,
//     latitudeDelta: 0.0143,
//     longitudeDelta: 0.0134,
//   });
// }
const Map: React.FC = () => {
  const [time, setTime] = useState(48 * 60 * 60);
  // const [region, setRegion] = useState<RegionProps>({} as RegionProps);

  useEffect(() => {
    OneSignal.setAppId('edc906bb-9d3f-4874-b3f5-74342e680c90');
    OneSignal.sendTag('plain', '5');

    //OneSingal.promptLocation();
    // function Location() {
    //   Geolocation.getCurrentPosition(
    //     ({ coords: { latitude, longitude } }) => {
    //       setRegion({
    //         latitude,
    //         longitude,
    //         latitudeDelta: 0.0143,
    //         longitudeDelta: 0.0134,
    //       });
    //     }, // succes
    //     () => { }, // error
    //     {
    //       timeout: 2000,
    //       enableHighAccuracy: true,
    //       maximumAge: 100,
    //     },
    //   );
    // }
    // Location();

    OneSignal.addPermissionObserver(event => {
      console.log('OneSignal: permission changed:', event);
    });

    OneSignal.addSubscriptionObserver(event => {
      console.log('OneSignal: subscription changed event:', event);
      console.log(
        'OneSignal: subscription changed from userId:',
        event.from.userId,
      );
      console.log(
        'OneSignal: subscription changed to userId:',
        event.to.userId,
      );
      console.log(
        'OneSignal: subscription changed from pushToken:',
        event.from.pushToken,
      );
      console.log(
        'OneSignal: subscription changed to pushToken:',
        event.to.pushToken,
      );
      console.log(
        'OneSignal: subscription changed from isPushDisabled:',
        event.from.isPushDisabled,
      );
      console.log(
        'OneSignal: subscription changed to isPushDisabled:',
        event.to.isPushDisabled,
      );
      console.log(
        'OneSignal: subscription changed from isSubscribed:',
        event.from.isSubscribed,
      );
      console.log(
        'OneSignal: subscription changed to isSubscribed:',
        event.to.isSubscribed,
      );
    });

    OneSignal.addEmailSubscriptionObserver(event => {
      console.log('OneSignal: email subscription changed: ', event);
    });
  }, []);

  useEffect(() => {
    OneSignal.setLogLevel(6, 0);
    setTimeout(() => {
      console.log(time);
      setTime(time - 1);
    }, 1000);
  }, [time]);

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        region={{
          latitude: -5.856007663197315,
          longitude: -35.262054669414646,
          latitudeDelta: 0.01143,
          longitudeDelta: 0.0134,
        }}
        showsUserLocation
        loadingEnabled
      />

      {/* <Search /> */}
    </View>
  );
};

export default Map;
