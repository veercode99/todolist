import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ModeContext } from '../context/mode-context'
import './Navbar.css'

function Navbar() {
    const {mode, togglefunction} = useContext(ModeContext) 
    const Navigate  = useNavigate('') ;
    const logoutFunction = () => {
        const userConfirmed = window.confirm(
          "Are you sure you want to logout? Click OK to Delete or Cancel to stay."
        );
        if (userConfirmed) {
          
          Navigate (`/Loginpage`);
          localStorage.removeItem('datastore');
          
          
          // Add your actual logout logic here (e.g., clear tokens, redirect, etc.)
        } else {
          // Cancel logout
          console.log("User canceled logout");
        }
      };
    console.log(mode)
  return (
    <div>
        {/* style={{
                backgroundColor:mode === 'light' ? 'black' : "white"  ,color:mode=== 'light'? "white":"black"
                , display: 'flex', 
                justifyContent: 'space-evenly',
                
                alignItems: 'center'
            }} */}
        <nav className={`${mode === "light" ? "light-nav" : "dark-nav"}`}>
                <h2>TODO</h2>
                <ul 
                // style={{
                //     display: 'flex', justifyContent: 'space-between', listStyleType: 'none',
                //     alignItems: 'center', gap: '20px',
                // }} 
                >
                    <Link to='/Loginpage' className='loginpage'
                    //  style={{color:mode=== 'light'? "white":"black",textDecoration:'none'}}
                     >Loginpage</Link>
                    <Link to='/' className='Home'
                    // style={{color:mode=== 'light'? "white":"black",textDecoration:'none'}}
                    >Home</Link>
                    <Link to='/about' className='About'
                    //style={{color:mode=== 'light'? "white":"black",textDecoration:'none'}}
                    >About</Link>
                    <Link to='/AllTodos'  className='Alltodos'
                    //style={{color:mode=== 'light'? "white":"black",textDecoration:'none'}}
                    >All Todos</Link>
                    
                </ul>
                <button onClick={togglefunction} >toggle Mode</button>
                <button onClick={logoutFunction}>
                    Logout
                </button>
            </nav>
    </div>
  )
}

export default Navbar
