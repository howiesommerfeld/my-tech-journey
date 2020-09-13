import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";

function Experiences() {
    const [list, setList] = useState([])
    let {experienceId} = useParams();

    const getList = () => {
        fetch('/api/getList')
        .then(res => res.json())
        .then(list => setList(list));
    }

    useEffect(()=>{
        getList();
        console.log("Experience ID", experienceId)
    })

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <div className="App">
        {experienceId === "" ? <h1>List of Experiences</h1> : <h1>List of Experiences at {capitalizeFirstLetter(experienceId)}</h1>}
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
            {experienceId === "" ? <h2>No Experiences Found</h2> : <h2>No Experiences Found at {capitalizeFirstLetter(experienceId)}</h2>}
            </div>
        )
        }
        </div>
    );
}

export default Experiences;