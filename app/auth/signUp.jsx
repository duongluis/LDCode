import { UserDetailContext } from '@/context/UserDetailContext';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth, db } from '../../config/firebaseConfig';
import Colors from '../../constant/Colors';


export default function signUp() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const { userDetail, setUserDetail } = useContext(UserDetailContext);

    const CreateNewAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (resp) => {
                const user = resp.user;
                console.log(user);

                await SaveUser(user);

            })
            .catch(e => {
                Alert.alert(e.message)
            })
    }

    const SaveUser = async (user) => {
        const data = {
            name: username,
            email: email,
            password: password,
            member: false,
            uid: user?.uid
        }

        await setDoc(doc(db, 'users', email), data)

        userDetail=data
        setUserDetail(userDetail);

        router.push('/auth/signIn')
    }

    return (
        <View style={{
            display: 'center',
            alignItems: 'center',
            paddingTop: 100,
            flex: 1,
            backgroundColor: Colors.White
        }}>
            <Image source={require('./../../assets/images/LDcode.png')}
                style={{
                    width: '100%',
                    height: 300,
                    marginTop: 70
                }} />
            <Text style={{
                fontSize: 30,
                fontFamily: 'outfit-bold',
                color: Colors.Black,
                textAlign: 'center'
            }}>Dang ki tai khoan</Text>

            <TextInput placeholder='User Name' value={username} onChangeText={(value) => setUsername(value)} style={styles.textInput} />
            <TextInput placeholder='Email' value={email} onChangeText={(value) => setEmail(value)} style={styles.textInput} />
            <TextInput placeholder='Password' value={password} onChangeText={(value) => setPassword(value)} style={styles.textInput} />

            <TouchableOpacity style={styles.button}
                onPress={() => {
                    CreateNewAccount();
                }}>
                <Text style={styles.buttonText}>Sign Up</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: Colors.Default,
        marginTop: 50,
        borderRadius: 15
    },
    buttonText: {
        fontSize: 18,
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