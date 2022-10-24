import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
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
      renderItem={({ item }) => (
        <StyledPressable className="flex-row items-center p-5">
          <StyledIcon
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
            className="bg-gray-300 mr-4 p-3 rounded-full"
          />
          <View>
            <Text>Hello</Text>
          </View>
        </StyledPressable>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
