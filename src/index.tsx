import React from 'react';
import MapView from 'react-native-maps';
import {View} from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        region={{
          latitude: -5.855653225866471,
          longitude: -35.26101974818065,
          latitudeDelta: 0.01143,
          longitudeDelta: 0.0134,
        }}
        showsUserLocation
        loadingEnabled
      />
    </View>
  );
};

export default App;
