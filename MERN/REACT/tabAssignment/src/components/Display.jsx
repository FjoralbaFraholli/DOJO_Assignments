import React, {useState} from "react";

const Display = (props) => {

    const {tabs, tabIndex} = props;



    return(
        <>
        <p>{tabs[tabIndex].content}</p>
        </>
    );

}

export default Display;