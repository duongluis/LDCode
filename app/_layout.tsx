import { useFonts } from "expo-font";
import { Stack } from "expo-router";
export default function RootLayout() {

  useFonts({
    'outfit':require('./../assets/fonts/Oswald-Regular.ttf'),
    'outfit-bold':require('./../assets/fonts/Oswald-Bold.ttf')

  })
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="index"/>
    </Stack>
  )
}
