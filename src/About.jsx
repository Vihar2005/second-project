import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  const prevMenu = () => {
    navigate(-1);
  };
  const nextMenu = () => {
    navigate(+1)
  }
  const goback = ()=>{
    window.history.back()
  }
  return (
    <div>
      my about page
      <button onClick={prevMenu}>back</button>
      <button onClick={nextMenu}>next</button>
      <button onClick={goback}>go back</button>
      <Outlet />
    </div>
  )
}

export default About



// usehistory use kari ne prev and next // .back() // .go(-1)