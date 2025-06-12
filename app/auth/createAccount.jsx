import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import Colors from './../../constant/Colors';
export default function CreateAccount() {

    const [text, setText] = useState('');
    const { width, height } = useWindowDimensions();
    const router = useRouter();
    const handleTextChange = (newText) => {
        if (newText.trim() === '') {
            Alert.alert('Error, Please fill your name');
            return;
        }
        setText(newText);
    };

    const CheckNull = () => {
        if (!text || text.trim() === '') {
            Alert.alert('Error, Please fill your name');
            return;
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
