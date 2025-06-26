import Colors from '@/constant/Colors';
import { ImageAsset } from '@/constant/Option';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Button from '../Shared/Button';

export default function Intro({ course }) {
    const router = useRouter();

    console.log('chapters in Intro : ', course?.id);

    return (
        <View>
            <Pressable onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={32} color="green" />
            </Pressable>
            <Image source={ImageAsset[course?.banner_image]}
                style={styles.banner_image} />
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>
                {course?.title}
            </Text>

            <Text style={{ fontSize: 20, marginTop: 10, fontFamily: 'outfit-bold' }}>
                Description:
            </Text>
            <Text style={{ fontSize: 16, marginTop: 10, marginLeft: 10, width: "100%" }}>
                {course?.description}
            </Text>

            <Button text={'Start Now'} onPress={() =>
                router.push({
                    pathname: '/chapterView',
                    params: {
                        chapterParam: JSON.stringify(course?.chapters[0].chapter_id),
                        docId: course?.id,
                        chapterIndex: 0
                    }
                })} />
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