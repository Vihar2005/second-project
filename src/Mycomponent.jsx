import React, { useState } from 'react'

const Mycomponent = (props) => {
    // let name = "shfg"
    //state- class component  & props- function component
    //within component          -- parent to child
    // let email = "abc@mail.com"
    //hooks - useState
    const [email,setEmail] = useState("abc@mail.com")
    let obj = [{
        name:"Abc",
        age:23,
        salary:30000
    }]
  return (
    <div>
      <h3>My First Component</h3>
      <h3>My Name is - {obj[0].name}</h3>
      <h3>My New Name - get from props is - {props.newname}</h3>
      <h3>My AGe is - {obj[0]['age']}</h3>
      <h3>My Salary is - {obj[0].salary}</h3>
      <ul>
      {
        obj.map((i)=>{
            return (
                <>
                <li>{i.name}</li>
                <li>{i.age}</li>
                <li>{i.salary}</li>
                </>
        )
        })
      }
      </ul>
      <input type='text' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <h3>Email is - {email}</h3>
    </div>
  )
}

export default Mycomponent

