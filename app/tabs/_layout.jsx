import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
<Tabs>
    <Tabs.Screen name="main"
//     options={{
// tabBarIcon:({color, size})=> <Entypo name="home" size={24} color="black" />
//     }}
      />
    <Tabs.Screen name="course" />
    <Tabs.Screen name="task" />
    <Tabs.Screen name="profile"/>
</Tabs>
  )
}