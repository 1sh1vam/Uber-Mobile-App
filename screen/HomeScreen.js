import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../store/slices/navSlices';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="pt-10 flex-1 bg-white">
      <View className="p-5">
        <Image
          style={{ resizeMode: 'contain' }}
          source={require('../assets/uber-logo.png')}
          className="w-[100px] h-[100px]"
        />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            }
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          minLength={2}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description,
            }))
            dispatch(setDestination(null))
          }}
          fetchDetails
          placeholder="Where From?"
          debounce={400}
          nearByPlacesAPI="GooglePlacesSearch"
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
