import { UserDetailContext } from '@/context/UserDetailContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React, { useContext } from 'react';

export default function TabLayout() {
  const {userDetail,setUserDetail}=useContext(UserDetailContext);
  return (
    <Tabs>
      <Tabs.Screen name="main"
        options={{
          title:"Trang chủ",
          headerShown:false,
          tabBarIcon: (color,size) => (
            <Ionicons name="home" size={24} color={color} />
          )
        }} />
      <Tabs.Screen name="course"
        options={{
          title:"Khóa học",
          // headerShown:false,
          tabBarIcon: (color,size) => (
            <AntDesign name="book" size={24} color={color} />
          )
        }} />
      <Tabs.Screen name="task"
        options={{
          title:"Bài tập",
          // headerShown:false,
          tabBarIcon: (color,size) => (
            <AntDesign name="checkcircleo" size={24} color={color} />
          )
        }} />
      <Tabs.Screen name="profile"
        options={{
          title:"Cá nhân",
          headerShown:false,
          tabBarIcon: (color,size) => (
            <AntDesign name="user" size={24} color={color} />
          )
        }} />
    {/* {userDetail?.member=="true"?
    <Tabs.Screen name="member"
        options={{
          tabBarIcon: (color,size) => (
            <AntDesign name="user" size={24} color={color} />
          )
        }} />:console.log("no permission")} */}
    </Tabs>
    
  )
}