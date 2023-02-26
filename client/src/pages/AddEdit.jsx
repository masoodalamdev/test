import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './addEdit.css';
import { toast } from 'react-toastify';


const initalState = {
  name: "",
  username: "",
  email: "",
  contact: "",
}


function AddEdit() {
  const [state, setState] = useState(initalState)

  const { name, username, email, contact } = state;
  const navigate = useNavigate();

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id])

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`)
    if (response.status === 200) {
      setState({...response.data})
    }
  }

  const addUser = async (data) => {
    const response = await axios.post("http://localhost:5000/user", data);
    if (response.status === 200) {
      toast.success(response.data)
    }
  }

  const updateUser = async (data, id) => {
    const response = await axios.put(`http://localhost:5000/user/${id}`, data);
    if (response.status === 200) {
      toast.success("Records Updated Succesfully")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !username || !email || !contact) {
      toast.error("Please provide value into each input field")
    }
    else {
      if(!id){
        addUser(state);

      }else{
        updateUser(state, id)
      }
      setTimeout(() => navigate("/"), 500)

    }
  }

  const handleInputChange = (e) => {
    // let {name, value} = e.target.value;
    setState({ ...state, [e.target.name]: e.target.value })

  }

  return (

    <div style={{ marginTop: "100px" }}>
      <form style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center"
      }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name..." onChange={handleInputChange} defaultValue={name} />
        <label htmlFor="name">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username..." onChange={handleInputChange} defaultValue={username} />
        <label htmlFor='email'>Email</label>
        <input type="email" id="email" name="email" placeholder='Enter your email...' onChange={handleInputChange} defaultValue={email} />
        <label htmlFor="contact">Contact</label>
        <input type="number" id="contact" name="contact" placeholder='Enter your contact...' onChange={handleInputChange} defaultValue={contact} />
        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  )
}
export default AddEdit