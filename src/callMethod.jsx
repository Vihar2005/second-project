import React from 'react'

const CallMethod = () => {
    const person1 = {
        fname : "vihar",
        lname : "barvaliya",

        fullName : function (){
            return this.fname + " " + this.lname
        }
    }
    const person2 = {
        fname : "vishal",
        lname : "asdf",

        // fullName : function (){
        //     return this.fname + " " + this.lname
        // }
    }

    console.log(person1.fullName.call(person2));
    // console.log(person2.fullName.call(person1));
    
    const printname = person1.fullName.call(person2)


  return (
    <div>
        <h2>call method</h2>
        <p>full name == {printname}</p>
    </div>
  )
}

export default CallMethod
