import HeaderView from '@/components/Main/HeaderView';
import Button from '@/components/Shared/Button';
import Colors from '@/constant/Colors';
import { UserDetailContext } from '@/context/UserDetailContext';
import { useRouter } from 'expo-router';
import { getAuth, signOut } from 'firebase/auth';
import { useContext } from 'react';
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function profile() {
  const router = useRouter();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  console.log("check member : " ,userDetail?.member," ",typeof(userDetail?.member));
  const LogOut= () => {
    // const auth = getAuth();
    // try {
    //   await signOut(auth).then(()=>{router.replace('/');
    //   console.log('Logout successful');}
    // )} catch (error) {
    //   console.error('Logout error:', error);
    // }
      Alert.alert(
    'Xác nhận đăng xuất',
    'Bạn có chắc chắn muốn đăng xuất?',
    [
      {
        text: 'Hủy',
        style: 'cancel',
      },
      {
        text: 'Đăng xuất',
        onPress: async () => {
          const auth = getAuth();
          await signOut(auth)
            .then(() => {
              router.replace('/');
              console.log('Đăng xuất thành công');
            })
            .catch((error) => console.log('Lỗi đăng xuất:', error));
        },
        style: 'destructive',
      },
    ],
    { cancelable: true }
  );
};
  
  return (
    <View>
      <HeaderView text={"Thông tin cá nhân"} />
      <TouchableOpacity onPress={() => {
        router.push('/personalView');
      }}>
        <View style={styles.container}>
          <Text>Thông tin cá nhân</Text>

        </View>
      </TouchableOpacity>

      <TouchableOpacity style={
        styles.container}
        onPress={() => {
          router.push('/progressView');
        }}>

        <Text >Tiến trình</Text>

      </TouchableOpacity>

      {userDetail?.member? <TouchableOpacity style={
        styles.container}
        onPress={() => {
          router.push('/userListView');
        }}>

        <Text >Danh sách thành viên</Text>
      </TouchableOpacity> : <Text></Text>}
      <View style={{
        marginTop: 400,
        padding: '16px',
        borderTop: '1px solid #eee',
        background: 'white'
      }}>
        <Button text={'Đăng xuất'} onPress={() => LogOut()} />
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
    width: Dimensions.get('screen').width,
    justifyContent: 'space-between',
    backgroundColor: Colors.White,
  }
})