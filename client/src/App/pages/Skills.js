import React, { useState, useEffect } from 'react';

function Skills() {
    const [list, setList] = useState([])

    const getList = () => {
        fetch('/api/getList')
        .then(res => res.json())
        .then(list => setList(list));
    }

    useEffect(()=>{
        getList();
    },[])

    return (
        <div className="App">
        <h1>List of Skills</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
            <div>
            {/* Render the list of items */}
            {list.map((item) => {
                return(
                <div>
                    {item}
                </div>
                );
            })}
            </div>
        ) : (
            <div>
            <h2>No Skills Found</h2>
            </div>
        )
        }
        </div>
    );
}

export default Skills;