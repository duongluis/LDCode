import Chapters from '@/components/Course/Chapters';
import Intro from '@/components/Course/Intro';
import HeaderView from '@/components/Main/HeaderView';
import { db } from '@/config/firebaseConfig';
import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';


export default function CourseView() {

const [course,setCourse] = useState([]);
    const { courseParam,courseId } = useLocalSearchParams();
    // const course = JSON.parse(courseParam);


    useEffect(()=>{
       if(!courseParam){
        GetCourse();
        console.log("GetCourse với Id thu được : ", courseId);
       } 
       else{
        setCourse(JSON.parse(courseParam));
        console.log("Không lấy được id nên phải setCourse với courseParam thu được: ", JSON.parse(courseParam))
       }
    },[courseId])
    
    const GetCourse= async () =>{
        const queryCourse = await getDoc(doc(db,"courses",courseId))
        const courseData = queryCourse.data();
        console.log("courseData : ", courseData," mang kiểu dữ liệu :" , typeof(courseData));
        setCourse(courseData);
    }

    return course &&(
        <View>
            <HeaderView text={"Khóa học"}/>
            <Intro course={course} />
            <Chapters course={course} />

        </View>
    )
}

