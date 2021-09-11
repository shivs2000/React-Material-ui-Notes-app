import React, { useEffect, useState } from 'react';

function Notes(props) {
    const [notes,Setnotes]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/notes')
        .then(res=>res.json())
        .then(data=>Setnotes(data));

    },[])
    return (
        <div>
            Notes
            {notes.map(v=>(
                <div key={v.id}>
                {v.title}::::{v.details}
                </div>

            ))}
        </div>
    );
}

export default Notes;