import { generateCourseContent } from '@/config/AIModel';
import { db } from '@/config/firebaseConfig';
import Colors from '@/constant/Colors';
import { UserDetailContext } from '@/context/UserDetailContext';
import { router } from 'expo-router';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function addCourse() {
    const [isLoading, setIsLoading] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [course, setCourse] = useState(null);
    const {userDetail, setUserDetail} = useContext(UserDetailContext);

    const handleGenerate = async () => {
        if (!userInput.trim()) {
            Alert.alert('Lỗi', 'Vui lòng nhập chủ đề khóa học');
            return;
        }

        setIsLoading(true);
        try {
            const generatedCourse = await generateCourseContent(userInput);
            setCourse(generatedCourse);
            // saveCourse(generatedCourse);
            
            // console.log("generatedCourse : ", generatedCourse);
            generatedCourse.forEach(async (element) => {
                    await saveCourse(element);

            });

            // Alert.alert('Thành công', 'Khóa học đã được tạo thành công!');

            // await saveCourse(generatedCourse);
            router.push('/tabs/main');
        } catch (error) {
            console.error('Generation Error:', error);
            Alert.alert('Lỗi', 'Không thể tạo khóa học: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };



    const saveCourse = async (courseData) => {
        try {
            const courseId = Date.now().toString();


            const data = {
                title: courseData,
                createdAt: new Date().toISOString(),
                id: courseId,
                createdBy: userDetail?.email,

                // title: courseData.title,
                // description: courseData.description,
                // chapters: courseData.chapters,
                // imageUrl: courseData.imageUrl,

            }

            console.log("courseData : ", data)
            const oldSave = await getDoc(doc(db, 'courses', courseId));
            await setDoc(doc(db, 'courses', courseId), data);

            setUserInput('');
            setCourse(null);
        } catch (error) {
            console.error('Save Error:', error);
            Alert.alert('Lỗi', 'Không thể lưu khóa học: ' + error.message);
        }
    };

    return (
        <View style={{
            padding: 25,
            backgroundColor: Colors.White,
            flex: 1
        }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 30
            }}>Here is the place where we add course</Text>
            <Text> What you want to learn</Text>

            <TextInput placeholder='Ex. Learn Javascript'
                style={[styles.textInput]}
                numberOfLines={3}
                onChangeText={(value) => setUserInput(value)} />
            <TouchableOpacity style={[styles.button]}
                onPress={handleGenerate}
                disabled={isLoading || !userInput.trim()}

            >
                {!isLoading ?
                    <Text style={styles.buttonText}>Search</Text> :
                    <ActivityIndicator size={'large'} color={Colors.Default} />}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        backgroundColor: Colors.White,
        marginTop: 20,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textInput: {
        borderWidth: 1,
        borderColor: Colors.lightGray,
        width: '100%',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        fontFamily: 'outfit',
        fontSize: 18
    }
})