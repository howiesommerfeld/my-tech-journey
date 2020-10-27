import React, { useState, useEffect } from 'react';

function Info() {
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
        <h1>Contact Info & Downloads</h1>
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
            <h2>No Shout Outs Found</h2>
            </div>
        )
        }
        </div>
    );
}

export default Info;