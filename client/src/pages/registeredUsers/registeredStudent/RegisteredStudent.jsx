import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./registeredStudent.css";
import axios from 'axios'
import { toast } from 'react-toastify';
import { Typography } from '@mui/material';

function RegisteredStudent() {
  const [data, setData] = useState([]);

  useEffect(()=> {
    getUsers()
  }, [])
  console.log(data)
  const getUsers = async() => {
    const response = await axios.get("http://localhost:8000/api/student/students")
    if (response.status === 200) {
      setData(response.data);

    }
  };

  const onDeleteUser = async (id)=> {
    if(window.confirm("Are you sure want to delete it")){
      const response = await axios.delete(`http://localhost:5000/student/${id}`)
      if (response.status === 200) {
        toast.success(response.data);
        getUsers()
      }
    }
  }
  console.log("data=>", data)
  return (
    <>
    <Typography variant="h5" gutterBottom>
    Registered Students
  </Typography>
    <div style={{marginTop: "150px"}}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{textAlign: "center"}}>S No.</th>
            <th style={{textAlign: "center"}}>Name.</th>
            <th style={{textAlign: "center"}}>Username.</th>
            <th style={{textAlign: "center"}}>Email</th>
            <th style={{textAlign: "center"}}>Contact</th>
            <th style={{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index)=> {
            return (
              <tr  key={index}>
                <th scope='row' > {index + 1}</th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <Link to={`/update/${item._id}`}>
                    <button className='btn btn-edit'>Edit</button>
                  </Link>
                  <Link to={`/view/${item._id}`}>
                    <button className='btn btn-view'>View</button>
                  </Link>
                  <button className='btn btn-delete' onClick={()=> {onDeleteUser(item._id)}}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default RegisteredStudent
