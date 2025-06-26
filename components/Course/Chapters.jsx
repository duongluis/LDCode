import Colors from '@/constant/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Chapters(course) {
  const router = useRouter();
  console.log(" chapters : " , course.course.id);
  return (
    <View >
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>
        Chapters : 
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <FlatList
          data={course?.course.chapters}

          keyExtractor={(item) => item.chapter_id}
          renderItem={({ item , index }) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                router.push({
                  pathname: '/chapterView',
                  params: { chapterParam: JSON.stringify(item),
                    docId:course.courses.id,
                    chapterIndex:index,
                   }
                })}
              style={styles.courseContainer}>
              <Text>{item?.chapter_title}
              <Ionicons name="arrow-forward" size={32} color="green" style={{marginRight:0}} />
              </Text>

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
        width: "100%",
        backgroundColor: Colors.Default,
    },
    banner_image: {
        width: '100%',
        height: 200,
        marginTop: 20
    }
});

