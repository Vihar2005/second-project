import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
// import { json } from 'react-router-dom'

const JsonserverCrud = () => {
    const [userdata,setUserData] = useState([])
    const [allusers,setAllUser] = useState([])
    const [search,setSearch] = useState("")
    const [id,setId] = useState("")
    const[data,setData] = useState({
        name:"",
        age:"",
        salary:""
    })
    useEffect(()=>{
      axios.get('http://localhost:3000/users')
      .then((res) => {
        setUserData(res.data)
        setAllUser(res.data)  
      })
      .catch((err)=>console.log(err))
      
    },[data])
    // console.log(setData);
    const handleChange= (e) =>{
        const {name,value}= e.target
        setData({
            ...data,
            [name]:value
        })
    }
    // console.log(setData);
    const saveData = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/users',data)
        .then((res) => console.log(res))
        .catch((err)=>console.log(err))
    }
    const deleteData = (id) =>{
      axios.delete('http://localhost:3000/users/' +id)
      .then((res) => console.log(res))
      .catch((err)=>console.log(err))
    }
    const editData = (id) =>{
      setId(id)
      axios.patch('http://localhost:3000/users/' +id)
      .then((res)=>setData({
        name:res.data.name,
        age:res.data.age
      }))
      .catch((err)=>console.log(err))
    }
    const updateData= (e)=>{
      e.preventDefault();
      axios.put('http://localhost:3000/users/' +id,data)
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
    }
    const searchName=(e)=>{
      setSearch(e.target.value)
      console.log(search);
      if (search != '') {
        let data1 = allusers.filter((i)=>{
          if (i.name.includes(search)) {
            return i;
          }
        })
        setUserData(data1)
      }
      else{
        setUserData(allusers)
      }
    }
  return (
    <div>
      <h3>JSON server CRUD Ex</h3>
      <form  onSubmit={saveData}>
        Name: <input type="text" name="name" value={data.name} onChange={handleChange}/>
        Age: <input type="number" name="age" value={data.age} onChange={handleChange}/>
        Salary: <input type="number" name="salary" value={data.salary} onChange={handleChange}/>
        <input type="submit"  value="save Data" />
        {/* <button onClick={()=> deleteData(i.id)}>Delete</button> */}
      </form>
      <br />
      <input type="search" name='search' placeholder='Search by name' onKeyUp={searchName} />
      <br />
      <table border={"2"}>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Age</td>
          <td>Salary</td>
          <td>Action</td>
        </tr>
        {
          userdata && userdata.map((i) =>{
            return(
              <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                  <button onClick={()=> deleteData(i.id)}>Delete</button>
                  <button onClick={()=> editData(i.id)}>Edit</button>
                </td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default JsonserverCrud
