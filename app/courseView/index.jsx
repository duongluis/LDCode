import Chapters from '@/components/Course/Chapters';
import Intro from '@/components/Course/Intro';
import HeaderView from '@/components/Main/HeaderView';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View } from 'react-native';


export default function CourseView() {

    const { courseParam } = useLocalSearchParams();
    const course = JSON.parse(courseParam);

    return (
        <View>
            <HeaderView text={"Khóa học"}/>
            <Intro course={course} />
            <Chapters course={course} />

        </View>
    )
}

