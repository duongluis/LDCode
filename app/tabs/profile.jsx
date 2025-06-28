import HeaderView from '@/components/Main/HeaderView';
import Button from '@/components/Shared/Button';
import { auth } from '@/config/firebaseConfig';
import Colors from '@/constant/Colors';
import { UserDetailContext } from '@/context/UserDetailContext';
import { useRouter } from 'expo-router';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function profile() {
  const router = useRouter();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const LogOut = async () => {
    signOut(auth).then(()=>{    
    // await setUserDetail(null);
    router.replace('/');
  } )}


  return (
    <View>
      <HeaderView text={"Profile"} />
      <TouchableOpacity onPress={() => { }}>
        <View style={styles.container}>
        <Text>User Setting</Text>
        
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={
        styles.container}
        onPress={() => { }}>

        <Text >Progress</Text>

      </TouchableOpacity>
<View style={{
  marginTop:500,
   padding: '16px',
        borderTop: '1px solid #eee',
        background: 'white'
}}>
      <Button text={'Log Out'} onPress={() => LogOut()} />
</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'left',
    width: Dimensions.get('screen').width ,
    justifyContent: 'space-between',
    backgroundColor: Colors.White,
  }
})