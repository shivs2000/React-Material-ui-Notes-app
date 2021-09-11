import React, { useEffect, useState } from 'react';
import {

    Grid,
    Paper,
    Container

} from '@material-ui/core';
import NotesCard from '../components/NotesCard';

function Notes(props) {
    const [notes,Setnotes]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/notes')
        .then(res=>res.json())
        .then(data=>Setnotes(data));

    },[])
    const handleDelete=async (id)=>{
       await fetch('http://localhost:8000/notes/'+id,{
           method:'DELETE'
       })
       const newNotes=notes.filter(note=>note.id !==id);
       Setnotes(newNotes);



    }
    return (
            <Container>
            <Grid container spacing={3}>
            {notes.map(v=>(
                <Grid  item  key={v.id}  xs={12} sm={6} md={3}>
                <NotesCard note={v} handleDelete={handleDelete}/>
                {/* <Paper>
                {v.title}::::{v.details}
                </Paper> */}
                </Grid>

            ))}
            </Grid>
            </Container>
        
    );
}

export default Notes;