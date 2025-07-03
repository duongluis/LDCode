import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, View } from 'react-native';

export default function Back() {
    const router=useRouter();
  return (
    <View>
    <Pressable onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={32} color="green" />
      </Pressable>
    </View>
  )
}