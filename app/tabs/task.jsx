import TaskList from "@/components/Main/TaskList";
import { db } from "@/config/firebaseConfig";
import { UserDetailContext } from "@/context/UserDetailContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";


export default function task() {
  const [taskList, setTaskList] = useState([]);
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  useEffect(() => {
    console.log("use Effect working");
    userDetail && GetTaskList()
  }, [userDetail]);


  const GetTaskList = async () => {
    // console.log("user da hoan thanh courselist :", userDetail?.name);
    const tasks = [];
    const q = query(collection(db, 'tasks'), where("createdBy", "==", userDetail?.email));
    const querySnapshot = await getDocs(q);
    // setTaskList(querySnapshot);
    querySnapshot.forEach(doc => {
      tasks.push({
        id: doc.id,
        ...doc.data(),
      });


    });
      setTaskList(tasks);
  }

  return (
    <View>
      <TaskList taskList={taskList} />
    </View>
  )
}