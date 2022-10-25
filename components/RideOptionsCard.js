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
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInfo } from '../store/slices/navSlices';

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

const SURGE_CHARGE_RATE = 14;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const travelTimeInfo = useSelector(selectTravelTimeInfo);

  return (
    <SafeAreaView>
      <View>
        <StyledPressable
          onPress={() => navigation.navigate('NavigateCard')}
          className="absolute top-3 left-5 p-3 z-50"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </StyledPressable>
        <Text className="text-center text-xl py-5">
          Select a Ride - {travelTimeInfo?.distance.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StyledPressable
            onPress={() => setSelectedOption(item)}
            className={`flex flex-row items-center justify-between px-10 active:bg-gray-200 ${selectedOption?.id === item.id && 'bg-gray-300'
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
                <Text>{travelTimeInfo?.duration.text}</Text>
              </View>
            </View>
            <Text className="text-xl">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(
                (travelTimeInfo?.duration.value *
                SURGE_CHARGE_RATE *
                item.multiplier) / 100
              )}
            </Text>
          </StyledPressable>
        )}
      />
      <StyledPressable
        disabled={!selectedOption}
        className={`bg-black py-3 m-4 active:opacity-50 ${!selectedOption && 'bg-gray-300'
          }`}
      >
        <Text className="text-white text-xl text-center">
          Choose {selectedOption?.title}
        </Text>
      </StyledPressable>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
