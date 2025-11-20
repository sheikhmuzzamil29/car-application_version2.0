import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Layout from './Frontpages/layout';
import Home from './Frontpages/home';
import Login from './Frontpages/login';
import About from './Frontpages/about';
import Register from './Frontpages/register';
import Dashboard from './admin/dashboard';
import AdminHome from './admin/home';
import Newcar from './admin/newcar';
import Insertcar from './admin/carinsert';
import Usedcar from './admin/Used_car';
import Insertusedcar from './admin/insertusedcar';
import Autostore from './admin/autostore';
import Addpart from './admin/addautopart';
import Editautopart from './admin/editautopart';
import Bikes from './admin/bikes';
import Newbike from './admin/newbike';
import Adpost from './admin/adpost'
import Logout from './admin/verifylogout'
import 'bootstrap/dist/css/bootstrap.min.css';
//users router----
import Userhome from './user/userhome';
import Userdashboard from './user/userdashboard';
import Userscar from './user/usercars';
import Oldcars from './user/oldcars';
import PurchaseOrder from './user/purchaseorder';
import Success from './user/success';
import UserAutopart from './user/userautopart';
import Userbike from './user/userbike';
export default function App(){

  if(sessionStorage)
  {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/adminregister' element={<Register/>}/>
      <Route path='/about' element={<About/>}/>
      </Route>
      <Route path='/admin/dashboard' element={<Dashboard/>}>
      <Route path='/admin/dashboard/home' element={<AdminHome/>}/>
      <Route path='/admin/dashboard/newcars' element={<Newcar/>}/>
      <Route path='/admin/dashboard/newcars/insert' element={<Insertcar/>}/>
      <Route path='/admin/dashboard/used_car/' element={<Usedcar />}/>
      <Route path='/admin/dashboard/bikes/' element={<Bikes />}/>
      <Route path='/admin/dashboard/used_car/insert' element={<Insertusedcar />}/>
      <Route path='/admin/dashboard/autostore' element={<Autostore/>}/>
      <Route path='/admin/dashboard/autostore/addpart' element={<Addpart/>}/>
      <Route path='/admin/dashboard/autostore/editautopart' element={<Editautopart/>}/>
      <Route path='/admin/dashboard/bikes/newbike' element={<Newbike/>}/>
      <Route path='/admin/dashboard/ad' element={<Adpost/>}/>
      <Route path='/admin/dashboard/logout' element={<Logout/>}/>
      </Route>
      <Route path='/users/dashboard' element={<Userdashboard/>}>
      <Route path='/users/dashboard/home' element={<Userhome/>}/>
      <Route path='/users/dashboard/carusers' element={<Userscar/>}/>
      <Route path='/users/dashboard/oldcars' element={<Oldcars/>}/>
      <Route path='/users/dashboard/oldcars/purchase' element={<PurchaseOrder/>}/>
      <Route path='/users/dashboard/success' element={<Success/>}/>
      <Route path='/users/dashboard/userautopart' element={<UserAutopart/>}/>
      <Route path='/users/dashboard/userbike' element={<Userbike/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
  }
  else{
    return(<h1>you are not allowed</h1>)
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
