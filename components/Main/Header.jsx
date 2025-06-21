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
            
        }}>

            <View>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 25,
                    //loi khong hien thi ten 
                }}>Hello, {userDetail?.name}</Text>

                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 17
                }}>Let's start!</Text>
            </View>
            {/* cho nay de chen icon */}

        </View>
    )
}