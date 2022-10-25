import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { styled } from 'nativewind';
import { Icon } from '@rneui/themed';

const data = [
  {
    id: '123',
    title: 'Uber Go',
    multiplier: 1,
    image: require('../assets/UberCar.webp'),
  },
  {
    id: '234',
    title: 'uberXL',
    multiplier: 1.2,
    image: require('../assets/UberXL.webp'),
  },
  {
    id: '566',
    title: 'Uber Premium',
    multiplier: 1.75,
    image: require('../assets/UberPremium.webp'),
  },
];

const StyledPressable = styled(Pressable);

const RideOptionsCard = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <SafeAreaView>
      <View>
        <StyledPressable className="absolute top-3 left-5 p-3 z-50">
          <Icon name="chevron-left" type="fontawesome" />
        </StyledPressable>
        <Text className="text-center text-xl py-5">Select a Ride</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StyledPressable
            onPress={() => setSelectedOption(item)}
            className={`flex flex-row items-center justify-between px-10 active:bg-gray-200 ${
              selectedOption?.id === item.id && 'bg-gray-300'
            }`}
          >
            <View className="flex-row items-center gap-4">
              <Image
                style={{ resizeMode: 'contain' }}
                source={item.image}
                className="w-[100px] h-[100px]"
              />
              <View>
                <Text className="text-xl font-semibold">{item.title}</Text>
                <Text>Travel time...</Text>
              </View>
            </View>
            <Text className="text-xl">₹300</Text>
          </StyledPressable>
        )}
      />
      <StyledPressable className="bg-black py-3 m-4 active:opacity-50">
        <Text className="text-white text-xl text-center">Choose ..</Text>
      </StyledPressable>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
