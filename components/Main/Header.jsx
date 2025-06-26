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

                }}>Hello, {userDetail?.name}</Text>
                {console.log("userDetail", userDetail)}
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 17
                }}>Let's start!</Text>
            </View>

        </View>
    )
}