import React from 'react'
import { Text, View } from 'react-native'

export default function index() {
  return (
    <View style={{
        padding: 25,
        backgroundColor:Colors.White,
        flex:1
    }}>
      <Text style={{
        fontFamily:'outfiit-bold',
        fontSize:30
      }}>Here is the place where we add course</Text>
      <Text> What you want to learn</Text>
    </View>
  )
}