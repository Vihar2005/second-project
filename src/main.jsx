import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Mycomponent from './Mycomponent.jsx'
import Classcomponent from './Classcomponent.jsx'
import Task1 from './Task1.jsx'
import Task1Class from './Task1Class.jsx'
import ObjectAccess from './ObjectAccess.jsx'
import Manu from './Manu.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Usememo from './Usememo.jsx'
import LifecycleClasss from './LifecycleClasss.jsx'
import Lifecyclefunction from './Lifecyclefunction.jsx'
import Viewlist from './ViewList.jsx'
import UsecontextEx from './UsecontextEx.jsx'
import UseContext from './Usecontext.jsx'
import Useref from './Useref.jsx'
import LocalstoregeCrud from './LocalstoregeCrud.jsx'
import Aboutdata from './Aboutdata.jsx'
import Aboutinfo from './Aboutinfo.jsx'
import JsonserverCrud from './JsonserverCrud.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Mycomponent newname="viharbarvaliya"/> */}
    {/* <Classcomponent color="red"/> */}
    {/* <Task1 /> */}
    {/* <Task1Class /> */}
    {/* <ObjectAccess /> */}
    {/* <Viewlist /> */}
    <JsonserverCrud />
    {/* <BrowserRouter>
    <Manu />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>

    </BrowserRouter> */}
    {/* <HashRouter>
    <Manu />
      <Routes>
        {/* <Route path='/' element={<Home />}></Route> */}
        {/* <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}>
          <Route path='aboutdata' element={<Aboutdata />}/>
          <Route path='aboutinfo' element={<Aboutinfo />}/>
        </Route>
        <Route path='/contact' element={<Contact />}></Route> */}
        {/* <Route path='/lifecycle' element={<LifecycleClasss  color='blue'/>}></Route>
        <Route path='/lifecyclefunc' element={<Lifecyclefunction  color='green'/>}></Route> 
        <Route path='/usememo' element={<Usememo />}></Route>
        <Route path='/usecontext' element={<UseContext />}></Route>
        <Route path='/usecontextEx' element={<UsecontextEx />}></Route>
        <Route path='/useref' element={<Useref />}></Route>
        <Route path='/localstorege' element={<LocalstoregeCrud />}></Route>
      </Routes>

    </HashRouter> */}
  </React.StrictMode>,
)
