import { Fragment, React,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //Camelcase
  const customCSS = {
    color:'red',
    backgroundColor:'green'
  }
  const name="Rinkal"
  const arr = [11,22,33,44,55]
  let a =  arr.filter((i)=>{
    // return i/2;
    return i%2==0;    
  })
  let b= arr.includes(220);
  console.log(a); //true false
  console.log(b);
  // let sm = arr.reduce((total,i,sum=5)=>{
  //   console.log(total);
  //   console.log("i is"+i);
  //   console.log("sum  is"+sum);
  //   sum += total+i;
  //   return total+i;
  //     // return total+i;
  // })
  let sm = arr.reduce((total,i,j=1) => {
    console.log(total);
    return total+i;
  });
  console.log(sm);
  return (
   
    <Fragment>
    {/* <React.Fragment> */}
        <h1>My First Project</h1>
        <div>
          <h3 style={{color:'red',backgroundColor:'yellow'}}>Functional COmponent</h3>
          <h3 style={customCSS}>Internal CSS</h3>
          <h3 className='myColor'>External CSS</h3>

          <h4>My Name is - {name}</h4>
          <h4>Array element is - {a}</h4>

        </div>
      {/* </React.Fragment> */}
      </Fragment>
  )
}

export default App
