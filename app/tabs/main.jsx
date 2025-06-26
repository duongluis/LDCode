import CourseList from '@/components/Main/CourseList';
import Header from '@/components/Main/Header';
import NoCourse from '@/components/Main/NoCourse';
import { db } from '@/config/firebaseConfig';
import Colors from '@/constant/Colors';
import PracticeSection from '@/constant/PracticeSection';
import { UserDetailContext } from '@/context/UserDetailContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';

export default function main() {
    const [coursesList, setCoursesList] = useState([]);
    const { userDetail, setUserDetail } = useContext(UserDetailContext);

    useEffect(() => {
        // console.log("use Effect working");
        userDetail && GetCourseList()
    }, [userDetail]);

    const GetCourseList = async () => {

        // console.log("user da hoan thanh courselist :", userDetail?.name);
        const courses = [];
        const q = query(collection(db, 'courses'), where("createdBy", "==", userDetail?.email));
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
        <View style={{
            padding: 25,
            paddingTop: 45,
            flex: 1,
            backgroundColor: Colors.White
        }}>
            <Header />
            {coursesList?.length === 0 ? <NoCourse />
                :
                <View>
                    <PracticeSection />
                    <CourseList courseList={coursesList} />
                </View>
            }
        </View>
    )
}