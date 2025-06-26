// import { UserDetailContext } from '@/context/UserDetailContext';
// import React, { useContext, useState } from 'react';
import Colors from '@/constant/Colors';
import { ImageAsset } from '@/constant/Option';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CourseList({ courseList }) {
    const router = useRouter();

    return (
        <View >
            <Text style={{ fontSize: 24, fontWeight: 'bold'}}>
                Courses list
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <FlatList
                    data={courseList}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => 
                                router.push({
                                    pathname:'/courseView',
                                    params: { courseParam: JSON.stringify(item) }
                            })}
                            style={styles.courseContainer}>
                            <Image source={ImageAsset[item?.banner_image]} style={styles.banner_image} />
                            <Text>{item?.title}</Text>
                            <Text>{item?.chapters.length} chapters</Text>

                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    courseContainer: {
        flex: 1,
        padding: 10,
        margin: 6,
        borderRadius: 10,
        width: 200,
        backgroundColor: Colors.LightGray,
    },
    banner_image: {
        width: '100%',
        height: 200,
        marginTop: 20
    }
});