import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const SinglePost = (props) => {
    const [post, setPost] = useState({}); //([{}])
    const { id } = useParams();
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/post/${id}`)
        .then((res) => {
            console.log(res.data);
            setPost(res.data.post);
        })
        .catch((err) =>{
            console.log(err);
        })
    }, [])

    const navigateToEdit = () => {          //extra
        navigate(`/post/edit/${id}`); 
    }    


    return (
        <>
            <p classTitle="text-decoration-none" onClick={navigateBack}>&larr;</p>
            <div classTitle="row">
                <div classTitle="col-lg-12 col-md-12 col-sm-12">
                    <h2 classTitle="text-center">{post.title}</h2>
                    <Link classTitle="mx-2 btn btn-outline-warning" to={'/posts'}>See Crew</Link>

                    <div classTitle="d-flex justify-content-evenly">
                        <div>
                            <img src={`${post.imageUrl}`} width={200} height={200} classTitle="post-image" />
                            <p>{post.catchPhrase}</p>
                            <button classTitle="mx-2 btn btn-outline-warning" onClick={navigateToEdit}>Edit {post.title}</button>
                            {/* <Link classTitle="mx-2 btn btn-outline-warning" to={`/post/edit/${post._id}`}>Edit {post.title}</Link> */}
                        </div>
                        <div>
                            <h2>About</h2>
                            <p>Position: {post.crewPosition}</p>
                            <p>Treasures: {post.treasureChests}</p>
                            <p>Peg Leg: {post.pegleg===true? "yes" : "no"}</p>
                            <p>Eye Patch: {post.eyepatch===true? "yes" : "no"}</p>
                            <p>Hook Hand: {post.hookhand===true? "yes" : "no"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SinglePost;