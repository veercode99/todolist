import React, { useContext, useEffect, useState } from 'react'
import { ModeContext } from '../context/mode-context'
import  './Logoutpage.css'


function Logoutpage(props) {

    const [task, settask] = useState('');
    const {mode, togglefunction} = useContext(ModeContext)

     

    console.log(props)

    useEffect(()=>{
        if(props.isEdit){
            settask(props.title.task)
        }
    },[props.isEdit])


    const handletaskchange = (e) => settask(e.target.value);

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(task);

        if (task === "") {
            return;
        }
        const rtask = {
            task: task
        }
        props.gettask(rtask)
        settask('')
    };
    
    
    
        const updateTodo = (e) =>{
        e.preventDefault();
        console.log("edit function run");
        const index = props.notetask.findIndex((item,i) =>{
            return i === props.title.index
        })
        props.notetask[index] = {task: task}
        props.setNotetask(props.notetask)
        props.getupdateddata(props.notetask)
        console.log({index})
        settask('')
        props.setIsEdit(false) 
    }

    //  default add button when edit done  ===>  [{edit => add}]

    console.log(props.notetask)
    // console.log(props.notetask)
    return (
        <div  
        className={`container${mode === "light" ? "light-mode" : "dark-mode"}`}
         

         >

            <form 
            onSubmit={props.isEdit ? updateTodo :handlesubmit}
            togglefunction={togglefunction}
                // style={{
                //     backgroundColor: "grey",
                //     color: props.mode === 'light' ? "white" : "black",
                //     textAlign: 'center',
                //     alignItems: 'center',
                //     color: 'white'     }}


                className={`form ${mode === 'light' ? 'light-form-mode' : 'dark-form-'}`}

                >
                <h2>My Todos</h2>

                <div className="input-group"
                >
                    <input type='text' name='task' value={task}
                        placeholder='Enter your task...'

                        onChange={handletaskchange}
                         className={`input ${mode === 'light' ? 'light-input' : 'dark-input'}`}

                        // style={{
                        //     padding: '10px',
                        //     marginBottom: '10px',
                        //     borderRadius: '5px',
                        //     border: '1px solid #ccc',
                        //     width: '300px'

                        // }}
                    />
                    <button
                    className="btn"
                    //  style={{
                    //     padding: "10px 20px",
                    //     backgroundColor: "#ffd700",
                    //     color: "#000",
                    //     border: "none",
                    //     borderRadius: "5px",
                    //     fontSize: "16px",
                    //     cursor: "pointer"}}
                    > {props.isEdit === false ? "ADD" : "EDIT" } </button>
                </div>

            </form>

        </div>
    )
}

export default Logoutpage


//take main array to this page

// const arr = [1,2,3,4,6]
// arr[4] = 5
