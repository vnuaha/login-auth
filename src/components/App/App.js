
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';
import useToken from './useToken';

//have the userToken argument to
// sessionStorage using the setItem method.
// you’ll need to convert the userToken from an object to a string using the JSON.stringify function.
//  Call setItem with a key of token and the converted object.


function App() {
  // conditional statement to display Login if the token is falsy.
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken}/>
  }
 
 return (
   <div className= "container">
     <h1>Application</h1>
     <BrowserRouter>
     <Routes>
       <Route path ="/dashboard"  element={<Dashboard/>}>
       </Route>
       <Route path ="/preferences" element={<Preferences/>}>
       </Route>
     </Routes>
     </BrowserRouter>

   </div>
 );
  }
export default App;
