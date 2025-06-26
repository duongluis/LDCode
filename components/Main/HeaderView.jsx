import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function HeaderView({text}) {
    const router= useRouter();
  return (
    <View style={{
            disply:'flex',
            marginTop:10,
            flexDirection:'row',
            justifyContent:'center',
            marginBottom: 10,
        }}>
      <Text style={{fontSize:25,fontFamily:'outfit',textAlign:'center'}}>{text}</Text>
    </View>
  )
}