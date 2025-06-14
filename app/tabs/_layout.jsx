import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
<Tabs>
    <TabLayout.Screen name="main" />
    <TabLayout.Screen name="course" />
    <TabLayout.Screen name="task" />
    <TabLayout.Screen name="profile" />

</Tabs>

  )
}