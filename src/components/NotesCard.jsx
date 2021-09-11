import 
{    Card,
     CardHeader,
     IconButton,
     Typography,
     CardContent,
     makeStyles,
     Avatar
 } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';
import {
yellow,
pink,
blue,
green

}from '@material-ui/core/colors'

const useStyles=makeStyles((theme,note)=>({
    avatar:{
        background:(note)=>{

        if(note.category==='work'){
           return yellow[500]

        }
        if(note.category==='reminders'){
            return pink[500];
            
        }
        if(note.category==='todos'){

            return green[500]; 
        }
        return blue[500];

        }
    }



}))
function NotesCard({note,handleDelete}) {

const classes=useStyles(note);



    return (
        <div>
            <Card elevation={4}>
                <CardHeader
                action={
                    <IconButton onClick={()=>handleDelete(note.id)}>
                      <DeleteOutlined/>
                    </IconButton>
                  }
                  avatar={

                    <Avatar className={classes.avatar}>
                      {note.category[0].toUpperCase()}
                    </Avatar>
                  }
                title={note.title}
                subheader={note.category}
                
                
                />
                <CardContent>
                    <Typography variant="body2">
                       {note.details}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
}

export default NotesCard;