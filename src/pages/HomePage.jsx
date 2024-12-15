import React, {useContext, useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import Logoutpage from '../Component/Logoutpage'
import Task from '../Component/Task';
import { ModeContext } from '../context/mode-context';
import './Homepage.css'

const HomePage = () => {

  const [notetask, setNotetask] = useState(JSON.parse(localStorage.getItem("note")) || []);

  console.log(notetask)
  // const [mode, setmode] = useState('light')
  const [isEdit, setIsEdit] = useState(false)
  const [editData, setEditData] = useState({})

  // const togglemode = () => {
  //   if (mode === 'light') {
  //     setmode('dark');
  //   }
  //   else {
  //     setmode('light')
  //   }
  // }

  const gettask = (data) => {
    console.log(data)
    setNotetask([...notetask, data])

  }

  const getupdateddata = (updateddata) => {
    setNotetask([...updateddata])
  }
  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(notetask))
  }, [notetask]);
  const DeleteNoteHder = (index) => {

    const filteredTasks = notetask.filter((item, i) => index !== i);
    console.log(filteredTasks, index)
    setNotetask(filteredTasks);
  };

  console.log({ notetask })



  const completeHandler = (index) => {
    console.log(index)

    const completedTask = notetask.map((item, i) => {
      if (i === index) {
        console.log(item.completed)
        return { ...item, completed: !item.completed }
      }
      return item
    })
    console.log({ completedTask })
    setNotetask(completedTask)
  }

  const editehandler = (index) => {
    setIsEdit(true)
    const filteredit = notetask.filter((item, i) => index === i);
    console.log(filteredit);
    setEditData({ ...filteredit[0], index: index })
    //..store in new state
  }

  const {mode, togglefunction} = useContext(ModeContext) 

  console.log(notetask, editData)
  return (
    <div  className={`${mode === "light" ? "light-outpage" : "dark-outpage"}`}>
      {/* <Loginpage/> */}
      {/* <Navbar 
       togglefunction={togglefunction} mode={mode}
      /> */}
      <div     

      className={`${mode === "light" ? "light-page" : "dark-page"}`}
      >

        <Logoutpage
          // getupdateddata={getupdateddata}
          gettask       ={gettask}
          isEdit        ={isEdit}
          setIsEdit     ={setIsEdit}
          title         ={editData}
          // pass edit data title 
          togglefunction    ={togglefunction}
          notetask      ={notetask}
          setNotetask   ={setNotetask}
          mode          ={mode}
          className="logoutpagetag"
          style={{
            backgroundColor: mode === 'light' ? 'black' : "white",
            color: mode === 'light' ? "white" : "black",
            marginTop: "20px",
            textAlign: "left",
          }} />
        {notetask.length === 0 ?
          <div    className="tasktagmap" style={{ textAlign: 'center' }}  > "no added task" </div> : notetask.map
            ((item, index) => (<Task key={index} index={index} task={item.task}
              editehandler={editehandler}
              // DeleteNoteHder={DeleteNoteHder}
              completeHandler={completeHandler}
              completed={item.completed} // mapping of completed 
            />))}
      </div>
    </div>
  )
}

export default HomePage


// useeffect usenavigat useparam

// function sum(a,b){

// }