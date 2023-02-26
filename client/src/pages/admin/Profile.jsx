import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './profile.css'
import { getToken, removeToken } from '../../services/LocalStorageServices';
import axios from 'axios';
import profileIMG from '../../components/sidebar/dctr.jpg'


function Profile() {
  const url = 'http://localhost:8000/api/user/loggeduser'
const token = getToken()

    
    
    useEffect(()=> {
      getUserDetail()
    }, [])
    


    
    const getUserDetail = async() => {
      const response = await axios.get(url, { 'headers': { 'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
      } })
        .then((response => {
          // console.log(response.data);
          document.getElementById("name").innerHTML = response.data.user.name
          document.getElementById("email").innerHTML = response.data.user.email
          document.getElementById("role").innerHTML = response.data.user.role
          // console.log(response.data.user.role)
        }) )
        .catch((error) => {
          console.log(error);
        })
    
    }
  return (
    <div>
        <Box id="userBox">
      <Link to="/profile" className='link'>
      <img src={profileIMG} id="profileIMG"></img>
      <div id="userInfo">
      <p><span id='name'></span></p>
      <p><span id='email'></span></p>
      <p>You're Logged in as <strong><span id='role'></span></strong></p>
      </div>
      </Link>
    </Box>
    </div>
  )
}

export default Profile