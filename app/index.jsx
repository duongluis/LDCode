import { auth, db } from '@/config/firebaseConfig';
import { UserDetailContext } from '@/context/UserDetailContext';
import { useRouter } from "expo-router";
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../constant/Colors";


export default function Index() {

  const router = useRouter();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);


  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const result = await getDoc(doc(db, 'users', user?.email));
      setUserDetail(result.data())
      router.replace('/tabs/main')
    }
  })

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.White
      }}>

      <Image source={require('./../assets/images/LDcode.png')}
        style={{
          width: '100%',
          height: 300,
          marginTop: 70
        }} />

      <View style={{
        padding: 25,
        backgroundColor: Colors.Default,
        height: '100%',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35
      }}>

        <Text style={{
          fontSize: 30,
          fontFamily: 'outfit-bold',
          color: Colors.White,
          textAlign: 'center'
        }}>Welcome to LDCode</Text>

        <Text style={{
          paddingTop: 150,
          fontSize: 25,
          fontFamily: 'outfit-bold',
          color: Colors.White,
          textAlign: 'center',
          marginBottom: 50
        }}>Please Click start to begin </Text>

        <TouchableOpacity style={styles.button}
          onPress={() => {
            console.log("Move to Sign In screen")
            router.push('/auth/signUp')
          }}>
          <Text style={[styles.buttonText, {
            color: Colors.Default,
          }]}>Get started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {

          backgroundColor: Colors.Default,
          borderWidth: 1,
          borderColor: Colors.White
        }]}
          onPress={() => router.push('/auth/signIn')}
        >
          <Text style={[styles.buttonText, { color: Colors.Black }]}>Have Used App Before ?</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: Colors.White,
    marginTop: 20,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
