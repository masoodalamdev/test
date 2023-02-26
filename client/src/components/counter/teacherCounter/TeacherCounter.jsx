import React from 'react'
import './teacherCounter.css'
import teacherPic from './teacher.png'

import axios from 'axios'
import { Link } from 'react-router-dom'

const url = 'http://localhost:8000/api/teacher/teachers'
axios.get(url)
    .then(response => {
        const result = response.data;
        const { status, message, data } = result;
        console.log(response.data, response.data.data, message, status)
   
            // console.log(data)
            const scount = response.data.length
            console.log(scount)
            document.getElementById("teacher").innerHTML = scount
         
       
    })
    .catch(err => {
        console.log(err)
    })

export default function TeacherCounter() {
  return (
    <div className='teacherCounter'>
        <div>
        <Link to="/registered-teacher" className='link'>
        <img src={teacherPic}/>
        <p> Registered Teachers <span id="teacher"></span></p>
        </Link>
        </div>
        </div>
  )
}
