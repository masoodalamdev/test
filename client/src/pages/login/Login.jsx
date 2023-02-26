import './login.css'
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { storeToken } from '../../services/LocalStorageServices';
import SchoolIcon from '@mui/icons-material/School';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import { Button, Typography } from '@mui/material';






function Login() {


//   useEffect(() => {
//     if (id) {
//       getSingleUser(id);
//     }
//   }, [id])

//   const getSingleUser = async (id) => {
//     const response = await axios.get(`http://localhost:5000/user/${id}`)
//     if (response.status === 200) {
//       setState({...response.data})
//     }
//   }

//   const addUser = async (data) => {
//     const response = await axios.post("http://localhost:5000/user", data);
//     if (response.status === 200) {
//       toast.success(response.data)
//     }
//   }

//   const updateUser = async (data, id) => {
//     const response = await axios.put(`http://localhost:5000/user/${id}`, data);
//     if (response.status === 200) {
//       toast.success("Records Updated Succesfully")
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !username || !email || !contact) {
//       toast.error("Please provide value into each input field")
//     }
//     else {
//       if(!id){
//         addUser(state);

//       }else{
//         updateUser(state, id)
//       }
//       setTimeout(() => navigate("/"), 500)

//     }
//   }


    
    // try{

    // }
    // catch(error){
     
    // }
    // if (response.status === 201) {
    //   console.log(response.message)
    // }
    // else{
    //     toast.error(response.data.message)
    //     // console.log(response.data.message)
    //   }




  return (
 


<>
<Typography variant="h5" gutterBottom>
    Login Here
  </Typography>

    <Link to="/admin-login" className='link'>
    <Button variant="outlined" startIcon={<ManageAccountsIcon />}>
      Login as Admin
    </Button>
  </Link>
  <br />
  <Link to="/school-login" className='link'>
    <Button variant="outlined" startIcon={<SchoolIcon />}>
      login as School
    </Button>
  </Link>
  <br />
  <Link to="/teacher-login" className='link'>
    <Button variant="outlined" startIcon={<GroupAddIcon />}>
      Login as Teacher
    </Button>
  </Link>
  <br />
  <Link to="/student-login" className='link'>
    <Button variant="outlined" startIcon={<PersonAddAlt1Icon />}>
      Login as Student
    </Button>
  </Link>
  <br/>
  <br/>
  <Link to="/register" className='link'>
        <Button variant="outlined" startIcon={<LockOpenIcon />}>
          Not Registered ? SignUp Here 
        </Button>
      </Link>
  </>


  )
}
export default Login