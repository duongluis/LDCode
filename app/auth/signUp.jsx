import { UserDetailContext } from '@/context/UserDetailContext';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { Alert, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
                if (username != "null" || email != "null" || password != "null") {
                    await SaveUser(user);
                } else {
                    Alert.alert("Vui lòng nhập đầy đủ thông tin người dùng");
                }


            })
            .catch(e => {
                Alert.alert("Bạn chưa đăng ký thành công, vui lòng kiểm tra thông tin và thử lại")
            })
    }

    const SaveUser = async (user) => {
        const courses = []
        const data = {
            name: username,
            email: email,
            password: password,
            member: false,
            uid: user?.uid,
            courses: courses
        }

        await setDoc(doc(db, 'users', email), data)

        // console.log("user detail : ", data);
        setUserDetail(data);

        router.push('/auth/signIn')
    }

    return (
        <View style={{
            display: 'center',
            alignItems: 'center',
            paddingTop: 100,
            backgroundColor: Colors.White,
            height:Dimensions.get('screen').height,
        }}>
            <Image source={require('./../../assets/images/LDcode.png')}
                style={{
                    width: '100%',
                    height: 300,
                }} />
            <Text style={{
                fontSize: 30,
                fontFamily: 'outfit-bold',
                color: Colors.Black,
                textAlign: 'center'
            }}>Đăng ký tài khoản</Text>

            <KeyboardAwareScrollView enableOnAndroid={true} extraScrollHeight={20} showsHorizontalScrollIndicator={false}>

                <TextInput autoFocus={true} placeholder='Tên người dùng' value={username} onChangeText={(value) => setUsername(value)} style={styles.textInput} />
                <TextInput placeholder='Email' value={email} onChangeText={(value) => setEmail(value)} style={styles.textInput} />
                <TextInput placeholder='Mật khẩu' value={password} onChangeText={(value) => setPassword(value)} style={styles.textInput} />
            </KeyboardAwareScrollView>

            <TouchableOpacity style={styles.button}
                onPress={() => {
                    CreateNewAccount();
                }}>
                <Text style={styles.buttonText}>Đăng ký</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.Default,
        marginTop: 20,
        borderRadius: 15
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color:Colors.White
    },
    textInput: {
        minWidth: 200,
        maxWidth: 300,
        textInput: '100%',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        marginTop: 25
    }
})