import React, { useState, useEffect } from 'react'
import './dashboard.css'
import JobCounter from '../../components/counter/jobCounter/JobCounter'
import SchoolCounter from '../../components/counter/schoolCounter/SchoolCounter'
import StudentCounter from '../../components/counter/studentCounter/StudentCounter'
import TeacherCounter from '../../components/counter/teacherCounter/TeacherCounter'

import axios from 'axios'
import { getToken } from '../../services/LocalStorageServices'



// axios.get(url)
//     .then(response => {
//         const result = response.data;
//         const { status, message, data } = result;
//         console.log(response.data, response.data.data, message, status)
//         if (status !== 'SUCCESS') {
//             alert(message, status)
//         }
//         else {
//             // console.log(data)
//             const scount = data.length
//             console.log(scount)
//             document.getElementById("school").innerHTML = scount
         
//         }
//     })
//     .catch(err => {
//         console.log(err)
//     })



 
export default function Dashboard() {

  return (
    
    <div className='dashboard'>
         <div className='counter'>
            <SchoolCounter/>
            <TeacherCounter/>
            <StudentCounter/>
            <JobCounter/>
            </div>
        
    </div>

  )
}
