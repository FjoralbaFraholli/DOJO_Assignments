import React from "react";

const Person = (props) => {

    return(
        <>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </>
    )

}
export default Person