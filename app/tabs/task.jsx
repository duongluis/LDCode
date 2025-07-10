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
    console.log("use effect working : ",taskList);
  }, [GetTaskList]);


  const GetTaskList = async () => {
    // console.log("user da hoan thanh courselist :", userDetail?.name);
    try {
      const tasks = [];
      const q =await getDoc(doc(db, 'users', userDetail?.email));
      const querySnapshot = q.data().courses;
      // setTaskList(querySnapshot);
      console.log("Query : ", querySnapshot);
      querySnapshot.forEach(doc => {
        console.log("doc.id : ",doc.id," ",doc?.title," ",doc.exercises)
        tasks.push({
          id: doc.id,
          title: doc?.title,
          exercises: doc?.exercises,
        });
      });
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