import React from "react";

const Display = (props) => {


    const {box} = props;


    return(
        <>
            
            {box.map((newbox, index) => (
            
                <div key={index} style={{

                    width: "100px",
                    height: "100px",
                    margin: "15px",
                    display: "inline-block",
                    backgroundColor: newbox,
                }}>
                    
                </div>
            
            )
            )
            }
        
        </>
    )
}

export default Display;