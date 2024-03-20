import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const Dashboard = (props) => {

    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
        .then((res) => {
            console.log(res.data);
                setPirates(res.data.pirates);
        })
        .catch((err) =>{
            console.log(err);
        });

    }, [])


    const deletePirate = (id) => {
        axios.delete(`http://localhost:8000/api/pirate/${id}`)
          .then((res) => {
            console.log(res);
            setPirates((prevPirates) => prevPirates.filter(pirate => pirate._id !== id));
          })
          .catch((err) => {
            console.log(err);
          });
      }


    return(
        <>
            <nav className="d-flex justify-content-end">
                <h1>Pirate Crew</h1>
                <Link className="btn btn-outline-primary customColor" to={'/pirate/create'}>Add Pirate</Link>
            </nav>

            <div className="row">
                <div className="col-lg-24">
                {
                    pirates.length > 0 ?
                    pirates.map((pirate, index) => {
                        return (
                            <div key={index} className="card d-flex justify-content-evenly">
                                <div>
                                    <img src={`${pirate.imageUrl}`} className="card-img-top customImageWidth" width={50} height={100} alt="This should be the image" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{pirate.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted"></h6>
                                    <Link className="mx-2 btn btn-outline-warning" to={`/pirate/${pirate._id}`}>View Pirate</Link>
                                    <button className="mx-2 btn btn-outline-danger" onClick={() => deletePirate(pirate._id)}>Walk the Plank</button>
                                </div>
                                
                            </div>
                        )
                    })
                    :
                    <div className="w-100">
                        <div className="card text-center w-100">
                            <div className="card-header">
                                There are no pirates yet!
                            </div>
                            <div className="card-body">
                                <Link to={'/pirate/create'}>Create a new pirate!</Link>
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