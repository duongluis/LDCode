import HeaderView from '@/components/Main/HeaderView';
import Button from '@/components/Shared/Button';
import { db } from '@/config/firebaseConfig';
import Colors from '@/constant/Colors';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

export default function ChapterDetail() {
  const router = useRouter();
  const { chapterParam, chapterIndex } = useLocalSearchParams();
  const { progress, setProgress } = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const chapter = JSON.parse(chapterParam);

  const GetProgress = (currentPage) => {
    const prec = currentPage / chapter.lessons.length;
    return prec;
  }

  const fixFormConsole = (consoleText) => {
    const formatedText = consoleText.split('; ').join(';\n').split(' { ').join('\n{\n');
    return formatedText;
  }

  // console.log("the loai : ", (getDoc(doc(db, 'courses', chapter?.doc_id.toString()))).data().completed_chapters)
  const FinishLesson = async () => {
    console.log("lesson finished");
    await updateDoc(doc(db, 'courses', chapter?.doc_id.toString()),
      {
        completed_chapters: (arrayUnion(chapterIndex))
      })

    router.back();
  }

  return (
    <View>
      <ScrollView>
      <HeaderView text={"Chapter  View"} />

      <Progress.Bar progress={GetProgress(currentPage)}
        width={Dimensions.get('screen').width * 0.95}
        height={10}
        color={Colors.Default} />

      {/* <Text>Here is chapter detail</Text> */}


      <View style={{
        marginTop: 30,
        width: '100%',

      }}>
        <Text style={{
          fontSize: 30,
          fontFamily: 'outfit-bold',
          color: Colors.Black,
          textAlign: 'center'

        }}>{chapter?.lessons[currentPage].lesson_title}
        </Text>

        <Text style={styles.text}> {chapter?.lessons[currentPage].lesson_text}</Text>

        <Text style={styles.title}>
          Console
        </Text>

        <Text style={styles.consoleText}>
          {fixFormConsole(chapter?.lessons[currentPage].example.console)}
        </Text>

        <Text style={styles.title


        }>Output</Text>

        <Text style={styles.consoleText}>
          {chapter?.lessons[currentPage].example.output}
        </Text>
        {currentPage < chapter.lessons.length - 1 ?
          <Button text={'Tiếp'} onPress={() => { { setCurrentPage(currentPage + 1) } }} /> :
          <Button text={'Hoàn thành'} onPress={() => { FinishLesson() }} />
        }

      </View>
</ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
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