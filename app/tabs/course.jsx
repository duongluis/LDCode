import Button from '@/components/Shared/Button';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

export default function course() {
  const router = useRouter();

  return (
    <View>
      <Text>course</Text>
      <Text> Đây là nơi hiểnn thị danh sách các khóa học</Text>
              <Button text={'+ Thêm khóa học'} onPress={() => router.push('/addCourse')}/>
    </View>
  )
}