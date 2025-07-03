import HeaderView from '@/components/Main/HeaderView'
import UserList from '@/components/Main/UserList'
import { db } from '@/config/firebaseConfig'
import Colors from '@/constant/Colors'
import { UserDetailContext } from '@/context/UserDetailContext'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

export default function userListView() {
        const [userList, setUserList] = useState([]);
        const { userDetail, setUserDetail } = useContext(UserDetailContext);
    
        useEffect(() => {
            userDetail && GetUserList()
        }, [userDetail]);
    
        console.log(userList);
        const GetUserList = async () => {
            // console.log("user da hoan thanh courselist :", userDetail?.name);
            const users = [];
            const q = query(collection(db, 'users'), where("member", "==", false));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                users.push({
                    id: doc.data().uid,
                    name:doc.data().name,
                    email:doc.data().email,
                });
    
            });
            setUserList(users);
    
        }
    return (
        <View>
            <HeaderView text={"Danh sách người dùng"} />
            <UserList userList={userList} />
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'left',
    width: Dimensions.get('screen').width ,
    justifyContent: 'space-between',
    backgroundColor: Colors.White,
  }
})