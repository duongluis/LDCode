import { useRouter } from 'expo-router';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Colors from './../../constant/Colors';
import styles from './../index.jsx';

export default function SignIn() {
    const router= useRouter();
  return (
    <View style={{
        display:'center',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:100,
        flex:1,
        blackgroundColor:Colors.Default
    }}>
        <TouchableOpacity style={styles.button}>
            <Text>Sign In with Google </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button,{
            paddingTop:100,
            borderColor:Colors.Black
        }]}
            onPress={()=>{ 
                console.log("width : " + Dimensions.get('screen').Width)
                router.push('/auth/createAccount')

            }
    }>
            <Text>Sign In as guest </Text>
        </TouchableOpacity>
    </View>
)}