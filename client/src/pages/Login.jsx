import React, { useState } from 'react'

const Login = () => {
  const defaultUser = {
    email:"",
    password:""
}

  const [user,setUser] = useState(defaultUser);

  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    })

  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(user);
    setUser(defaultUser);
  }
  return (
   <>
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type='text' 
      placeholder='Enter Email'
      name="email" 
      value={user.email} 
      onChange={handleInput}/> 

      <label>Password</label>
      <input type='text' 
      placeholder='Enter Password'
      name="password" 
      value={user.password} 
      onChange={handleInput}/> 

      <button>Submit</button>
    </form>
   </>
  )
}

export default Login
