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
import FileInput from "../components/FileInput";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Test2() {

    const [schoolName, setSchoolName] = useState([]);
    const [selectedSchool, setSelectedSchool] = React.useState('');


    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        contact: "",
        school: "",
        imgUrl: "",
        tc: "true",
    });

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleInputState = (name, value) => {
        setData((prev) => ({ ...prev, [name]: value }));
        setImageUrl(value)
        console.log(name, value)
        console.log(data)
        console.log(data.imgUrl)
        console.log(imageUrl)

    };

    const handleChange2 = (e, name, value) => {
       
        console.log(e.target.name, e.target.value)
        // setData((prev) => ({ ...prev, school: e.target.value }));
        // setData({  school: e.target.value })
        // console.log(data)
        data.school = e.target.value
        console.log(data)

    };

    // const handleChange2 = (name, value) => {
	// 	setData((prev) => ({ ...prev, [name]: value }));
	// };

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }


    const handleSubmit3 = (e) => {
        const Credentials = {name, selectedSchool}
        e.preventDefault();
        console.log(data)
        console.log(Credentials)
        console.log(data.imgUrl)
        return (
      <Alert severity="success">This is a success alert — check it out!</Alert>

        )
    }

    useEffect(() => {
        getSchools()
    }, [])

    const getSchools = async () => {
        const getSchoolsUrl = "http://localhost:8000/api/school/schools"
        const response = await axios.get(getSchoolsUrl)
        if (response.status === 200) {
            setSchoolName(response.data)
            console.log(response.data)
            const abc = response.data;
        }
    };
    return (
        <>
      
            <TextField id="standard-basic" label="Name" variant="standard" name="name" onChange={handleChange} value={data.name}   />
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
                    name="password_confirmation" onChange={handleChange} value={data.password_confirmation} />
            </FormControl>
            <br />
            <TextField id="standard-basic" label="Contact" variant="standard" name="contact" onChange={handleChange} value={data.contact} />
            <br />



            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Select Your School</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={selectedSchool}
                    onChange={handleChange2}
                    label="Select Your School"
                    name="school"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {schoolName.map((item, index) => {
                        return (
                            <MenuItem value={item.name} > {item.name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <br />
            <FileInput
					name="imgUrl"
					label="Choose Image"
					handleInputState={handleInputState}
					type="image"
					value={data.imgUrl}
				/>
                <br/>
            <Button variant="outlined" startIcon={<SchoolIcon />} onClick={handleSubmit3}>
                Submit
            </Button>
        </>


    )
}

export default Test2