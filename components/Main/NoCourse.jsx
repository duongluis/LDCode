import { useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import Button from '../Shared/Button';


export default function NoCourse() {
  const router = useRouter();
  const navigation = useNavigation();
  return (
    <View style={{
        marginTop:40,
        display:'flex',
        alignItems:'center',
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize:20,
        textAlign:'center'
        
        }}>Bạn chưa có khóa học nào cả {'\n'} Nhấn vào nút bên dưới để xem khóa học nha</Text>
        

        <Button text={'Xem danh sách khóa học'} onPress={()=>navigation.navigate('course')}/>

    </View>
  )
}