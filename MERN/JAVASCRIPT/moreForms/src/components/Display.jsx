import React, {useState} from "react";
import Form from "./Form";

const Display = (props) => {

    const {personList} = props;

    return (
        <>
            <h2>Your Form Data</h2>

            <div>
                <ul>
                    {
                        personList.map( (person, index) => (
                            <div key={index}>
                                <li>First Name: {person.firstname}</li>
                                <li>Last Name: {person.lastname}</li>
                                <li>Email: {person.email}</li>
                                <li>Password: {person.password}</li>
                                <li>Confirm Password: {person.confirmpassw}</li>
                            </div>
                        )
                        )
                    }
                </ul>
            </div>
        </>
    );

}


export default Display;