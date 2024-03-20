import React, { useState } from "react";

const Boxes = (props) => {

const {box, setBox} = props;

const [color, setCOlor] = useState("");

const CreateBox = (e) => {
    e.preventDefault();
    setBox([...box, color]);
}

    return(
        <>
            <form action="" onSubmit={CreateBox}>
                <label htmlFor="">Color</label>
                <input type="text" name="" id="" onChange={(e) => setCOlor(e.target.value)}/>
                <button>Add</button>



            </form>
        </>
    )
}

export default Boxes;