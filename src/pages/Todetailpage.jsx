import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import { useParams } from 'react-router-dom'

function Todetailpage() {

    const param = useParams()
    console.log({param},param.todoId)
    const [localdata ,  setlocaldata] = useState(JSON.parse(localStorage.getItem("note")));
    const [singleData, setsingleData ] =  useState({})

    const filterdatadetail = () => {
        const filterdetail = localdata.filter((item, i)=> param.todoId === i.toString())
        console.log({filterdetail})
        setsingleData(filterdetail[0]) //filter = find exm index 
    }

    useEffect(()=>{
        console.log("running")
        filterdatadetail()
    },[])

    console.log({singleData})
   
  
  return (
    <div>
        {/* <Navbar /> */}
      todo deatail - {singleData?.task}
    </div>
  )
}

export default Todetailpage

//get local data and store in state
//create a function to filter data (delete)
// call this function in useeffect

