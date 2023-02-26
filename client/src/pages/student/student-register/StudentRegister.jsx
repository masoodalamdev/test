import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import './register.css';
import { toast } from 'react-toastify';
// import { TextField, FormControlLabel, Checkbox, Button, Box, Alert } from '@mui/material';
import { storeToken } from '../../../services/LocalStorageServices';





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
import { Button, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LockIcon from '@mui/icons-material/Lock';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
/////////////////////////////////////////////////////////////////////////


const initialState = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  contact: "",
  imgUrl: "",
  role: "",
  tc: "true",
}


function StudentRegister() {
  const [state, setState] = useState(initialState)

  const { name, email, password, password_confirmation, contact, imgUrl, role, tc } = state;
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
    const response = await axios.post("http://localhost:8000/api/student/register", data);
    if (response.status === 201) {
      toast.success(response.data.name + " "+ response.data.message)
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
    if (!name || !email || !password || !password_confirmation || !contact ) {
      toast.error("Please provide value into each input field")
    } else {
      registerUser(state)

      // console.log(state)
    }
  }
  const handleSubmit3 = (e) => {
    e.preventDefault();
   console.log(name, email, password, password_confirmation)
  }

  return (

    // <div style={{ marginTop: "100px" }}>
    //   <form style={{
    //     margin: "auto",
    //     padding: "15px",
    //     maxWidth: "500px",
    //     alignContent: "center"
    //   }}
    //     onSubmit={handleSubmit2}
    //   >
    //     <h1>SignUp - Register Your Account</h1>
    //     <label htmlFor="name">Name</label>
    //     <input type="text" id="name" name="name" placeholder="Enter your name..." onChange={handleInputChange} value={name} />
    //     {/* <label htmlFor="name">Username</label>
    //     <input type="text" id="username" name="username" placeholder="Enter your username..." onChange={handleInputChange} defaultValue={username} /> */}
    //     <label htmlFor='email'>Email</label>
    //     <input type="email" id="email" name="email" placeholder='Enter your email...' onChange={handleInputChange} value={email} />
    //     {/* <label htmlFor="contact">Contact</label>
    //     <input type="number" id="contact" name="contact" placeholder='Enter your contact...' onChange={handleInputChange} defaultValue={contact} /> */}
    //     <label htmlFor="password">Password</label>
    //     <input type="password" id="password" name="password" placeholder='Enter your password...' onChange={handleInputChange} value={password} />
    //     <label htmlFor="password_confirmation">Password Confirmation</label>
    //     <input type="password" id="password_confirmation" name="password_confirmation" placeholder='Confirm your password...' onChange={handleInputChange} value={password_confirmation} />
    //     {/* <input type="submit" value={id ? "Update" : "Add"} /> */}
    //     <FormControlLabel control={<Checkbox value="true" color="primary" name="tc" id="tc" />} label="I agree to terms and conditions." />
    //     <input type="submit" value={id ? "Register" : "Register"} />

    //   </form>
    // </div>


    ////////////////////////////////////////////////////////////////////////////////////


    <>
    <Typography variant="h5" gutterBottom>
        Register as Student
      </Typography>
      {/* <Link to="/register/school" className='link'>
        <Button variant="outlined" startIcon={<SchoolIcon />}>
          Register as School
        </Button>
      </Link>
      <br />
      <Link to="/register/teacher" className='link'>
        <Button variant="outlined" startIcon={<GroupAddIcon />}>
          Register as Teacher
        </Button>
      </Link>
      <br />
      <Link to="/register/student" className='link'>
        <Button variant="outlined" startIcon={<PersonAddAlt1Icon />}>
          Register as Student
        </Button>
      </Link> */}



      <Box  

    // sx={{ display: 'flex', flexWrap: 'wrap' }}
     >
         <form
        // onSubmit={handleSubmit3}
     >
            <FormControl sx={{ border: 1, borderRadius: 5, padding: 2 }}>
          <TextField id="standard-basic" label="Name" variant="standard" name="name" onChange={handleInputChange} value={name}/>
          <br />
          <TextField id="standard-basic" label="Email" variant="standard" name="email" onChange={handleInputChange} value={email}/>
          <br />
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">

          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
               name="password" onChange={handleInputChange} value={password}
            />
</FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">

          <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              name="password_confirmation" onChange={handleInputChange} value={password_confirmation}

            />
</FormControl>


          {/* <TextField id="standard-basic" label="Password" variant="standard" />
          <br />
          <TextField id="standard-basic" label="Confirm Password" variant="standard" /> */}
          <br />
          <TextField id="standard-basic" label="Contact" variant="standard" name="contact" value={contact}  onChange={handleInputChange}  />
          <br />
         
          {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
      </FormControl> */}
<br />

        <Button variant="outlined" startIcon={<ArrowForwardIcon />} onClick={handleSubmit2}>
          Submit
        </Button>
     
      <br />
      <Link to="/student-login" className='link'>
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

    
       
          </FormControl>
    
 
    </form>
      </Box>

    


              
    </>



















  )
}
export default StudentRegister