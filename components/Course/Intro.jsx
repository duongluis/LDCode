import { db } from '@/config/firebaseConfig';
import Colors from '@/constant/Colors';
import { ImageAsset } from '@/constant/Option';
import { UserDetailContext } from '@/context/UserDetailContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useContext } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import Button from '../Shared/Button';

export default function Intro({ course, joined }) {
    const router = useRouter();
    const { userDetail, setUserDetail } = useContext(UserDetailContext);

    console.log('chapters in Intro : ', course?.id);
    const SaveCourse = async () => {
        const user = doc(db, "users", userDetail?.email);
        const userDoc = await getDoc(user);
        const currentCourses = userDoc.data()?.courses || [];

        const courseExists = currentCourses.some(
            existingCourse => existingCourse.id === course.id
        );

        if (!courseExists) {

            setUserDetail(prev => ({
                ...prev,
                courses: [...prev.courses, course]
            }));

            console.log("userDetail sau khi them khoa hoc : ", userDetail?.courses);
            await updateDoc(user, {
                courses: arrayUnion(course)
            });
        }
        Alert.alert("Bạn đã tham gia khóa học thành công!")
        router.push('/tabs/main');
    }
    return (
        <View style={{ width: '100%' }}>
            <Pressable onPress={() => {
                router.replace('/tabs/main');
            }}>
                <Ionicons name="arrow-back" size={32} color="green" />
            </Pressable>
            <Image source={ImageAsset[course?.banner_image]}
                style={styles.banner_image} />
            <View style={{ alignItems: 'center' }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginTop: 20,
                    textAlign: 'center'
                }}>
                    {course?.title}
                </Text>
            </View>

            <Text style={{ fontSize: 20, marginTop: 10, fontFamily: 'outfit-bold' }}>
                Mô tả khóa học:
            </Text>
            <Text style={{ fontSize: 16, marginTop: 10, marginLeft: 10, width: "95%" }}>
                {course?.description}

            </Text>

            {!joined ?
                <Button text={'Tham gia'} onPress={() => {
                    SaveCourse();
                    // router.push({
                    //     pathname: '/chapterView',
                    //     params: {
                    //         chapterParam: JSON.stringify(course?.chapters[0]),
                    //         docId:course?.chapters[0].doc_id,
                    //         chapterIndex: 0
                    //     }
                    // })
                }} /> : <Text></Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    courseContainer: {
        flex: 1,
        padding: 10,
        margin: 6,
        borderRadius: 10,
        width: "100%",
        backgroundColor: Colors.LightGray,
    },
    banner_image: {
        width: '100%',
        height: 200,
        marginTop: 20
    }
});