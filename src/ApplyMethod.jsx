import React from 'react'

const ApplyMethod = () => {

    const person1 = {
        fname: "vihar",
        lname: "barvaliya",

        fullName: function () {
            return this.fname + " " + this.lname
        }
    }
    const person2 = {
        fname: "vishal",
        lname: "dabhi",

        // fullName : function (){
        //     return this.fname + " " + this.lname
        // }
    }

    console.log(person1.fullName.apply(person2));
    // console.log(person2.fullName.apply(person1));

    const printname = person1.fullName.apply(person2)

    return ( 
        <div>
            <h2>Apply Method</h2>
            <p>Fullname == {printname}</p>
        </div>
    )
}

export default ApplyMethod
