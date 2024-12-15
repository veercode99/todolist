import React from 'react'
import { MdDelete } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdDoneOutline } from "react-icons/md";





function Task(props) {
  console.log(props);
  return (
    <div style={{
      display: 'inline-flex',
      gap: '20px',
      alignItems: 'center', margin: '3px 0px 0px 20px', padding: '3px 0px 0px 20px'
    }}>
      <div style={{ background: "pink", borderRadius: "9px", border: "none", padding: '10px', width: '250px', marginLeft: '0px' }}>
        <h5 >{props.task} </h5><br />
        <button onClick={() => { props.DeleteNoteHder(props.index) }}
          style={{ backgroundColor: 'grey', color: 'white', float: 'right', border: 'none', padding: '9px', borderRadius: '9px', marginLeft: '9px' }}>
          <MdDelete /></button>
        <button
          style={{ backgroundColor: 'grey', color: 'white', float: 'right', border: 'none', padding: '9px', borderRadius: '9px', marginLeft: '9px' }}>
          <AiOutlineArrowRight />
        </button>
        <button style={{
          backgroundColor: 'grey', color: 'white', float: 'right',
          border: 'none', padding: '9px', borderRadius: '9px', marginLeft: '9px'
        }}>
          <CiEdit />
        </button>
        <button onClick={() => props.completeHandler(props.index)}
          style={{ backgroundColor: 'grey', color: 'white', float: 'right', border: 'none', padding: '9px', borderRadius: '9px', marginLeft: '9px' }}>
          <MdDoneOutline />
        </button>
      </div>

    </div>
  )
}

export default Task
// - {props.completed && props.completed.toString()}


// style={{"textDecoration":props.completed? "linethrough" :"none"}}