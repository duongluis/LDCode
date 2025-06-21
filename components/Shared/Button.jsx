import Colors from '@/constant/Colors'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function Button({Text, type ="fill",onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={{
        padding:15,
        width:'100%',
        borderRadius:15,
        marginTop:15,
        backgroundColor:type=='fill'?Colors.Default:Colors.White,
    }}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}