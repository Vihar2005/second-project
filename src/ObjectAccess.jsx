import React, { useState } from 'react'

const ObjectAccess = () => {
    const [userdata,setUserdata] = useState({
        name:"",
        email:"",
        password:""
    })
    const handleChange= (e)=>{
        //destructuring
        const {name,value}  = e.target
        setUserdata({
            ...userdata, //spreading 
            [name]:value
        })
        // let n = e.target.name
        // let val = e.target.value
    }
    const displayData = ()=>{
        let arr = [1,2,3];
        let arr2 = [4,5,6,7,8];
        let merge_arr = [...arr2,...arr] //Merging
        console.log(merge_arr);
        console.log(userdata.email);
    }
  return (
    <div>
      <h2>Form</h2>
      Name : <input type="text" name="name" id="" onChange={handleChange}/><br />
      Email : <input type="text" name="email" id="" onChange={handleChange} /><br />
      Password : <input type="password" name="password" id="" onChange={handleChange}/><br />

      <input type="submit" value="Save Data" onClick={displayData}/>
      <br />
      Name is : {userdata.name} <br />
      Email is : {userdata.email} <br />
      Password is : {userdata.password}<br />
    </div>
  )
}

export default ObjectAccess
