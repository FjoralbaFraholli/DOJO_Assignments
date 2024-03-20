import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const EditPirate = (props) => {
    const navigate = useNavigate();

    const [pirate, setPirate] = useState({});


    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [treasureChests, setTreasureChests] = useState(0);
    const [catchPhrase, setCatchPhrase] = useState("");
    const [crewPosition, setCrewPosition] = useState("Sailor");
    const [pegleg, setPegleg] = useState(true); 
    const [eyepatch, setEyepatch] = useState(true); 
    const [hookhand, setHookhand] = useState(true); 

    const [errorMessage, setErrorMessage] = useState("");

    const { id } = useParams();

    const navigateBack = () => {
        navigate(-1);
    }


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.pirate.name);
                if (res.data.pirate.imageUrl.length > 1) {
                    setImageUrl(res.data.pirate.imageUrl)
                }
                else {
                    setImageUrl('')
                }
                setTreasureChests(res.data.pirate.treasureChests);
                setCatchPhrase(res.data.pirate.catchPhrase);
                setCrewPosition(res.data.pirate.crewPosition);
                setPegleg(res.data.pirate.pegleg);
                setEyepatch(res.data.pirate.eyepatch);
                setHookhand(res.data.pirate.hookhand);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    const updatePost = (e) => {
        e.preventDefault();
        if (name.length < 5 || name.length > 30 || imageUrl.length < 1 || catchPhrase.length < 5) {
            setErrorMessage('Your form has some unsolved issues!')
        }
        else {
            axios.put(`http://localhost:8000/api/pirate/${id}`, {
                name,
                imageUrl,
                treasureChests,
                catchPhrase,
                crewPosition,
                pegleg,
                eyepatch,
                hookhand
            })
                .then(res => {
                    navigate('/');
                    console.log('New Pirate:', res.data);
                })
                .catch(err => {
                    setErrorMessage("Your api has some problems!");
                    console.log(err)})
        }
    }


    return (
        <div className="px-3">
            <p className="text-decoration-none" onClick={navigateBack}> &larr; </p>
            <h1 className="text-center p-2">Update {pirate.name}</h1>
            <Link className="mx-2 btn btn-outline-warning" to={`/pirate/${pirate._id}`}>See Details</Link>
            {
                errorMessage ?
                    <p className="text-danger text-center">{errorMessage}</p> :
                    null
            }

            <form className="w-75 m-auto" onSubmit={(e) => updatePost(e)}>
                <div>
                    <label className="form-label">Pirate Name:</label>
                    <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="pirate name" />
                </div>
                {
                    name.length < 5 && name.length > 30 ?
                        <p className="text-danger">Pirate Name is required and must be between 5-30 characters long</p> :
                        null
                }
                <div>
                    <label className="form-label">Image Url:</label>
                    <input className="form-control" type="text" value={`${pirate.imageUrl}`} onChange={(e) => setImageUrl(e.target.value)} placeholder="Here should be the image" />
                </div>
                {
                    imageUrl.length < 1 ?
                        <p className="text-danger">The image url is required</p> :
                        null
                }
                <div>
                    <label className="form-label"># of Treasure Chests:</label>
                    <input className="form-control" type="number" value={treasureChests} step={1} onChange={(e) => setTreasureChests(e.target.value)} />
                </div>
                <div>
                    <label className="form-label">Pirate Catch Phrase:</label>
                    <input className="form-control" type="text" value={catchPhrase} onChange={(e) => setCatchPhrase(e.target.value)} placeholder="Enter the catch phrase" />
                </div>
                {
                    catchPhrase.length < 5 ?
                        <p className="text-danger">Catch Phrase is required and must be at least 5 characters</p> :
                        null
                }
                <div>
                    <label className="form-label">Crew Position:</label>
                    <select value={crewPosition} onChange={(e) => setCrewPosition(e.target.value)}>
                        <option value="Sailor">Sailor</option>
                        <option value="Captain">Captain</option>
                        <option value="Firstmate">Firstmate</option>
                    </select>
                </div>
                <div>
                    <label className="form-label">Peg Leg</label>
                    <input type="checkbox" checked={pegleg} onChange={(e) => setEyepatch(!pegleg)} />
                </div>
                <div>
                    <label className="form-label">Eye Patch</label>
                    <input type="checkbox" checked={eyepatch} onChange={(e) => setEyepatch(!eyepatch)} />
                </div>
                <div>
                    <label className="form-label">Hook Hand</label>
                    <input  type="checkbox" checked={hookhand} onChange={(e) => setEyepatch(!hookhand)} />
                </div>

                <button className="btn btn-outline-primary customColor mt-2">Edit Pirate</button>

            </form>
        </div>
    )
}

export default EditPirate;