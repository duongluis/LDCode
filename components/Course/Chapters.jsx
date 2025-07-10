import Colors from '@/constant/Colors';
import { UserDetailContext } from '@/context/UserDetailContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Chapters(course) {
  const router = useRouter();
  const {userDetail,setUserDetail} = useContext(UserDetailContext);
  // console.log(" chapters : ", course?.course?.chapters);

  const isChapterCompleted = (index) => {
    const isCompleted = course?.course?.completed_chapters?.includes(index.toString());
    // console.log("checking : ", course?.course.chapters);
    return isCompleted ? true : false;
  }
  return (
    <View >
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>
        Danh sách chương:
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <FlatList
          data={course?.course.chapters}
          scrollEnabled={false}
          keyExtractor={(item) => item.chapter_id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={item}
              onPress={() =>
                router.push({
                  pathname: '/chapterView',
                  params: {
                    chapterParam: JSON.stringify(item),
                    docId: item.doc_id,
                    chapterIndex: index,
                  }
                })}
              style={styles.courseContainer}>
              <Text style={styles.textButton}> {index + 1}. {item?.chapter_title}</Text>

              {!isChapterCompleted(index) ?
                <Ionicons name="arrow-forward" size={32} color={Colors.White} /> :
                <AntDesign name="checkcircle" size={24} color={Colors.Green} />
              }
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  courseContainer: {
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'left',
    borderRadius: 10,
    width: "100%",
    justifyContent: 'space-between',
    backgroundColor: Colors.Default,
  },
  banner_image: {
    width: '100%',
    height: 200,
    marginTop: 20
  },
  textButton: {
    fontSize: 25,
    color: Colors.White
  }
});

