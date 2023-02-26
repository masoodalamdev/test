import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import './register.css';
import { toast } from 'react-toastify';
// import { TextField, FormControlLabel, Checkbox, Button, Box, Alert } from '@mui/material';
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
import FileInput from "../../../components/FileInput";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { storeToken } from '../../../services/LocalStorageServices';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import LockOpenIcon from '@mui/icons-material/LockOpen';


function TeacherLogin() {


    const [data, setData] = useState({
      
        email: "",
        password: "",
    });

    const {email, password} = data
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }


    const loginUser = async (data) => {
        const response = await axios.post("http://localhost:8000/api/teacher/login", data);
        if (response.data.status === "success"){
            toast.success(response.data.message)
                   // TOKEN STORE
                   storeToken(response.data.token)
                   navigate("/dashboard")
                   // TOKEN STORE
    
        }else{
            toast.error(response.data.message)
        }
    }
        const handleSubmit2 = (e) => {
            e.preventDefault();
            if (!email || !password){
                toast.error("Please provide value into each input field")
            }else {
                loginUser(data)
                       
            }
          }


    return (
        <>
         <Typography variant="h5" gutterBottom>
        SignIn - Login as Teacher
      </Typography>
         <Box>
         <FormControl sx={{ border: 1, borderRadius: 5, padding: 5 }}>
            <br />
            <TextField id="standard-basic" label="Email" variant="standard" name="email" onChange={handleChange} value={data.email} />
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
                    name="password" onChange={handleChange} value={data.password}
                />
            </FormControl>
            <br />
            



            
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
      <Link to="/register-teacher" className='link'>
        <Button variant="outlined" startIcon={<LockOpenIcon />}>
          Not Registered ? SignUp Here 
        </Button>
      </Link>
      <br/>
      <Link to="/register" className='link'>
        <Button variant="outlined" startIcon={<ArrowBackIcon />}>
          Go back
        </Button>
      </Link>
            </FormControl>
            </Box>
        </>


    )
}

export default TeacherLogin