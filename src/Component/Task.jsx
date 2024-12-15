import React from 'react'
import { MdDelete } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdDoneOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import './Task.css';




function Task(props) {
  console.log(props);
  const navigate = useNavigate();

  const openDetailPage = () => {
    navigate(`/todo/${props.index}`)
  }

  console.log(props)
  return (
    <div

    
     style={{
      display: 'inline-flex',
      gap: '20px',
      alignItems: 'center', margin: '0px auto'
      , padding: '3px 0px 0px 20px'
    }}
    >
      <div 
      // style={{
      //   background: "pink",
      //   borderRadius: "9px",
      //   border: "none", padding: '10px',
      //   width: '250px', marginLeft: '0px'
      // }}
      className='main'
      >



        <h5 
         className = {`${props.completed ? " completed " : "nonecompleted" }`}
        // style={{ "textDecoration": props.completed ? "line-through" : "none" }}
        >{props.task} </h5><br />   



        <button onClick={() => { props.DeleteNoteHder(props.index) }}
        className='button'
          // style={{
          //   backgroundColor: 'grey',
          //   color: 'white', float: 'right',
          //   border: 'none', padding: '9px',
          //   borderRadius: '9px', marginLeft: '9px'
          // }}
          >
          <MdDelete /></button>


        {/* <Link to={`/todo/${props.index}`}> */}
        <button
                className='button'

          onClick={openDetailPage}
          // style={{
          //   backgroundColor: 'grey',
          //   color: 'white', float: 'right',
          //   border: 'none', padding: '9px',
          //   borderRadius: '9px', marginLeft: '9px'
          // }}
          >
          <AiOutlineArrowRight />
        </button>
        {/* </Link> */}



        <button onClick={()=>{props.editehandler(props.index)}}         className='button'

        // style={{
        //   backgroundColor: 'grey',
        //   color: 'white', float: 'right',
        //   border: 'none', padding: '9px',
        //   borderRadius: '9px', marginLeft: '9px'
        // }}
        >
          <CiEdit />
        </button>
        <button         className='button'
           onClick={() => props.completeHandler(props.index)}
          // style={{
          //   backgroundColor: 'grey',
          //   color: 'white', float: 'right',
          //   border: 'none', padding: '9px', borderRadius: '9px', marginLeft: '9px'
          // }}
          >
          <MdDoneOutline />
        </button>
      </div>

    </div>
  )
}

export default Task



// - {props.completed && props.completed.toString()}


// style={{"textDecoration":props.completed? "linethrough" :"none"}}