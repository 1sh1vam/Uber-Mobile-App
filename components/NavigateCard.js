import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';

const NavigateCard = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-xl text-center py-5">Hello, Satya Puro</Text>
      <View>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          nearByPlacesApi="GooglePlacesSearch"
          debounce={400}
          styles={mapAutoCompleteStyles}
          fetchDetails
          minLength={2}
          returnKeyType="search"
          onPress={(data, details = null) => {

          }}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en'
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard;

export const mapAutoCompleteStyles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'white',
    paddingTop: 20
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 0,
  }
})