import React,{useMemo, useState} from "react";
import TaskComponents from "./TaskComponents";


const Usememo = ()=>{
    const[task,setTask] = useState("")
    const[id,setid] = useState("")
    const[count,setCount] = useState(0)
    const[data,setData] = useState([])
    const addTask = () =>{
        setData([...data,task])
        setTask('')
        // setData('')
    }
    const addCounter = ()=>{
        setCount(count+1)
    }
    const calcFunction = ({count})=>{
        for(let i=0;i<10000;i++){
            count+=i;
        }
        return count;
    }
    const calc = useMemo(()=> calcFunction({count}),[count])
    // const calc = useMemo(()=>{
    //    return calcFunction({count}) 
    // },[count]) 
    
    const deleteTask =(id)=>{
        let data1 = data.filter((i,index) => {
            return index!=id
        })
        setData(data1)
        console.log(data1);
    }

    const editTask = (id)=>{
    let data2 = data.filter((i,index)=>{
        return index==id
    })
    setTask(data2[0])
    setid(id)
    console.log(data2);
    // setData(data1)
    }

    const updateTask =()=>{
        let data3 = data.map((i,index)=>{
            if(index == id){
                i=task
            }
            return i;
        })
        setData(data3)
        setid("")
        setTask('')
    }


    return(
        <div>
            <h3>Task List</h3>
            
            <input type="text" onChange={(e) => setTask(e.target.value) }/>
            <TaskComponents data={data} id={id} addTask={addTask} deleteTask={deleteTask} editTask={editTask} updateTask={updateTask} />

            <h4>count is : {count}</h4>
            <button onClick={addCounter}>Add</button>

            <h4>calc is : {calc}</h4>
        </div>
    )
}
export default Usememo