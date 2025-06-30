import { UserDetailContext } from '@/context/UserDetailContext';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';

export default function Header() {
    const { userDetail, setUserDetail } = useContext(UserDetailContext);
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

                }}>Chào mừng bạn, {userDetail?.name}</Text>
                {console.log("userDetail", userDetail)}
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 20
                }}>Hãy bắt đầu học thôi !</Text>
            </View>

        </View>
    )
}