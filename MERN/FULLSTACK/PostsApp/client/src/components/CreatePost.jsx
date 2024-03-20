import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import axios from 'axios';

const CreatePost = (props) => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigateBack = () => {
        navigate(-1);
    }

    const createPost = (e) => {
        e.preventDefault();
        if(title.length<2 || content.length<2 || imageUrl<1){
            setErrorMessage('Your form has some unsolved issues!')
        }
        else{
            axios.post("http://localhost:8000/api/post/", {
                title,
                content,
                imageUrl
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
            <h1 className="text-center p-2">Create a Post</h1>
            {
                errorMessage?
                <p className="text-danger text-center">{errorMessage}</p>:
                null
            }

            <form className="w-75 m-auto" onSubmit={(e) => createPost(e)}>
                <div>
                    <label className="form-label">Title:</label>
                    <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter the post title" />
                </div>
                {
                    title.length>0 && title.length<3?
                    <p className="text-danger">The title should be 3 characters or more</p>:
                    null
                }
                <div>
                    <label className="form-label">Content:</label>
                    <input className="form-control" type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter the post content" />
                </div>
                {
                    content.length>0 && content.length<3?
                    <p className="text-danger">The content should be 3 characters or more</p>:
                    null
                }
                <div>
                    <label className="form-label">Image Url:</label>
                    <input className="form-control" type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Enter the image url" />
                </div>
                {
                    imageUrl.length<1?
                    <p className="text-danger">The image url is required</p>:
                    null
                }

                <button className="btn btn-outline-primary customColor mt-2">Create Post</button>
            </form>
        </div>
    )
}

export default CreatePost;