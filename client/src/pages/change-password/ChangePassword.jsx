import './changePassword.css'
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getToken, storeToken } from '../../services/LocalStorageServices';


const initialState = {
  password: "",
  password_confirmation: ""
}


function ChangePassword() {
  const [state, setState] = useState(initialState)

  const {password, password_confirmation} = state;
  const navigate = useNavigate();
const token = getToken('token')
const url = 'http://localhost:8000/api/user/changepassword'


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

//   const changePassword = async (data) => {
//     // const { id, token } = useParams()
//     console.log(token)
//     const response = await axios.post(url, { 'headers': { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'
//     } }).then((response => {
//         // console.log(response.data);
//       console.log(response, response.data)
//       }) )
//       .catch((error) => {
//         console.log(error);
//       })
  
 
    // if (response.data.status === "success"){
    //     toast.success(response.data.message)
    //     // setTimeout(() => {
    //     //   navigate("/login")
    //     // }, 3000)
    //     console.log(response)

    // }
    // // if (response.data.status === "failed"){
    // //     toast.error(response.data.message)
    // //     console.log(response)
    // // }
    // else{
    //     toast.error(response.data.message)
    //     console.log(response)
    // }
    
    
    // if (response.status === 201) {
    //   console.log(response.message)
    // }
    // else{
    //     toast.error(response.data.message)
    //     // console.log(response.data.message)
    //   }
//   }

const changePassword = async(data) => {
    const response = await axios.post(url, data, { 'headers': { 'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
    } })
      if (response.data.status === "success"){
        toast.success(response.data.message)
        // setTimeout(() => {
        //   navigate("/login")
        // }, 3000)
        console.log(response)

    }
    else if (response.data.status === "failed"){
        toast.error(response.data.message)
        console.log(response)
    }
    else{
        toast.error(response.data.message)
        console.log(response)
    }
  
  };

  const handleInputChange = (e) => {
    // let {name, value} = e.target.value;
    setState({ ...state, [e.target.name]: e.target.value })

  }

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (!password || !password_confirmation){
        toast.error("Please provide value into each input field")
    }else {
        changePassword(state)
        console.log(state)
    }
  }

  return (

    <div style={{ marginTop: "100px" }}>
      <form style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "500px",
        alignContent: "center"
      }}
        onSubmit={handleSubmit2}
      >
        <h1>Change Your Password</h1>
       
        <label htmlFor='password'>New Password</label>
        <input type="password" id="password" name="password" placeholder='Enter your password...' onChange={handleInputChange} value={password} />
       
        <label htmlFor='password'>Confirm Password</label>
        <input type="password" id="password_confirmation" name="password_confirmation" placeholder='Confirm your password...' onChange={handleInputChange} value={password_confirmation} />
       
       
        {/* <input type="submit" value={id ? "Update" : "Add"} /> */}
        <input type="submit" value={"Change Password"} />
   
        
      </form>
    </div>
  )
}
export default ChangePassword