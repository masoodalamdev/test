import React from 'react'
import "./schoolCounter.css"
import schoolPic from './school.png'
import axios from 'axios'
import { Link } from 'react-router-dom'


const url = 'http://localhost:8000/api/school/schools'
axios.get(url)
    .then(response => {
        const result = response.data;
        const { status, message, data } = result;
        console.log(response.data)
      
            const Counter = response.data.length
            console.log(Counter)
            document.getElementById("school").innerHTML = Counter
         
      
    })
    .catch(err => {
        console.log(err)
    })

export default function SchoolCounter() {
  return (
    <div className='schoolCounter'>
      <div>
        <Link to="/registered-school" className='link'>
        <img src={schoolPic}/>
        <p> Registered Schools <span id='school'></span></p>
        </Link>
      </div>
    </div>
  )
}
