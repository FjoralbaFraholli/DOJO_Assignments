import React, {useState} from "react";

const ToDo = (props) => {

    const [text, setText] = useState("");
    const [status, setStatus] = useState(false);
    const [error, setError] = useState("");
    const {toDo, setToDo} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.length < 2){
            setError("Text must be longer than 2 characters.")
        }
        else{
            setToDo([...toDo, {text: text, status: status}]);
            setError("");
            setText("");
            id: Math.floor(Math.random()*10000).toString()
        }
    }




    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="What do you want to do?" onChange={(e) => setText(e.target.value)} />
                {error ? <p>{error}</p> : null}
                <button>Add Task</button>
            </form>
        </>
    )
}

export default ToDo;