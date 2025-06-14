import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../../constant/Colors';


export default function signUp() {

        const [email, setEmail] = useState();
        const [password, setPassword] = useState();
        const [username, setUsername] = useState();

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

            <TextInput placeholder='User Name' value={username} style={styles.textInput} />
            <TextInput placeholder='Email' value={email}  style={styles.textInput} />
            <TextInput placeholder='Password' value={password} secureTextEntry={true} style={styles.textInput} />

            <TouchableOpacity style={styles.button}
                onPress={() => {
                    router.push('./../tabs/main')
                    // saveUser();
                }}>
                <Text style={styles.buttonText}>Sign Up</Text>

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