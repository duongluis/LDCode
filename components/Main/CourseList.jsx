// import { UserDetailContext } from '@/context/UserDetailContext';
// import React, { useContext, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function CourseList({ courseList }) {


    return (
        <View>
            <Text>
                here is the course list
            </Text>

            <FlatList
                data={courseList}
                keyExtractor={(item) => item.id}
                renderItem={({ item}) => (
                    <View key={item}>
                        <Text>{item?.title}</Text>
                    </View>
                )}/>
        </View>
    )
}