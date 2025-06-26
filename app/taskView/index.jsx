import HeaderView from '@/components/Main/HeaderView'
import React from 'react'
import { Text, View } from 'react-native'

export default function taskView() {
  return (
    <View>
        <HeaderView text={"Task View"}/>
      <Text>taskView</Text>
    </View>
  )
}