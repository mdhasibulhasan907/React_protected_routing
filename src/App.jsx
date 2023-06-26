import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog'
import Navbar from './components/Navbar';


import './App.css';
import { useState } from 'react';
import Protected from './route/Protected';


const  App=()=> {
  // Authorization
  const [isLogedin,setIsLogedin]=useState(true);


  return (
    <BrowserRouter>
        <Navbar/>
        {isLogedin ? <button onClick={()=>{setIsLogedin(!isLogedin)}}>Log Out</button>
        : <button onClick={()=>{setIsLogedin(!isLogedin)}}>Log In</button>
      
      }
        
        <Routes>  
              <Route path='/' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
               {/* procted Route */}
              <Route path='/blogs' element={<Protected isLogedin={isLogedin}>
                <Blogs/>
              </Protected>}/>
              <Route path='/blogs/:title' element={<Blog/>}/>

        </Routes>
    
    </BrowserRouter>
  )
}

export default App
