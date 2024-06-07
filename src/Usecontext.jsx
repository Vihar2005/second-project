import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
const nameContext = createContext()
const UseContext = () =>{
    const [name,setname] = useState("testing")
    return(
        <div>
            <nameContext.Provider value={name}>
                <h3>My Components1</h3>
                <h4>My name is : {name}</h4>
                <Cmp2/>
            </nameContext.Provider>
        </div>
    )
}
const Cmp2 = ()=>{
    return(
        <>
        <h3>My components2</h3>
        <Cmp3/>
        </>
    )
}
const Cmp3 = ()=>{
    return(
        <>
        <h4>My components3</h4>
        <Cmp4/>
        </>
    )
}
const Cmp4 = ()=>{
    const getName = useContext(nameContext)
    return(
        <>
        <h3>my components4</h3>
        <h4>Finally Name is needed here -- {getName}</h4>
        </>
    )
}

export default UseContext