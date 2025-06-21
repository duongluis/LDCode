import Header from '@/components/Main/Header'
import NoCourse from '@/components/Main/NoCourse'
import Colors from '@/constant/Colors'
import { View } from 'react-native'

export default function main() {
    return (
        <View style ={{
            padding:25,
            paddingTop:45,
            flex:1,
            backgroundColor:Colors.White
        }}>
           <Header/>
           <NoCourse/>
        </View>
    )
}