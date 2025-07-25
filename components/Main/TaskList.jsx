
import Colors from '@/constant/Colors';
import { PracticeOption } from '@/constant/Option';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TaskList({ taskList }) {
    const router = useRouter();
    console.log("TaskList : ", taskList[0]?.exercises[0].questions?.length || 0);

    const GetLengthObject = async (item) => {
        return await item?.exercises[0].questions.length;
    }

    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                Danh sách bài tập
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 10, }}>
                <FlatList
                    numColumns={2}
                    data={taskList}
                    renderItem={({ item ,index}) => (
                        <TouchableOpacity
                            key={item}
                            onPress={() =>
                                router.push({
                                    pathname: '/taskView',
                                    params: {
                                        taskParam: JSON.stringify(item?.exercises[0]),
                                        // doc_id:item.id,
                                        // index:index,
                                    }
                                })}
                            style={styles.courseContainer}>
                            <Image source={PracticeOption[0].image} style={styles.banner_image} />
                            <Text>{item.title}</Text>
                            <Text>{GetLengthObject(item)} bài</Text>

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