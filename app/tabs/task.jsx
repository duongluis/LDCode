import TaskList from "@/components/Main/TaskList";
import { db } from "@/config/firebaseConfig";
import { UserDetailContext } from "@/context/UserDetailContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";


export default function task() {
  const [taskList, setTaskList] = useState([]);
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
  console.log("use effect working");
    GetTaskList();
  }, [GetTaskList]);


  const GetTaskList = async () => {
    // console.log("user da hoan thanh courselist :", userDetail?.name);
    try{
    const tasks = [];
    const q = query(collection(db, 'courses'), where("createdBy", "==", userDetail?.email));
    const querySnapshot = await getDocs(q);
    // setTaskList(querySnapshot);
    querySnapshot.forEach(doc => {
      tasks.push({
        id: doc.id,
        title:doc.data().title,
        exercises:doc.data().exercises,
      });
    });
    setTaskList(tasks);
  }
catch(error){

} finally{
  setLoading(false)
}
}

  return (
    <View>
      <TaskList taskList={taskList} />
    </View>
  )
}