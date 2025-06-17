
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" ;
import Signup from './Components/Signup' ; 
import Login from './Components/Login';
import Chatbox from './Components/chatbox';
import Signin from './Components/Signin';


function App() {
  return (
    <div className="root">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/chatbox' element={<Chatbox/>}></Route>
        </Routes>
      </Router>

       {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
    </div>
  )
}
export default App
