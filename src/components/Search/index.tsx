import React from 'react';
import {Platform} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

// import { Container } from './styles';

const Search: React.FC = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Para onde?"
      onPress={(data, details) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyC1-8oyNjYNmO6H1ejsW7XRJc3lZtpPXM4',
        language: 'pt',
      }}
      textInputProps={{
        autoCapitalize: 'none',
        autoCorrect: false,
        placeholderTextColor: '#333',
        color: '#333',
      }}
      styles={{
        container: {
          position: 'absolute',
          top: Platform.select({ios: 60, android: 40}),
          width: '100%',
        },
        textInputContainer: {
          flex: 1,
          backgroundColor: 'transparent',
          height: 54,
          marginHorizontal: 20,
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
        textInput: {
          height: 54,
          margin: 0,
          borderRadius: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 0,
          marginRight: 0,
          marginLeft: 0,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {x: 0, y: 0},
          shadowRadius: 15,
          borderWidth: 1,
          borderColor: '#ddd',
          fontSize: 18,
        },
        listView: {
          borderWidth: 1,
          borderColor: '#ddd',
          backgroundColor: '#fff',
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {x: 0, y: 0},
          shadowRadius: 15,
        },
        description: {fontSize: 16},
        row: {
          padding: 20,
          height: 58,
        },
      }}
      fetchDetails
      enablePoweredByContainer={false}
    />
  );
};

export default Search;
