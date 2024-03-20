import React, {useState} from "react";

const Tab = (props) => {

    const {tabs, tabIndex, setTabIndex} = props;

    return(
        <>
           
            <div style={{display: "flex", justifyContent: "space-evenly", padding: "10px", width: "100%"}}>
            {
                tabs.map( (tab, index) => 
                    <p onClick={(e) => setTabIndex(index)} key={ index }>{ tab.title }</p>
                )
            }
            </div>
       
        </>
    );

}

export default Tab;