import React from 'react'
import './studentCounter.css'
import studentPic from './student.png'
import axios from 'axios'
import { Link } from 'react-router-dom'

const url = 'http://localhost:8000/api/student/students'
axios.get(url)
    .then(response => {
        const result = response.data;
        const { status, message, data } = result;
        console.log(response.data)
      
            // console.log(data)
            const scount = response.data.length
            console.log(scount)
            document.getElementById("student").innerHTML = scount
         
    
    })
    .catch(err => {
        console.log(err)
    })


export default function StudentCounter() {
  return (
    <div className='studentCounter'>
        <Link to="/registered-student" className='link'>
        <div><img src={studentPic}/> 
    <p> Registered Students <span id='student'></span></p>
    </div>
    </Link>
    </div>
    )
}
