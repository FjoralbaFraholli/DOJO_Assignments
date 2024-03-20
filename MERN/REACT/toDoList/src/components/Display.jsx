import React, {useState} from "react";

const Display = (props) => {

    const {toDo, setToDo} = props;

    const changeStatus = (task) => {
        toDo.map((tasku)=>{
            if(tasku != task){
                return tasku;
            }
            else {
                let updatedTask = {...tasku}
                updatedTask = updatedTask.status
                return updatedTask;
            }})
    }

    const deleteTask = (ifFromBelow) => {
        setToDo(toDo.filter((task, index) => task.id !== idFromBelow));
    }

    return(
        <>
            {
                toDo.map((task, index) =>
                <div key={index}>
                    {task.status === true ?
                    <p style={{color: "green"}}>{task.text}</p> : 
                    <p style={{color: "red"}}>{task.text}</p>
                    }
                    {task.status === true ? <input type="checkbox" checked onClick={() => changeStatus(task)} />
                    : <input type="checkbox" onClick={() => changeStatus(task)} /> }
                </div>
                )
            }
        </>
    )
}

export default Display;