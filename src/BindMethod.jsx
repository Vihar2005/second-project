import React from 'react'

const BindMethod = () => {

    const person1 = {
        fname: "vihar",
        lname: "barvaliya",

        fullName: function () {
            return this.fname + " " + this.lname
        }
    }
    const person2 = {
        fname: "vishal",
        lname: "asdf",

        // fullName : function (){
        //     return this.fname + " " + this.lname
        // }
    }

    // console.log(person1.fullName.bind(person2));
    // console.log(person2.fullName.call(person1));

    const printname = person1.fullName.bind(person2) // return a value as a function

    console.log(printname());  // binded function colled
    const result = printname() // function to variabal convert
    

    return (
        <div>
             <h2>{printname()}</h2>     {/*  colled a function */}
             <h2>{result}</h2>          {/*  colled a variabal */}           
        </div>
    )
}

export default BindMethod
