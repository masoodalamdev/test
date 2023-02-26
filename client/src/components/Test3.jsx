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
import { Button, Select, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MenuItem from '@mui/material/MenuItem';


/////////////////////////////////////////////////////////////////////////


const initialState = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  contact: "",
  school: "",
  tc: "true",
}


function TeacherRegister() {
  const [state, setState] = useState(initialState)
  const [schoolName, setSchoolName] = useState([]);

  const [selectedSchool, setSelectedSchool] = React.useState('');

  const { name, email, password, password_confirmation, contact, tc } = state;
  const navigate = useNavigate();

  const { id } = useParams()

  ////////////////////////////////////////////////////////////////////////////
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
  /////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    getSchools()
  }, [])

  const getSchools = async () => {
    const response = await axios.get("http://localhost:8000/api/school/schools")
    if (response.status === 200) {
      setSchoolName(response.data)
      const abc = response.data;
    }
  };




  const registerUser = async (data) => {
    const response = await axios.post("http://localhost:8000/api/teacher/register", data);
    if (response.status === 201) {
      toast.success(response.data.name + " " + response.data.message)
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
  const handleChange = (event) => {
    setSelectedSchool(event.target.value);
   
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !password_confirmation || !contact || !selectedSchool ) {
      toast.error("Please provide value into each input field")
    } else {
      registerUser(state)

      console.log(state)
    }
  }


  const handleSubmit3 = (e)=>{
    e.preventDefault();
    setState({ ...state, school: selectedSchool})
console.log( state)

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
      <Typography variant="h4" gutterBottom>
        Register as Teacher
      </Typography>
      <Box>

        <FormControl sx={{ border: 1, borderRadius: 5, padding: 5 }}>
          <TextField id="standard-basic" label="Name" variant="standard" name="name" onChange={handleInputChange} value={name} />
          <br />
          <TextField id="standard-basic" label="Email" variant="standard" name="email" onChange={handleInputChange} value={email} />
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
              name="password_confirmation" onChange={handleInputChange} value={password_confirmation}/>
          </FormControl>
          <br />
          <TextField id="standard-basic" label="Contact" variant="standard"  name="contact" onChange={handleInputChange} value={contact}/>
          <br />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Select Your School</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectedSchool}
          onChange={handleChange}
          label="Select Your School"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {schoolName.map((item, index) => {
            return (
              <MenuItem value={item.name}> {item.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
          <Button variant="outlined" startIcon={<SchoolIcon />} onClick={handleSubmit3}>
            Submit
          </Button>


        </FormControl>



      </Box>

     <p>selected school : {selectedSchool}</p>


    </>



  )
}
export default TeacherRegister