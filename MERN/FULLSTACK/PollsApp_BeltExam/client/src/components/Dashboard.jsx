import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import moment from 'moment';
import axios from "axios";

const Dashboard = (props) => {

    const [polls, setPolls] = useState([]);
    const [top3, setTop3] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/polls")
        .then((res) => {
            console.log(res.data);
                setPolls(res.data.polls);
        })
        .catch((err) =>{
            console.log(err);
        })

        axios.get("http://localhost:8000/api/polls/top3")
        .then((res) => {
            console.log(res.data);
                setTop3(res.data.polls);
        })
        .catch((err) =>{
            console.log(err);
        })


    }, [])


    return(
        <>
            <nav className="d-flex justify-content-end">
                <Link className="btn btn-outline-primary customColor" to={'/poll/create'}>Create a new Poll</Link>
            </nav>

            <div className="row">
                <div className="col-lg-6">
                {
                    top3.length > 0 ?
                    top3.map((poll, index) => {
                        return (
                            <div key={index} className="card">
                                <div className="card-body">
                                    <Link className="card-title" to={`/poll/${poll._id}`}>{poll.question}</Link>
                                    <h6 className="card-subtitle mb-2 text-muted"></h6>
                                    <p className="card-text">{poll.option1}: {poll.option1Votes}</p>
                                    <p className="card-text">{poll.option2}: {poll.option2Votes}</p>
                                    {
                                       poll.option3 != ''? 
                                       <p className="card-text">{poll.option3}: {poll.option3Votes}</p>:
                                       null
                                    }
                                    {
                                       poll.option4 != ''? 
                                       <p className="card-text">{poll.option4}: {poll.option4Votes}</p>:
                                       null
                                    }
                                    <p>{moment(poll.createdAt).startOf().fromNow()} </p>
                                </div>
                            </div>
                        )
                    })
                    :
                    <div className="w-100">
                        <div className="card text-center w-100">
                            <div className="card-header">
                                There are no polls yet!
                            </div>
                            <div className="card-body">
                                <Link to={'/poll/create'}>Create a new poll</Link>
                            </div>
                        </div>
                    </div>
                }
                </div>
                <div className="col-lg-6">
                {
                    polls.length > 0 ?
                    polls.map((poll, index) => {
                        return (
                            <div key={index} className="card">
                                <div className="card-body">
                                    <Link className="card-title" to={`/poll/${poll._id}`}>{poll.question}</Link>
                                    <h6 className="card-subtitle mb-2 text-muted"></h6>
                                    <p className="card-text">{poll.option1}: {poll.option1Votes}</p>
                                    <p className="card-text">{poll.option2}: {poll.option2Votes}</p>
                                    {
                                       poll.option3 != ''? 
                                       <p className="card-text">{poll.option3}: {poll.option3Votes}</p>:
                                       null
                                    }
                                    {
                                       poll.option4 != ''? 
                                       <p className="card-text">{poll.option4}: {poll.option4Votes}</p>:
                                       null
                                    }
                                    <p>{moment(poll.createdAt).startOf().fromNow()} </p>
                                </div>
                            </div>
                        )
                    })
                    :
                    <div className="w-100">
                        <div className="card text-center w-100">
                            <div className="card-header">
                                There are no polls yet!
                            </div>
                            <div className="card-body">
                                <Link to={'/poll/create'}>Create a new poll</Link>
                            </div>
                        </div>
                    </div>
                }
                </div>
            </div>
        </>
    )

}

export default Dashboard;