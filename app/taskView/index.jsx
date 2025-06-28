import HeaderView from '@/components/Main/HeaderView';
import Colors from '@/constant/Colors';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Progress from 'react-native-progress';

export default function taskView() {
  const router = useRouter();
  const { taskParam, doc_id, index } = useLocalSearchParams();
  const { progress, setProgress } = useState(0);
  const [currentTask, setCurrentTask] = useState(0);
  const task = JSON.parse(taskParam);
  const exercises = task.exercises[0];
  console.log("task : ",exercises);

  // console.log("bai tap : ", task);
  const GetProgress = (currentTask) => {
    const prec = currentTask / exercises.exercises?.length;
    return prec;
  }

  const fixFormConsole = (consoleText) => {
    const formatedText = consoleText.split('; ').join(';\n').split(' { ').join('\n{\n');
    return formatedText;
  }

  // console.log("the loai : ", (getDoc(doc(db, 'courses', chapter?.doc_id.toString()))).data().completed_chapters)
  const FinishLesson = () => {
    console.log("lesson finished");
     Alert.alert("You finished the task. Well done!")
    router.back();
  }

  const Checking = (access) => {
    if (access=="true") {
      {
        currentTask < exercises?.exercises.length - 1 ?
          setCurrentTask(currentTask + 1) :
          FinishLesson()
      }
    } else if(access=="false") {
    Alert.alert("Có vẻ như bạn cần học thêm , hãy quay lại bài học và đọc kĩ hơn");
      router.back();
    }
  }


    return (
      <View>
        <HeaderView text={"Chi tiết bài tập "} />

        <Progress.Bar progress={GetProgress(currentTask)}
          width={Dimensions.get('screen').width * 0.95}
          height={10}
          color={Colors.Default} />

        <Text style={styles.title}>{exercises?.exercises[currentTask].id}</Text>

        <Text style={styles.text}>{exercises?.exercises[currentTask].quest}</Text>
        <FlatList
          data={exercises?.exercises[currentTask].answer}
          keyExtractor={item => item.id}
          renderItem={({ item: answer }) => (
            <TouchableOpacity
              key={answer}
              style={styles.Button}
              onPress={() => {
                {
                  console.log("id : ", answer?.correct);
                  Checking(answer?.correct);
                }
              }}>
              <Text style={styles.text}>{answer?.answer_text}</Text>
            </TouchableOpacity>
          )
          }
        />
      </View >
    );
  };

  const styles = StyleSheet.create({
    Button: {
      flex: 1,
      marginTop: 15,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'left',
      borderRadius: 10,
      width: "100%",
      justifyContent: 'space-between',
      backgroundColor: Colors.Default,
    },
    container: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      paddingHorizontal: 15
    },
    text: {
      marginTop: 15,
      fontSize: 20,
      fontFamily: 'arial',
      marginRight: 5
    },
    title: {
      fontSize: 20,
      fontFamily: 'outfit-bold',
      color: Colors.Black,
      marginTop: 20,
      justifyContent: 'center'
    },
    consoleText: {
      minHeight: 100,
      margin: 'auto',
      width: '100%',
      backgroundColor: Colors.Black,
      color: Colors.LightGray,
      marginTop: 5,
      fontSize: 20,
      fontFamily: 'arial',
      justifyContent: 'flex-start',
    }
  })