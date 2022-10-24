import { FlatList, Pressable, Text, View } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';
import { Icon } from '@rneui/themed';

const data = [
  { id: '123', icon: 'home', location: 'Home', destination: 'Dadar, Mumbai' },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'Andheri East, Mumbai',
  },
];

const StyledPressable = styled(Pressable);
const StyledIcon = styled(Icon);

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View className="h-[0.5px] bg-gray-200" />
      )}
      renderItem={({ item }) => (
        <StyledPressable className="flex-row items-center p-5 active:opacity-50">
          <StyledIcon
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
            className="bg-gray-300 mr-4 p-3 rounded-full"
          />
          <View>
            <Text className="text-lg font-semibold">{item.location}</Text>
            <Text className="text-gray-500">{item.destination}</Text>
          </View>
        </StyledPressable>
      )}
    />
  );
};

export default NavFavourites;
