import Colors from '@/constant/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function UserList({ userList }) {
  const router = useRouter();
  console.log("userList : ", userList);
  const testData = [
    { id: '1', name: 'Test 1', email: 'test1@test.com' },
    { id: '2', name: 'Test 2', email: 'test2@test.com' }
  ];
  return (
    <ScrollView>
      <Pressable onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={32} color="green" />
      </Pressable>
      <View style={{ flexDirection: "column", marginTop: 10 }}>
        <View style={styles.container} >
          <Text style={styles.title}>Id</Text>
          <Text style={styles.title}></Text>
          <Text style={styles.title}>Tên</Text>
          <Text style={styles.title}></Text>
          <Text style={styles.title}>Email</Text>
        </View>
        <FlatList
          data={userList}
          horizontal={false}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.context}>{item.id}</Text>
              <Text style={styles.context}></Text>

              <Text style={styles.context}>{item.name}</Text>
              <Text style={styles.context}></Text>
              <Text style={styles.context}>{item.email}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      margin: 6,
      borderRadius: 10,
      width: '100%',

      backgroundColor: Colors.LightGray,

      height: 50
    },
    context: {
      flex: 1,
      fontFamily: 'outfit',
      fontSize: 15,
      width: '33%'
    },
    title: {
      flex: 1,
      fontFamily: 'outfit-bold',
      fontSize: 20,
      width: '33%'
    }
  }
)