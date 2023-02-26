import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar, sidebarClasses, menuItemStyles  } from 'react-pro-sidebar';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { getToken, removeToken } from '../../services/LocalStorageServices';
import axios from 'axios';
import './sidebar.css'
import profileIMG from './dctr.jpg'
import Profile from '../../pages/admin/Profile';


function SidebarMenu() {
    const { collapseSidebar } = useProSidebar();
    const navigate = useNavigate()
    const token = getToken()

    const url = 'http://localhost:8000/api/user/loggeduser'

    
    
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
    
    };


    const handleLogout = () => {
      removeToken('token')
      navigate('/login')
    }
  return (
 
    <>
    {/* <div className="outlet"> */}

{/* <Outlet/> */}
    {/* </div> */}

    {/* <Sidebar>
    <Menu
    menuItemStyles={{
      button: ({ level, active, disabled }) => {
        // only apply styles on first level elements of the tree
        if (level === 0)
          return {
            color: disabled ? '#f5d9ff' : '#d359ff',
            backgroundColor: active ? '#eecef9' : undefined,
          };
      },
    }}
  >
    <MenuItem component={<Link to="/documentation" />}> Documentation</MenuItem>
    <MenuItem component={<Link to="/about" />}> Calendar</MenuItem>
    <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
  </Menu>
</Sidebar> */}



<div style={{ display: 'flex', height: '100vh' }}>
<Sidebar>
  <Menu>
    {/* <Box id="userBox">
      <Link to="/profile" className='link'>
      <img src={profileIMG} id="profileIMG"></img>
      <div id="userInfo">
      <p><span id='name'></span></p>
      <p><span id='email'></span></p>
      <p>You're Logged in as <strong><span id='role'></span></strong></p>
      </div>
      </Link>
    </Box> */}
    <Profile/>
  {/* <SubMenu  defaultOpen label="User Info" > 
    <MenuItem>
  <Link to="/dashboard" className='link'>Name : Masood ALam </Link>
  </MenuItem>
  <MenuItem> 
  <Link to="/dashboard" className='link'>Email : masood@gmail.com </Link>
  </MenuItem>
  <MenuItem> 
  <Link to="/dashboard" className='link'>Role : Admin </Link>
  </MenuItem>
  </SubMenu> */}
  <MenuItem> 
  <Link to="/dashboard" className='link'>Dashboard </Link>
  </MenuItem>
    <SubMenu label="Registered Users">
      <MenuItem> 
      <Link to="/registered-admin"  className='link'>
      Admin 
      </Link>
      </MenuItem>
      <MenuItem>
      <Link to="/registered-school"  className='link'>
       School
      </Link>
       </MenuItem>
      <MenuItem> 
      <Link to="/registered-teacher"  className='link'>
      Teacher
      </Link>
      </MenuItem>
      <MenuItem> 
      <Link to="/registered-student"  className='link'>
      Student
      </Link>
      </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
{token ?  <SubMenu label="Account">
      <MenuItem> 
      <Link to="/changepassword"  className='link'>

      Change Password 
      </Link>
      </MenuItem>
      <MenuItem onClick={handleLogout}> Logout </MenuItem>
    </SubMenu> : ""}
   
  </Menu>
</Sidebar>
</div>

{/* <div style={{ display: 'flex', height: '100%' }}>
<Sidebar
  rootStyles={{
    [`.${sidebarClasses.container}`]: {
      backgroundColor: 'red',
    },
  }}
>
<Menu
    menuItemStyles={{
      button: ({ level, active, disabled }) => {
        // only apply styles on first level elements of the tree
        if (level === 0)
          return {
            color: disabled ? '#f5d9ff' : '#d359ff',
            backgroundColor: active ? '#eecef9' : undefined,
          };
      },
    }}
  >
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem active={true}> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div> */}

    
</>
  )
}

export default SidebarMenu