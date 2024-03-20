import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePost = (props) => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [treasureChests, setTreasureChests] = useState(0);
    const [catchPhrase, setCatchPhrase] = useState("");
    const [crewPosition, setCrewPosition] = useState("Sailor");
    const [pegleg, setPegleg] = useState(true); 
    const [eyepatch, setEyepatch] = useState(true); 
    const [hookhand, setHookhand] = useState(true); 
    
    const [errorMessage, setErrorMessage] = useState("");

    const navigateBack = () => {
        navigate(-1);
    }

    const createPost = (e) => {
        e.preventDefault();
        if(title.length<5 || title.length>30 || imageUrl.length<1 || catchPhrase.length<5){
            setErrorMessage('Your form has some unsolved issues!')
        }
        else{
            axios.post("http://localhost:8000/api/post/", {
                title,
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
                console.log('New Post:', res.data);
            })            
            .catch(err =>{
                setErrorMessage("Your api has some problems!");
                console.log(err)})
        }
    }

    return(
        <div classTitle="px-3">
            <p classTitle="text-decoration-none" onClick={navigateBack}> &larr; </p>
            <h1 classTitle="text-center p-2">New Post</h1>
            <Link classTitle="mx-2 btn btn-outline-warning" to={'/posts'}>See Crew</Link>

            {
                errorMessage?
                <p classTitle="text-danger text-center">{errorMessage}</p>:
                null
            }

            <form classTitle="w-75 m-auto" onSubmit={(e) => createPost(e)}>
                <div>
                    <label classTitle="form-label">Post Title:</label>
                    <input classTitle="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter the title" />
                </div>
                {
                    title.length<5 || title.length>30?
                    <p classTitle="text-danger">Post Title is required and must be between 5-30 characters long</p>:
                    null
                }
                <div>
                    <label classTitle="form-label">Image Url:</label>
                    <input classTitle="form-control" type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Enter the image url" />
                </div>
                {
                    imageUrl.length<1?
                    <p classTitle="text-danger">The image url is required</p>:
                    null
                }
                <div>
                    <label classTitle="form-label"># of Treasure Chests:</label>
                    <input classTitle="form-control" type="number" value={treasureChests} step={1} onChange={(e)=>setTreasureChests(e.target.value)} />
                </div>
                <div>
                    <label classTitle="form-label">Post Catch Phrase:</label>
                    <input classTitle="form-control" type="text" value={catchPhrase} onChange={(e) => setCatchPhrase(e.target.value)} placeholder="Enter the catch phrase" />
                </div>
                {
                    catchPhrase.length<5?
                    <p classTitle="text-danger">Catch Phrase is required and must be at least 5 characters</p>:
                    null
                }
                <div>
                    <label classTitle="form-label">Crew Position:</label>
                    <select value={crewPosition} onChange={(e)=>setCrewPosition(e.target.value)}>
                        <option value="Sailor">Sailor</option>
                        <option value="Captain">Captain</option>
                        <option value="Firstmate">Firstmate</option>
                    </select>
                </div>
                <div>
                    <label classTitle="form-label">Peg Leg</label>
                    <input type="checkbox" checked={pegleg} onChange={(e) => setPegleg(!pegleg)} />
                </div>
                <div>
                    <label classTitle="form-label">Eye Patch</label>
                    <input type="checkbox" checked={eyepatch} onChange={(e) => setEyepatch(!eyepatch)} />
                </div>
                <div>
                    <label classTitle="form-label">Hook Hand</label>
                    <input type="checkbox" checked={hookhand} onChange={(e) => setHookhand(!hookhand)} />
                </div>

                <button classTitle="btn btn-outline-primary customColor mt-2">Create Post</button>

            </form>

            <Link classTitle="mx-2 btn btn-outline-warning" to={'/posts'}>See Crew</Link>

        </div>
    )
}

export default CreatePost;