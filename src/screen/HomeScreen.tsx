import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'

const HomeScreen = () => {
  return (
   <SafeAreaView edges={["top"]} className='flex 1 bg-green-700'>
    <StatusBar barStyle={'light-content'} backgroundColor='#15803d' translucent={false}/>

    <View>
      <Header/>
    </View>

   </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})