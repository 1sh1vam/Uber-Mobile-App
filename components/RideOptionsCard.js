import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
import { Icon } from '@rneui/themed';

const StyledPressable = styled(Pressable);

const RideOptionsCard = () => {
  return (
    <SafeAreaView>
      <View>
        <StyledPressable className="absolute top-3 left-5 p-3 z-50">
          <Icon name="chevron-left" type="fontawesome" />
        </StyledPressable>
        <Text className="text-center text-xl py-5">Select a Ride</Text>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})