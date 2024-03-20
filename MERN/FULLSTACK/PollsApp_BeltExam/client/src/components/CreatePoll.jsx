import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import axios from 'axios';

const CreatePoll = (props) => {

    const navigate = useNavigate();

    cosnt [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigateBack = () => {
        navigate(-1);
    }

    const createPoll = (e) => {
        e.preventDefault();
        if(question.length<10 || option1.length<1 || option2.length<1){
            setErrorMessage('Your form has some unsolved issues!')
        }
        else{
            axios.post("http://localhost:8000/api/poll/", {
                question,
                option1,
                option2,
                option3,
                option4
            })
            .then(res =>{
                navigate('/')
            })
            .catch(err =>{
                setErrorMessage("Your api has some problems!");
                console.log(err)})
        }
    }

    return(
        <div className="px-3">
            <p className="text-decoration-none" onClick={navigateBack}> &larr; </p>
            <h1 className="text-center p-2">Create a Poll</h1>
            {
                errorMessage?
                <p className="text-danger text-center">{errorMessage}</p>:
                null
            }

            <form className="w-75 m-auto" onSubmit={(e) => createPoll(e)}>
                <div>
                    <label className="form-label">Question:</label>
                    <input className="form-control" type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Enter the question" />
                </div>
                {
                    question.length>0 && question.length<10?
                    <p className="text-danger">The question must be at least 10 characters</p>:
                    null
                }
                <div>
                    <label className="form-label">Option 1:</label>
                    <input className="form-control" type="text" value={option1} onChange={(e) => setOption1(e.target.value)} placeholder="Enter the first option" />
                </div>
                {
                    option1.length<1?
                    <p className="text-danger">The first option is required</p>:
                    null
                }
                <div>
                    <label className="form-label">Option 2:</label>
                    <input className="form-control" type="text" value={option2} onChange={(e) => setOption2(e.target.value)} placeholder="Enter the second option" />
                </div>
                {
                    option2.length<1?
                    <p className="text-danger">The second option is required</p>:
                    null
                }
                <div>
                    <label className="form-label">Option 3:</label>
                    <input className="form-control" type="text" value={option3} onChange={(e) => setOption3(e.target.value)} placeholder="Enter the third option" />
                </div>

                <div>
                    <label className="form-label">Option 4:</label>
                    <input className="form-control" type="text" value={option4} onChange={(e) => setOption4(e.target.value)} placeholder="Enter the fourth option" />
                </div>

                <button className="btn btn-outline-primary customColor mt-2">Create Poll</button>
            </form>
        </div>
    )
}

export default CreatePoll;