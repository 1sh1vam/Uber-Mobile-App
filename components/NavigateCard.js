import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setDestination } from '../store/slices/navSlices';
import NavFavourites from './NavFavourites';
import { styled } from 'nativewind';
import { Icon } from '@rneui/themed';

const StyledPressable = styled(Pressable);

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-xl text-center py-5">Hello, Satya Puro</Text>
      <View className="border-t flex-shrink border-gray-200 z-10">
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          nearByPlacesApi="GooglePlacesSearch"
          debounce={400}
          styles={mapAutoCompleteStyles}
          fetchDetails
          minLength={2}
          returnKeyType="search"
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            navigation.navigate('RideOptionsCard');
          }}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
        />
      </View>
      <NavFavourites />

      <View className="flex-row bg-white justify-evenly py-4 border-t border-gray-100 mt-auto">
        <StyledPressable className="flex-row items-center justify-between w-24 bg-black px-4 py-3 pt-2 rounded-full active:opacity-50">
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-white text-center">Rides</Text>
        </StyledPressable>
        <StyledPressable className="flex-row items-center gap-2 px-4 py-3 rounded-full active:opacity-50">
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text className="text-center">Eats</Text>
        </StyledPressable>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

export const mapAutoCompleteStyles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
});
