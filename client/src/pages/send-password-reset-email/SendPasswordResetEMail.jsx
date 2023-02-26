import './sendPasswordResetEmail.css'
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { storeToken } from '../../services/LocalStorageServices';


const initialState = {
  email: ""
}


function SendPasswordResetEmail() {
  const [state, setState] = useState(initialState)

  const {email} = state;
  const navigate = useNavigate();

  const { id } = useParams()

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
    const response = await axios.post("http://localhost:8000/api/user/send-reset-password-email", data);
    if (response.data.status === "success"){
        toast.success(response.data.message)
               // TOKEN STORE
              //  storeToken(response.data.token)
               // TOKEN STORE

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
    if (!email){
        toast.error("Please enter your registered email")
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
       
        <label htmlFor='email'>Email</label>
        <input type="email" id="email" name="email" placeholder='Enter your email...' onChange={handleInputChange} value={email} />
       
       
        {/* <input type="submit" value={id ? "Update" : "Add"} /> */}
        <input type="submit" value={id ? "Reset Password" : "Reset Password"} />
   
        
      </form>
    </div>
  )
}
export default SendPasswordResetEmail