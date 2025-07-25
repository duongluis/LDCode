import HeaderView from '@/components/Main/HeaderView';
import Colors from '@/constant/Colors';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Progress from 'react-native-progress';

export default function taskView() {
  const router = useRouter();
  const { taskParam } = useLocalSearchParams();
  const { progress, setProgress } = useState(0);
  const [currentTask, setCurrentTask] = useState(0);
  const [point, setPoint] = useState(0);
   const [isFinishing, setIsFinishing] = useState(false);
  const task = JSON.parse(taskParam) || [];

  // console.log(task, " ", typeof task)
  // console.log("bai tap : ", currentTask);

  const GetProgress = (currentTask) => {
    const prec = currentTask / task.questions.length;
    return prec;
  }

   useEffect(() => {
    if (isFinishing) {
      Alert.alert(
        "Hoàn thành", 
        `Bạn làm đúng ${point} trên ${task.questions?.length} câu.`
      );
      router.back();
    }
  }, [isFinishing, point]);


  const fixFormConsole = (consoleText) => {
    const formatedText = consoleText.split('; ').join(';\n').split(' { ').join('\n{\n');
    return formatedText;
  }

  // console.log("the loai : ", (getDoc(doc(db, 'courses', chapter?.doc_id.toString()))).data().completed_chapters)
  const FinishLesson = () => {
    console.log("lesson finished");
    Alert.alert(`Bạn làm đúng ${point} trên ${task.questions.length} câu.`)
    // Alert.alert("Chúc mừng bạn đã hoàn thành bài tập của khóa học!")
    router.back();
  }

  const Checking = (access) => {
    if (access == "true") {
      setPoint(point+1);
    }

    if (currentTask < task?.questions?.length - 1) {
      setCurrentTask(currentTask + 1);
    } else {
      setPoint(point+1);
      setIsFinishing(true);
    }
  }


  return (
    <View>
      <HeaderView text={"Chi tiết bài tập "} />

      <Progress.Bar progress={GetProgress(currentTask)}
        width={Dimensions.get('screen').width * 0.95}
        height={10}
        color={Colors.Default} />

      {/* <Text style={styles.title}>{task[currentTask]?.id}</Text> */}

      <Text style={styles.title}> Câu hỏi {currentTask + 1} </Text>
      <Text style={styles.title}>{task?.questions[currentTask].quest}</Text>
      <FlatList
        data={task.questions[currentTask].answers}
        renderItem={({ item: answer }) => (
          <TouchableOpacity
            // key={answer}
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
    marginRight: 5,
    color: Colors.White,
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