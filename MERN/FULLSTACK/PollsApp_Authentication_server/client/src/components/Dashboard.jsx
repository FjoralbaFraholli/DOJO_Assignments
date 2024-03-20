import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Loader } from "@googlemaps/js-api-loader"

const Dashboard = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/posts")
            .then((res) => {
                console.log(res.data);
                setPosts(res.data.posts);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [])


    const deletePost = (id) => {
        axios.delete(`http://localhost:8000/api/post/${id}`)
            .then((res) => {
                console.log(res);
                setPosts((prevPosts) => prevPosts.filter(post => post._id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const loader = new Loader({
        apiKey: "YOUR_API_KEY",
        version: "weekly",
        ...additionalOptions,
      });
      
      loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps");
      
        map = new Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      });


    return (
        <>
            <nav className="d-flex justify-content-end">
                <h1>Post Crew</h1>
                <Link className="btn btn-outline-primary customColor" to={'/post/create'}>Add Post</Link>
            </nav>

            <div className="row">
                <div className="col-lg-24">
                    {
                        posts.length > 0 ?
                            posts.map((post, index) => {
                                return (
                                    <div key={index} className="card d-flex justify-content-evenly">
                                        <div>
                                            <img src={`${post.imageUrl}`} className="card-img-top customImageWidth" width={50} height={100} alt="This should be the image" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{post.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted"></h6>
                                            <Link className="mx-2 btn btn-outline-warning" to={`/post/${post._id}`}>View Post</Link>
                                            <button className="mx-2 btn btn-outline-danger" onClick={() => deletePost(post._id)}>Walk the Plank</button>
                                        </div>

                                    </div>
                                )
                            })
                            :
                            <div className="w-100">
                                <div className="card text-center w-100">
                                    <div className="card-header">
                                        There are no posts yet!
                                    </div>
                                    <div className="card-body">
                                        <Link to={'/post/create'}>Create a new post!</Link>
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