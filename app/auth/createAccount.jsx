import { useRouter } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from '../../config/firebaseConfig';
import Colors from './../../constant/Colors';
export default function CreateAccount() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const router = useRouter();
    const handleTextChange = (newText) => {
        if (newText.trim() === '') {
            Alert.alert('Error, Please fill your name');
            return;
        }
        setName(newText);
    };

    const CheckNull = () => {
        if (!text || text.trim() === '') {
            Alert.alert('Error, Please fill your name');
            return;
        }
    };

 const saveUser = async () => {
        if (!validateInputs()) return;

        try {
            const userId = Date.now().toString();

            await setDoc(doc(db, 'users', userId), {
                name: name.trim(),
                email: email.trim(),
                createdAt: new Date().toISOString()
            });

            Alert.alert('Thành công', 'Đã tạo người dùng thành công');
            setName('');
            setEmail('');
        } catch (error) {
            Alert.alert('Lỗi', 'Không thể lưu dữ liệu: ' + error.message);
        }
    };
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
        }}>Thong tin ca nhan</Text>

        <TextInput placeholder='Full Name' value={text} onChangeText={handleTextChange} style={styles.textInput} />
        <TextInput placeholder='Email (optional)' style={styles.textInput} />

        <TouchableOpacity style={styles.button}
            onPress={() => {
               CheckNull();
            }}>
            <Text style={styles.buttonText}>Nop</Text>

        </TouchableOpacity>
    </View>
)
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
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
        minWidth: 150,
        maxWidth: 300,
        textInput: '100%',
        paddingTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        marginTop: 25
    }
})
