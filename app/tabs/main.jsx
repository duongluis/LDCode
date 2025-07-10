import CourseList from '@/components/Main/CourseList';
import Header from '@/components/Main/Header';
import NoCourse from '@/components/Main/NoCourse';
import { db } from '@/config/firebaseConfig';
import Colors from '@/constant/Colors';
import { UserDetailContext } from '@/context/UserDetailContext';
import { useRouter } from 'expo-router';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function main() {
    const router = useRouter();
    const [coursesList, setCoursesList] = useState([]);
    const { userDetail, setUserDetail } = useContext(UserDetailContext);

    useEffect(() => {
        userDetail && GetCourseList()
    }, [userDetail]);

    const GetCourseList = async () => {
        console.log("user da hoan thanh courselist :", userDetail?.email, " and ", typeof (userDetail?.email));
        const courses = [];

        if (userDetail?.member) {
            const q = collection(db, 'courses');
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                courses.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            console.log("course tu admin : ", courses);
        }
        else {
            const q = doc(db, 'users', userDetail?.email);
            const querySnapshot = await getDoc(q);
            console.log("Query Snapshot :", querySnapshot.data().courses);
            const userCourses = querySnapshot.data().courses;
            userCourses.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                courses.push(doc);

            });
            console.log("course tu nguoi dung : ", courses);
        }
        setCoursesList(courses);

    }

    return (
        <View style={{
            paddingTop: 45,
            flex: 1,
            backgroundColor: Colors.White
        }}>

            <Header style={{ flex: 90 }} />

            {coursesList?.length === 0?
                <NoCourse /> :
                <View>
                    {/* <PracticeSection /> */}
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>  Khóa học đang tham gia
                    </Text>
                    <CourseList courseList={coursesList} direct={"row"} fromMain={"true"} />
                </View>
            }
        </View>
    )
}