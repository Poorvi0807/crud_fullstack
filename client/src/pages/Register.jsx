import React, { useState } from 'react'

const Register = () => {
const defaultUser = {
    username:"",
    email:"",
    phone:"",
    password:""
}
    const [user,setUser] = useState(defaultUser);

    const handleInput = (e) =>{
       let name = e.target.name;
       let value = e.target.value;

        setUser({
            ...user,
            [name]:value,
        })

    }
    const handleSubmit = async(e)=>{
         e.preventDefault();
         console.log(user);
         if (!user.email || !user.username || !user.password || !user.phone) {
          alert("Please fill in all required fields.");
          return;
        }
         try {
          const response = await fetch("http://localhost:8080/api/auth/register",{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify(user),
          });
          console.log("response data : ",response);
         } catch (error) {
          console.log(error);
         } 
      
        setUser(defaultUser);
    }
  return (
    <form onSubmit={handleSubmit}>
    <label>Username</label>
      <input type='text' placeholder='Enter Username' name="username" value={user.username} onChange={handleInput}/>
      <label>Email</label>
      <input type='text' placeholder='Enter Email'name="email" value={user.email} onChange={handleInput}/>  
      <label>Phone</label>
      <input type='number' placeholder='Enter Phone'name="phone" value={user.phone} onChange={handleInput}/>
      <label>Password</label>
      <input type='text' placeholder='Enter Password'name="password" value={user.password} onChange={handleInput}/> 
      <button>Submit</button>
    </form>
  )
}

export default Register
