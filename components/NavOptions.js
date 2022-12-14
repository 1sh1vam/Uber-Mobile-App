import { FlatList, Image, Pressable, Text, View } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../store/slices/navSlices';

const StyledPressable = styled(Pressable);
const StyledIcon = styled(Icon);

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: require('../assets/UberCar.webp'),
    screen: 'MapScreen',
  },
  {
    id: '1452',
    title: 'Order food',
    image: require('../assets/uber-eat.png'),
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <StyledPressable
          onPress={() => navigation.navigate(item.screen)}
          className="active:opacity-50 p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
        >
          <View className={`${!origin && 'opacity-20'}`}>
            <Image
              style={{ resizeMode: 'contain' }}
              source={item.image}
              className="w-[120px] h-[120px]"
            />
            <Text className="text-lg font-semibold mt-2">{item.title}</Text>
            <StyledIcon
              className="p-2 rounded-full bg-black w-10 mt-4"
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </StyledPressable>
      )}
    />
  );
};

export default NavOptions;
