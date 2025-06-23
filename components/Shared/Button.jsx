import Colors from '@/constant/Colors';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Button({ text, type = "fill", onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress} style={{
        padding: 15,
        width: '100%',
        borderRadius: 15,
        marginTop: 15,
        backgroundColor: type == 'fill' ? Colors.Default : Colors.White,
      }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize:25,
        backgroundColor: type == 'fill' ? Colors.White : Colors.Default,
      }}>{text}</Text>
    </TouchableOpacity>
  )
}