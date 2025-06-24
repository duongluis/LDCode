import Button from '@/components/Shared/Button';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

export default function course() {
  const router = useRouter();

  return (
    <View>
      <Text>course</Text>
      <Text> This will be the screen for course , where we have some courses for languages</Text>
              <Button text={'+ Add New Course'} onPress={() => router.push('/addCourse')}/>
    </View>
  )
}