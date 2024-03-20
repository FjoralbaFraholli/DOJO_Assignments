import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const SinglePirate = (props) => {
    const [pirate, setPirate] = useState({}); //([{}])
    const { id } = useParams();
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
        .then((res) => {
            console.log(res.data);
            setPirate(res.data.pirate);
        })
        .catch((err) =>{
            console.log(err);
        })
    }, [])

    const navigateToEdit = () => {          //extra
        navigate(`/pirate/edit/${id}`); 
    }    


    return (
        <>
            <p className="text-decoration-none" onClick={navigateBack}>&larr;</p>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h2 className="text-center">{pirate.name}</h2>
                    <Link className="mx-2 btn btn-outline-warning" to={'/pirates'}>See Crew</Link>

                    <div className="d-flex justify-content-evenly">
                        <div>
                            <img src={`${pirate.imageUrl}`} width={200} height={200} className="pirate-image" />
                            <p>{pirate.catchPhrase}</p>
                            <button className="mx-2 btn btn-outline-warning" onClick={navigateToEdit}>Edit {pirate.name}</button>
                            {/* <Link className="mx-2 btn btn-outline-warning" to={`/post/edit/${post._id}`}>Edit {pirate.name}</Link> */}
                        </div>
                        <div>
                            <h2>About</h2>
                            <p>Position: {pirate.crewPosition}</p>
                            <p>Treasures: {pirate.treasureChests}</p>
                            <p>Peg Leg: {pirate.pegleg===true? "yes" : "no"}</p>
                            <p>Eye Patch: {pirate.eyepatch===true? "yes" : "no"}</p>
                            <p>Hook Hand: {pirate.hookhand===true? "yes" : "no"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SinglePirate;