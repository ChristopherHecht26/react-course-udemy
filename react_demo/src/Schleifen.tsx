import React from 'react';

 export function JsxLoop() {
    return(
        <ul>
            { [1,2,3]
                .map((eachElement, index) => {
                    const content = 100 + eachElement;
                    return <Entry key={index} index={content} />;
                })
            }
        
        </ul>
    );
};

interface EntryProps {
    index?: number
};

function Entry(props: EntryProps) {
    return <li>{props.index}</li>;
};

export default JsxLoop;