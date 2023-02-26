import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header';
import SidebarMenu from './components/sidebar/Sidebar';
import Test2 from './components/Test2';
import Footer from './global/footer/Footer';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Admin from './pages/admin/Admin';
import AdminLogin from './pages/admin/admin-login/AdminLogin';
import AdminRegister from './pages/admin/admin-register/AdminRegister';
import Profile from './pages/admin/Profile';
import ChangePassword from './pages/change-password/ChangePassword';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Protected from './pages/Protected';
import Register from './pages/register/Register';
import RegisteredAdmin from './pages/registeredUsers/registeredAdmin/RegisteredAdmin';
import RegisteredSchool from './pages/registeredUsers/registeredSchool/RegisteredSchool';
import RegisteredStudent from './pages/registeredUsers/registeredStudent/RegisteredStudent';
import RegisteredTeacher from './pages/registeredUsers/registeredTeacher/RegisteredTeacher';
import ResetPassword from './pages/reset-password/ResetPassword';
import SchoolLogin from './pages/school/school-login/SchoolLogin';
import SchoolRegister from './pages/school/school-register/SchoolRegister';

import SendPasswordResetEmail from './pages/send-password-reset-email/SendPasswordResetEMail';
import StudentRegister from './pages/student/student-register/StudentRegister';
import TeacherLogin from './pages/teacher/teacher-register/TeacherLogin';
import TeacherRegister from './pages/teacher/teacher-register/TeacherRegister';
import BasicSelect from './pages/Test';
import Test from './pages/Test';
import View from './pages/View';
import { getToken } from './services/LocalStorageServices';

function App() {
const token = getToken("token");
  return (
    <BrowserRouter>
      <Header/>
 
    <div className="App">
      {token ? 
       <SidebarMenu/> 
      : " "  } 
      <ToastContainer position="top-center" />
      <main className='content'>
      <Routes>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" element={<Protected Component={Home}/>} />
        <Route exact path="/add" element={<AddEdit/>} />
        <Route exact path="/update/:id" element={<AddEdit/>} />
        <Route exact path="/view/:id" element={<View/>} />
        <Route exact path="/about" element={<About/>} />
        {/* ============GET REGISTERED USERS ROUTES==================  */}
        <Route exact path="/registered-admin" element={<RegisteredAdmin/>} />
        <Route exact path="/registered-school" element={<RegisteredSchool/>} />
        <Route exact path="/registered-teacher" element={<RegisteredTeacher/>} />
        <Route exact path="/registered-student" element={<RegisteredStudent/>} />

        {/* ============GET REGISTERED USERS ROUTES END==================  */}

        {/* <Route exact path="/admin/dashboard" element={<Dashboard/>} /> */}
        {/* ============REGISTER ROUTES==================  */}
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/register-admin" element={<AdminRegister/>} />
        <Route exact path="/register-school" element={<SchoolRegister/>} />
        <Route exact path="/register-teacher" element={<TeacherRegister/>} />
        <Route exact path="/register-student" element={<StudentRegister/>} />
        {/* ============REGISTER ROUTES END==================  */}
        {/* ============LOGIN ROUTES ==================  */}
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/admin-login" element={<AdminLogin/>} />
        <Route exact path="/school-login" element={<SchoolLogin/>} />
        <Route exact path="/teacher-login" element={<TeacherLogin/>} />

        {/* ============LOGIN ROUTES END==================  */}
        <Route exact path="/send-password-reset-email" element={<SendPasswordResetEmail/>} />
        <Route exact path="/reset/:id/:token" element={<ResetPassword/>} />
        <Route exact path="/changepassword" element={token ? <ChangePassword/> : <Login/>} />
       
        <Route exact path="/test" element={<Test/>} />
        <Route exact path="/test2" element={<Test2/>} />
        <Route exact path="/profile" element={<Profile/>} />



        <Route exact path="/dashboard" element={<Dashboard/>} />
        {/* <Route index element={<Dashboard/>} /> */}
        {/* <Route  path="/admin/dashboard" element={<Dashboard/>} /> */}
        {/* </Route> */}
        {/* <Route  path="/admin/dashboard" element={<Dashboard/>} /> */}

        {/* <Route path="/add" component={AddEdit} />
        <Route path="/update/:id" component={AddEdit} />
        <Route path="/view/:id" component={View} />
        <Route path="/about" component={About} /> */}
         <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
      </Routes>
      </main>
    </div>
    {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
