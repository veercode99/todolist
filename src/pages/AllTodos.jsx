import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'

const AllTodos = () => {

  const [allData,setAllData] = useState([])
  const [loading,setLoading] = useState(false)
  const getAlltodoData =async () => {
    setLoading(true)
    const response = await fetch("https://jsonplaceholder.typicode.com/todos",{
      method: "GET"
    })
    if(response.ok){
      const data = await response.json()
      console.log({data})
      setAllData(data)
      setLoading(false)
    }
  }

  useEffect(()=>{
    getAlltodoData()
  },[])

  console.log(allData)

  return (
    <div>
      
      AllTodosList of ToDos
      {loading ? <p>Loading...</p> : ""}
      <ul>
      <ul 
      style = {{
        listStyleType:"none",
        margin:"0px auto",
        padding:"0 auto",
        background:"#343b31",
        position:"relative"
        }}
        >
        {allData.map((item) => (<li
        style={{gap:"10px" ,padding:"20px" }}
        key={item.id} id={item.id} title={item.title} >
          <span 
          style={{margin:"0px", padding:"3px",color:item.completed? "white" : "white" }}
           > 
          {item.id}
          </span>
          <span 
          className='title'
          style={{
            margin:"10px", 
            padding:"3px",
            backgroundColor:'grey',
            borderRadius:"9px",
            color:item.completed? "white" : "white"
           }} 
          > 
          {item.title} 
          </span> 
          <span 
          style={{
            marginLeft:"10px", 
            padding:"3px",position:"reletive",
            right:"20px",borderRadius:"9px",
            backgroundColor:item.completed ? "#a3a956" : "red" ,
            color:item.completed? "white" : "white" }} 
            >        
              {item.completed ? "Completed" : "Pending"}
              </span>
              </li>
        ))}
      </ul>
      </ul>

    </div>
  )
}

export default AllTodos

// {/* <Navbar /> */}  removed <navbar/>  rootlayout  provide navbar
