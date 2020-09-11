import React, { useState, useEffect } from 'react';

function List() {
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
        <h1>List of Items</h1>
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
            <h2>No List Items Found</h2>
            </div>
        )
        }
        </div>
    );
}

export default List;