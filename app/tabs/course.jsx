import CourseList from '@/components/Main/CourseList';
import Button from '@/components/Shared/Button';
import { db } from '@/config/firebaseConfig';
import { UserDetailContext } from '@/context/UserDetailContext';
import { useRouter } from 'expo-router';
import { collection, getDocs } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';

export default function course() {
  const router = useRouter();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
 const [coursesList, setCoursesList] = useState([]);

   useEffect(() => {
          userDetail && GetCourseList()
      }, [userDetail]);
  
      const GetCourseList = async () => {
          // console.log("user da hoan thanh courselist :", userDetail?.name);
          const courses = [];
          const q = collection(db, 'courses');
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              courses.push({
                  id: doc.id,
                  ...doc.data(),
              });
          });
          setCoursesList(courses);
        }

  return (
    <ScrollView>
      {userDetail?.member ?
        <Button text={'+ Thêm khóa học'} onPress={() => router.push('/addCourse')} /> :
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Danh sách khóa học
        </Text>
      }
        <CourseList courseList={coursesList} direct={"column"} />
    </ScrollView>
  )
}