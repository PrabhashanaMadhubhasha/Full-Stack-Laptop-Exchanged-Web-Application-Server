import { useState } from "react";

import React from 'react'

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('/loginto',{email, password})
      .then(result=>{console.log(result)
        navigate('/home')
          // if(result.data==="Success"){
              
          //     // navigate('/home')
          //   }
      
      })
      .catch(err=>console.log(err))
  }
      

    return (
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {/* <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input
                    type="text"
                    placeholder="Enter Name"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e)=> setName(e.target.value)}/>
                </div> */}
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input
                    type="email"
                    placeholder="Enter Email"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e)=> setEmail(e.target.value)}/>
                    

                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input
                    type="password"
                    placeholder="Enter Password"
                    autoComplete="off"
                    name="password"
                    className="form-control rounded-0"
                    onChange={(e)=> setPassword(e.target.value)}
                    />
    
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                </form>
                <p>Already Have an Account</p>
                <button className="btn btn-success w-100 rounded-0"><a href="/" style={{textDecoration:'none', color:'white'}}>Sign Up</a></button>


            

        </div>
        
      </div>
    )
  
}
