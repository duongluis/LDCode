import Back from '@/components/Main/Back';
import HeaderView from '@/components/Main/HeaderView';
import Colors from '@/constant/Colors';
import { ImageAsset } from '@/constant/Option';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

export default function CourseProgress() {
  const { courseList, direct } = useLocalSearchParams();
  const coursesProgress = JSON.parse(courseList) || [];
  console.log("courseList : ", coursesProgress);

  const GetProgress = (item) => {
    console.log(item);
    const doneChapters = item?.completed_chapters?.length || 0;
    const allChapters = item?.chapters?.length || 1;
    const prec = doneChapters / allChapters;
    return prec;
  }

  return (
    <View>
      {/* <Text style={{ fontSize: 24, fontWeight: 'bold'}}>
                 Khóa học đang tham gia
             </Text> */}
      <HeaderView text={"Tiến trình khóa học"} />
      <Back />
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <FlatList
          data={coursesProgress}
          horizontal={direct === "row"}
          scrollEnabled={direct === "row"}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.courseContainer}>
              <Image source={ImageAsset[item?.banner_image]} style={styles.banner_image} />
              <View>
                <Text style={styles.context}> {item?.title}</Text>
                <Progress.Bar
                  style={{ margin: 5 }}
                  progress={GetProgress(item)}
                  width={Dimensions.get('screen').width * 0.6}
                  height={10}
                  color={Colors.Default} />
                <Text style={{
                  fontFamily: 'outfit',
                  fontSize:20
                }}> Đã hoàn thành {item?.completed_chapters.length} trên {item?.chapters.length} chương</Text>

              </View>

            </View>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  courseContainer: {
    flexDirection: 'row',
    flex: 6,
    padding: 10,
    // margin: 6,
    borderRadius: 10,
    width: Dimensions.get('screen').width,
    backgroundColor: Colors.LightGray,
    alignItems: 'center',
  },
  banner_image: {
    width: 150,
    height: 150,
    marginTop: 20
  },
  listContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  horizontalList: {
    paddingHorizontal: 16,
  },
  context: {
    flex: 5,
    marginTop: 20,
    width: Dimensions.get('screen').width * 0.65,
    fontFamily: 'outfit-bold',
    fontSize: 25
  }
});