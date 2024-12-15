import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AboutPage.css'
import Navbar from '../Component/Navbar'
import { Navigate } from 'react-router-dom'

function Loginpage() {
  // const [email , setemail] = useState('');
  // const [password, setpassword] = useState('');

  // const handleechangeemail =(e)=> setemail(e.target.value);
  // const handlechangepassword=(e)=> setpassword(e.target.value);

  const [formData,setFormData] = useState(
    // JSON.parse(localStorage.getItem("datastore") || [])
    {
    email: "",
    password:""                                                           
  });

  const [formError, setformError] = useState({
    email: "",
    password: ""
  })


  const inputChangeHandler = (event) =>{
    const {value, name} = event.target
    console.log(name,value)
    setFormData({...formData,[name]: value})

    setformError({...formError,[name]: ""})
  }

  // console.log({formData})
  console.log(formError)
  const handleSubmit =(e)=>{
    e.preventDefault();
    if (!formData.email) {
      // alert("Please fill in all fields.");
      setformError({...formError, email: "Please enter email address"})
      return;
  }else if(!formData.password){
    setformError({...formError,password:"password must be 6 character long"})
    return
  }
    
    // console.log(password)
    localStorage.setItem("datastore",JSON.stringify(formData));
    Navigate(`/`)
    setFormData({email:"", password:""});    
  }

  // useEffect(()=>{
  //   // localStorage.setItem("datastore",JSON.stringify(formData))
  // },[formData]);

  const Navigate  = useNavigate('') ;

  // const openHomepage = () =>{
    
  //   localStorage.setItem("datastore",JSON.stringify(formData));
    
  // };

  // const formOpenSubmit =(e)=>{
  //   handleSubmit (e);
  //   openHomepage  () ;
  // }
  return (
    <div >
      
      <div className ="login-container">
        
        <h1>Loginpage </h1>
        <p>Welcome back!</p>
        <form onSubmit={handleSubmit}>
          <label>Email</label><br />


          <input
            type='Email'
            placeholder='Enter your email'
            name='email' 
            value={formData.email}
            onChange={inputChangeHandler}/><br />
            {formError.email &&   <p className='error'>  {formError.email}  </p>}<br/>


            <label>Password</label><br />
            <input
            type='password'
            placeholder='Enter your password'
            onChange={inputChangeHandler}
            name='password' 
            value={formData.password}/><br />
            {formError.password && <p className='error'>  {formError.password}  </p>}


            <Link to='/regestration'>
            <button>regestration</button></Link>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Loginpage
