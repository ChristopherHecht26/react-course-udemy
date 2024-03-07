import React from "react";

export function Event() {
        const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                count: number) => {
            console.log("clicked: " + count);
        };

        return(<>
            {
                [1,2,3,4,5,6].map(each => {
                    return <button onClick={(event) => handleClick(event,each)} >
                        Click {each}
                    </button>
                })
            }
        </>);
        
};

export default Event;