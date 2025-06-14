import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import Colors from './../../constant/Colors';
import styles from './../index.jsx';

export default function SignIn() {
    const router = useRouter();
    return (
        <View style={{
            display: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 100,
            flex: 1,
            blackgroundColor: Colors.Default
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
            }}>Dang nhap</Text>

            <TextInput placeholder='Email' value={email} style={styles.textInput} />
            <TextInput placeholder='Password' value={password} secureTextEntry={true} style={styles.textInput} />

            <TouchableOpacity style={styles.button}
                onPress={() => {
                    // router.push('./../tabs/main')
                    router.push('./../tabs/main')
                    // saveUser();
                }}>
                <Text style={styles.buttonText}>Sign In</Text>

            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}>
                {/* chen icon vao sau sign in */}
                <Text>Sign In with Google </Text> 
            </TouchableOpacity>

        </View>
    )
}