import './login.css'
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { storeToken } from '../../../services/LocalStorageServices';
import SchoolIcon from '@mui/icons-material/School';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import { Button, Typography } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const initialState = {
    email: "",
    password: ""
  }

function SchoolLogin() {
    const [state, setState] = useState(initialState)

    const {email, password} = state;
    const navigate = useNavigate();
  
    const { id } = useParams()

    const loginUser = async (data) => {
        const response = await axios.post("http://localhost:8000/api/school/login", data);
        if (response.data.status === "success"){
            toast.success(response.data.message)
            console.log(response)
                   // TOKEN STORE
                   storeToken(response.data.token)
                   navigate("/dashboard")
                   // TOKEN STORE
    
        }else{
            toast.error(response.data.message)
        }


    }
        
    const handleInputChange = (e) => {
        // let {name, value} = e.target.value;
        setState({ ...state, [e.target.name]: e.target.value })
    
      }
    
      const handleSubmit2 = (e) => {
        e.preventDefault();
        if (!email || !password){
            toast.error("Please provide value into each input field")
        }else {
            loginUser(state)
             // TOKEN STORE
            // TOKEN STORE
            // TOKEN STORE
            console.log(state)
        }
      }
  return (
    <>
        <div style={{ marginTop: "100px" }}>
      <form style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "500px",
        alignContent: "center"
      }}
        onSubmit={handleSubmit2}
      >
        <h1>Login as School</h1>
       
        <label htmlFor='email'>Email</label>
        <input type="email" id="email" name="email" placeholder='Enter your email...' onChange={handleInputChange} value={email} />
        {/* <label htmlFor="contact">Contact</label>
        <input type="number" id="contact" name="contact" placeholder='Enter your contact...' onChange={handleInputChange} defaultValue={contact} /> */}
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder='Enter your password...' onChange={handleInputChange} value={password} />
       
        {/* <input type="submit" value={id ? "Update" : "Add"} /> */}
        <input type="submit" value={id ? "Login" : "Login"} />
        <label><Link to="/send-password-reset-email" className='link'> Forgot Password ? </Link></label>
        <br/>
        <label><Link to="/register" className='link'> New User ? SingUp Here </Link></label>
        
      </form>
    </div>

          
<Button variant="outlined" startIcon={<ArrowForwardIcon />}onClick={handleSubmit2}>
          Login
        </Button>
        <br/>
<Link to="/" className='link'>
        <Button variant="outlined" startIcon={<QuestionMarkIcon />}>
          Forgotten Password ? 
        </Button>
      </Link>
      <br />
      <Link to="/register-school" className='link'>
        <Button variant="outlined" startIcon={<LockOpenIcon />}>
          Not Registered ? SignUp Here 
        </Button>
      </Link>
      <br/>
      <Link to="/login" className='link'>
        <Button variant="outlined" startIcon={<ArrowBackIcon />}>
          Go back
        </Button>
      </Link>
      </>

  )
}

export default SchoolLogin