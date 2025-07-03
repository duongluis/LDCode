import Back from '@/components/Main/Back';
import HeaderView from '@/components/Main/HeaderView';
import Colors from '@/constant/Colors';
import { UserDetailContext } from '@/context/UserDetailContext';
import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Personal() {
    const router = useRouter();
    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    return (
        <View>
            <HeaderView text={"Thông tin cá nhân"} />
            <Back/>
            <Text style={styles.title}>Thông tin cá nhân</Text>
            <View style={styles.container}>
                <Text style={styles.content}>Tên người dùng :</Text>
                {/* <Text style={{flex:4}}>:</Text> */}
                <Text style={styles.content}>{userDetail?.name}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.content}>Email :</Text>
                {/* <Text style={{flex:4}}>:</Text> */}
                <Text style={styles.content}>{userDetail?.email}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.content}> Vai trò :</Text>
                {/* <Text style={{flex:4}}>:</Text> */}
                <Text style={styles.content}>{userDetail?.member ? "Quản trị viên" : "Thành viên"}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        color: Colors.Black
    },
    content: {
        flex:48,
        fontSize: 25,
        color: Colors.Black,
        // marginRight: 50,
        // marginLeft: 50
    }
})