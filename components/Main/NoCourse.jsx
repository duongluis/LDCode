import React from 'react'
import { Text, View } from 'react-native'

export default function NoCourse() {
  return (
    <View style={{
        marginTop:40,
        display:'flex',
        alignItems:'center',
    }}>
      <Text style={{
        fontFamily: 'outfiit-bold',
        fontSize:25,
        textAlign:'center'
        }}>You don't have any course</Text>


        <Button text={'+ Create New Course'}/>
        <Button text={'Explore Existing Course'}/>
    </View>
  )
}