import { auth, db } from '@/config/firebaseConfig';
import { UserDetailContext } from '@/context/UserDetailContext';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Colors from './../../constant/Colors';

export default function SignIn() {
    const router = useRouter();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    const [loading, setLoading] = useState(false);

    const signInByClick = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(async (resp) => {
                const user = resp.user

                console.log(user)
                await getUserDetail();

                setLoading(false);
                router.replace('./../tabs/main')

            })
            .catch(e => {
                const errorMessage = e.message;
                console.log(errorMessage);
                setLoading(false);
                ToastAndroid.show('Incorrect Email and Password', ToastAndroid.TOP);
            });
    }

    const getUserDetail = async () => {
        const result = await getDoc(doc(db, 'users', email))
        console.log(result.data())
        setUserDetail(result.data)
    }

    return (
        <View style={{
            display: 'center',
            alignItems: 'center',
            paddingTop: 100,
            flex: 1,
            blackgroundColor: Colors.White
        }}>

            <Image source={require('./../../assets/images/LDcode.png')}
                style={{
                    width: '100%',
                    height: 300,
                }} />

            <Text style={{
                fontSize: 30,
                marginTop: 100,
                fontFamily: 'outfit-bold',
                color: Colors.Black,
                textAlign: 'center'
            }}>Dang nhap</Text>

            <TextInput placeholder='Email' value={email} onChangeText={(value) => setEmail(value)} style={styles.textInput} />
            <TextInput placeholder='Password' value={password} onChangeText={(value) => setPassword(value)} secureTextEntry={true} style={styles.textInput} />

            <TouchableOpacity
                style={styles.button}
                disabled={loading}
                onPress={() => {
                    signInByClick()
                }}>
                {!loading ?
                    <Text style={styles.buttonText}>Sign In</Text> :
                    <ActivityIndicator size={'large'} color={Colors.Default} />
                }

            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text>Sign In with Google </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: Colors.White,
        marginTop: 20,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textInput: {
        minWidth: 200,
        maxWidth: 300,
        textInput: '100%',
        paddingTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        marginTop: 25
    }
})
