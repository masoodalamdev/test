import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Adminregister.css';
import { toast } from 'react-toastify';
// import { TextField, FormControlLabel, Checkbox, Button, Box, Alert } from '@mui/material';
import { storeToken } from '../../../services/LocalStorageServices';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LockIcon from '@mui/icons-material/Lock';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';




/////////////////////////////////////////////////////////////////////////
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

/////////////////////////////////////////////////////////////////////////


const initialState = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  tc: "true",
}


function AdminRegister() {
  const [state, setState] = useState(initialState)

  const { name, email, password, password_confirmation, tc } = state;
  const navigate = useNavigate();

  const { id } = useParams()

  ////////////////////////////////////////////////////////////////////////////
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
  /////////////////////////////////////////////////////////////////////////////////////

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

  const registerUser = async (data) => {
    const response = await axios.post("http://localhost:8000/api/user/register", data);
    if (response.status === 201) {
      toast.success(response.data.message)
      //   console.log(response.message)
      // TOKEN STORE
      storeToken(response.data.token)
      // TOKEN STORE
    } else {
      toast.error(response.data.message)
      // console.log(response.data.message)
    }
  }

  const handleInputChange = (e) => {
    // let {name, value} = e.target.value;
    setState({ ...state, [e.target.name]: e.target.value })

  }

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !password_confirmation) {
      toast.error("Please provide value into each input field")
    } else {
      registerUser(state)

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
        <h1>SignUp - Register as Admin</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name..." onChange={handleInputChange} value={name} />
        {/* <label htmlFor="name">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username..." onChange={handleInputChange} defaultValue={username} /> */}
        <label htmlFor='email'>Email</label>
        <input type="email" id="email" name="email" placeholder='Enter your email...' onChange={handleInputChange} value={email} />
        {/* <label htmlFor="contact">Contact</label>
        <input type="number" id="contact" name="contact" placeholder='Enter your contact...' onChange={handleInputChange} defaultValue={contact} /> */}
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder='Enter your password...' onChange={handleInputChange} value={password} />
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input type="password" id="password_confirmation" name="password_confirmation" placeholder='Confirm your password...' onChange={handleInputChange} value={password_confirmation} />
        {/* <input type="submit" value={id ? "Update" : "Add"} /> */}
        <FormControlLabel control={<Checkbox value="true" color="primary" name="tc" id="tc" />} label="I agree to terms and conditions." />
        <input type="submit" value={id ? "Register" : "Register"} />

      </form>
    </div>





    <Button variant="outlined" startIcon={<ArrowForwardIcon />} onClick={handleSubmit2}>
          Submit
        </Button>
     
      <br />
      <Link to="/admin-login" className='link'>
        <Button variant="outlined" startIcon={<LockIcon />}>
          Already Registered ? Login Here
        </Button>
      </Link>
      <br />
      
      <Link to="/register" className='link'>
        <Button variant="outlined" startIcon={<ArrowBackIcon />}>
          Go back
        </Button>
      </Link>



    </>



















  )
}
export default AdminRegister