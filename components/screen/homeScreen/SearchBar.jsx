import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchBar() {

  return (
    <View style={{ marginTop: 20,
        height:10
    }}>
    <GooglePlacesAutocomplete
      placeholder='Search EV Charging Station'
      fetchDetails={true}
      enablePoweredByContainer={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'chghgdhgfhgfjhdhklkl',
        language: 'en',
      }}
    />
    </View>
  )
}