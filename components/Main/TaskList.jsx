
import Colors from '@/constant/Colors';
import { PracticeOption } from '@/constant/Option';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TaskList({ taskList }) {
    const router = useRouter();
console.log("TaskList : ",taskList[0]?.exercises.length|| 0);

const GetLengthObject =async ()=> {
    return await taskList[0]?.exercises.length;
}

    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold'}}>
                Danh sách bài tập
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <FlatList
                    data={taskList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            key={item}
                            onPress={() => 
                                router.push({
                                    pathname:'/taskView',
                                    params: { 
                                    taskParam: JSON.stringify(item),
                                    // doc_id:item.id,
                                    // index:index,
                                    }
                            })}
                            style={styles.courseContainer}>
                            <Image source={PracticeOption[1].image} style={styles.banner_image} />
                            <Text>{item.title}</Text>
                            <Text>{GetLengthObject()} bài</Text>

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
        width: 200,
        backgroundColor: Colors.LightGray,
    },
    banner_image: {
        width: '100%',
        height: 200,
        marginTop: 20
    }
});