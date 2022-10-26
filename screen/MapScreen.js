import { Pressable, Text, View } from 'react-native';
import React from 'react';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { styled } from 'nativewind';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();
const StyledPressable = styled(Pressable);

const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <StyledPressable onPress={() => navigation.navigate('HomeScreen')} className="active:opacity-50 bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg">
        <Icon name="menu" />
      </StyledPressable>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
