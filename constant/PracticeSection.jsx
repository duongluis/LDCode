import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Colors from './Colors';
import { PracticeOption } from './Option';

export default function PracticeSection() {
    return (
        <View>
            <Text style={{
                fontSize: 24, fontWeight: 'bold'

            }}>Bài tập và câu hỏi</Text>
            <View style={{ flexDirection: 'row' }}>
                <FlatList
                    data={PracticeOption}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={ styles.courseContainer}>
                            <Image source={item.image} style={ styles.banner_image } />
                            <Text style={{ textAlign: 'center' }}>{item.name}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.name}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    courseContainer: {
        flex: 1,
        padding: 10,
        margin: 6,
        borderRadius: 10,
        width: 250,
        backgroundColor: Colors.LightGray,
    },
    banner_image: {
        width: '100%',
        height: 200,
        marginTop: 20
    }
});