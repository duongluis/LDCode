import Colors from '@/constant/Colors';
import { UserDetailContext } from '@/context/UserDetailContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';

export default function Header() {
    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    const router=useRouter();
    return (
        <View style={{
            disply:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            marginBottom: 30,
            
        }}>
            <View>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 25,

                }}>  Chào mừng bạn, {userDetail?.name}</Text>
                {console.log("userDetail", userDetail)}
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 20
                }}>  Hãy bắt đầu học thôi !</Text>
            </View>
                <Pressable onPress={()=>{router.push('/questionView')}} style={{borderRadius:25}}>
                    <AntDesign name="questioncircle" size={50} color={Colors.Black} />
                </Pressable>
        </View>
    )
}