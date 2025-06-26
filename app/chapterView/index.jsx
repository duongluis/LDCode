import HeaderView from '@/components/Main/HeaderView';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

export default function ChapterDetail() {
  const {chapterParam,docId,chapterIndex} = useLocalSearchParams();
  const [progress,setProgress] = useState(0);
  const chapters = JSON.parse(chapterParam);


  return (
    <View>
      <Progress percent = {progress} height={}/>
      <HeaderView text={"Chapter  View"}/>
      <Text>Here is chapter detail</Text>
    </View>
  )
}