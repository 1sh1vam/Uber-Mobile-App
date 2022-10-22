import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView className="pt-10 flex-1 bg-white">
      <View className="p-5">
        <Image style={{ resizeMode: 'contain' }} source={require('../assets/uber-logo.png')} className="w-[100px] h-[100px]" />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})