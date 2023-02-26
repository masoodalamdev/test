import './resetPassword.css'
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { storeToken } from '../../services/LocalStorageServices';


const initialState = {
  password: "",
  password_confirmation: ""
}


function ResetPassword() {
  const [state, setState] = useState(initialState)

  const {password, password_confirmation} = state;
  const navigate = useNavigate();

  const { id, token } = useParams()

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

  const resetPassword = async (data) => {
    // const { id, token } = useParams()
    const response = await axios.post(`http://localhost:8000/api/user/reset-password/${id}/${token}`, data);
    if (response.data.status === "success"){
        toast.success(response.data.message)
        setTimeout(() => {
          navigate("/login")
        }, 3000)
    }else{
        toast.error(response.data.message)
    }
    
    
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
  }

  const handleInputChange = (e) => {
    // let {name, value} = e.target.value;
    setState({ ...state, [e.target.name]: e.target.value })

  }

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (!password || !password_confirmation){
        toast.error("Please provide value into each input field")
    }else {
        resetPassword(state)
         // TOKEN STORE
        // TOKEN STORE
        // TOKEN STORE
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
        <h1>Reset Your Password</h1>
       
        <label htmlFor='password'>New Password</label>
        <input type="password" id="password" name="password" placeholder='Enter your password...' onChange={handleInputChange} value={password} />
       
        <label htmlFor='password'>Confirm Password</label>
        <input type="password" id="password_confirmation" name="password_confirmation" placeholder='Confirm your password...' onChange={handleInputChange} value={password_confirmation} />
       
       
        {/* <input type="submit" value={id ? "Update" : "Add"} /> */}
        <input type="submit" value={id ? "Reset Password" : "Reset Password"} />
   
        
      </form>
    </div>
  )
}
export default ResetPassword