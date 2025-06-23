import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import Button from '../Shared/Button';


export default function NoCourse() {
  const router = useRouter();
  return (
    <View style={{
        marginTop:40,
        display:'flex',
        alignItems:'center',
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize:25,
        textAlign:'center'
        }}>You don't have any course</Text>


        <Button Text={'+ Add New Course'} onPress={()=>router.push('./addCourse')}/>
 
    </View>
  )
}