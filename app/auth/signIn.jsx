import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import Colors from '../../constant/Colors';
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
            paddingTop:100
        }]}
            onPress={()=> router.push('')}
        >
            <Text>Sign In with Google </Text>
        </TouchableOpacity>
    </View>
)}