import TaskList from "@/components/Main/TaskList";
import { db } from "@/config/firebaseConfig";
import { UserDetailContext } from "@/context/UserDetailContext";
import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";


export default function task() {
  const [taskList, setTaskList] = useState([]);
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetTaskList();
    console.log("use effect working : ", taskList);
  }, [GetTaskList]);


  const GetTaskList = async () => {

    try {
      const tasks = [];
      // if (userDetail?.member) {
      //   const querySnapshot = await getDoc(query(db, 'courses'),where("createBy","==",userDetail?.email));
      //   console.log(querySnapshot);
      //   const exercises = querySnapshot.data();
      //     exercises.forEach((exercise) => {
      //       tasks.push({
      //         id: exercise.id,
      //         title: exercise.title,
      //         ...exercise
      //       });
      //     });
      //     console.log("bai tap : ", tasks);
      // } else {
        const q = await getDoc(doc(db, 'users', userDetail?.email));
        const querySnapshot = q.data().courses;
        querySnapshot.forEach(doc => {
          console.log("doc.id : ", doc.id, " ", doc?.title, " ", doc.exercises)
          tasks.push({
            id: doc.id,
            title: doc?.title,
            exercises: doc?.exercises,
          });
        });
      // }
      setTaskList(tasks);
    }
    catch (error) {

    } finally {
      setLoading(false)
    }
  }

  return (
    <View>
      <TaskList taskList={taskList} />
    </View>
  )
}