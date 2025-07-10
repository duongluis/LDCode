import Chapters from '@/components/Course/Chapters';
import Intro from '@/components/Course/Intro';
import HeaderView from '@/components/Main/HeaderView';
import { db } from '@/config/firebaseConfig';
import { UserDetailContext } from '@/context/UserDetailContext';
import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';


export default function CourseView() {

    const [course, setCourse] = useState([]);
    const { courseParam, courseId ,fromMain} = useLocalSearchParams();
    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    // console.log("course Param : ", JSON.parse(courseParam));


    useEffect(() => {
        // console.log("Course data:", course);
    }, [course]);

    useEffect(() => {
        if (!courseParam) {
            GetCourse();
            console.log("GetCourse với Id thu được : ", courseId);
        }
        else {
            setCourse(JSON.parse(courseParam));
            console.log("Không lấy được id nên phải setCourse với courseParam thu được: ", JSON.parse(courseParam))
        }
    }, [courseId])

    const GetCourse = async () => {
        const queryCourse = await getDoc(doc(db, "users", userDetail?.email))
        const courseData = queryCourse.data().courses;
        const foundCourse = courseData.find(element =>
            element.id.toString() === courseId.toString()
        );
        if (foundCourse) {
            setCourse(foundCourse);
            console.log("Đã tìm thấy khóa học:", foundCourse);
        } else {
            console.log("Không tìm thấy khóa học phù hợp");
        }

    }

    return course && (
        <View>
            <HeaderView text={"Khóa học"} />
            {fromMain=="true" ?
                <View>
                    <Intro course={course} joined={true}/>
                    <Chapters course={course} />
                </View>
                :
                <Intro course={course} joined={false}/>
            }

        </View>
    )
}

