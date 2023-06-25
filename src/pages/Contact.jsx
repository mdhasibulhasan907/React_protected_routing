import React from 'react'
import {useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate=useNavigate();
  return (
    <div>
    <h3>Contact</h3>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus illum corrupti neque quaerat saepe earum non nihil distinctio tempore repellat nemo rerum omnis, ullam sequi atque in facere necessitatibus est alias quasi reiciendis eum iusto veniam! Quas labore molestiae minima, rerum dolores voluptate, ad neque, quam a fugiat facere?</p>
   
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore perferendis atque ab quia eaque esse vero, molestias modi. Nulla in expedita facere quibusdam quidem quod harum amet aliquid rerum suscipit veritatis quisquam doloremque voluptatibus reprehenderit saepe autem inventore numquam aut delectus ut nostrum, corrupti, fugiat nam! Beatae debitis placeat adipisci.</p>
    <button onClick={()=>{navigate('/')}}>
      Go to home 
    </button>
</div>

  )
}

export default Contact