// import { UserDetailContext } from '@/context/UserDetailContext';
// import React, { useContext, useState } from 'react';
import Colors from '@/constant/Colors';
import { ImageAsset } from '@/constant/Option';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CourseList({ courseList, direct, fromMain }) {
    const router = useRouter();
    return (
        <View>
        {/* <Text style={{ fontSize: 24, fontWeight: 'bold'}}>
                 Khóa học đang tham gia
             </Text> */}
            <View style={{ flexDirection: "row", marginTop: 10}}>
                <FlatList
                    numColumns={direct === "row" ? undefined : 2}
                    data={courseList}
                    horizontal={direct=="row"}
                    scrollEnabled={direct=="row"}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={[styles.listContent,styles.horizontalList]}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => 
                                router.push({
                                    pathname:'/courseView/'+item?.id,
                                    params: { 
                                        courseParam: JSON.stringify(item),
                                        fromMain:fromMain
                                     }
                            })}
                            style={styles.courseContainer}>
                            <Image source={ImageAsset[item?.banner_image]} style={styles.banner_image} />
                            <Text>{item?.title}</Text>
                            <Text>{item?.chapters.length} chương</Text>

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
        // margin: 6,
        borderRadius: 10,
        minWidth:200,
        maxWidth:200,
        backgroundColor: Colors.LightGray,
        // alignItems:'center',
    },
    banner_image: {
        width: '100%',
        height: 200,
        marginTop: 20
    },    
    listContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    horizontalList: {
        paddingHorizontal: 16, // Thêm padding khi scroll ngang
    }
});