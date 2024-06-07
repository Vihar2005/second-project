import React, { useState } from "react";
// import UseContextDemo from "./Usecontext";
 

const UsecontextEx = ()=>{
    const [name,setname] = useState("testing")
    return(
        <div>
            <h3>My Components1</h3>
            <h4>My name is : {name}</h4>
            <Cmp2 name={name}/>
        </div>
    )
}
const Cmp2 = ({name})=>{
    return(
        <>
        <h3>my Components2</h3>
        <Cmp3 name={name}/>
        </>
    )
}
const Cmp3 = ({name})=>{
    return(
        <>
        <h3>my components3</h3>
        <Cmp4 name={name}/>
        </>
    )
}
const Cmp4 = ({name})=>{
    return(
        <>
        <h3>Mycomponents4</h3>
        <h4>Finally Name is needed here -- {name}</h4>
        </>
    )
}

export default UsecontextEx