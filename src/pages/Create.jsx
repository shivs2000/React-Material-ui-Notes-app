import React, { useState } from 'react';
import {
    Button,
    Container,
    makeStyles,
    RadioGroup,
    TextField,
    Typography,
    FormControlLabel,
    Radio,
    FormControl,
    FormLabel,

} from '@material-ui/core';



import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import { useHistory } from 'react-router-dom';
const useStyles=makeStyles({
    field:{
    
        marginBottom:20,
        marginTop:20,
    }
    
    
    })
function Create(props) {

    const [title,SetTitle]=useState(null);
    const [details,SetDetails]=useState(null);
    const [category,SetCategory]=useState('todos');
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(title && details &&category){
            fetch('http://localhost:8000/notes',{
             method:'POST',
             headers:{"Content-Type":"application/json"},
             body:JSON.stringify({title,details,category})


            })
            .then(()=>{
                 history.push('/');
            })
        }
    }
    const classes=useStyles();
    return (
        <Container>
            <Typography
               variant="h3"
               
              gutterBottom={true}
               color="textSecondary"
               
            >
            Create A New Note
            </Typography>
            <form  autoComplete="off" onSubmit={handleSubmit}>
            <TextField  
            onChange={(e)=>SetTitle(e.target.value)}
            fullWidth
             variant='outlined'
             label='Note Title'
             required
             className={classes.field}
            />
            <TextField  
            onChange={(e)=>SetDetails(e.target.value)}
            fullWidth
             variant='outlined'
             label='Details'
             required
             className={classes.field}
             multiline
             rows={4}
            />
            <FormControl className={classes.field}>
            <FormLabel> Notes Category</FormLabel>
           <RadioGroup value={category} onChange={(e)=>SetCategory(e.target.value)}>
              <FormControlLabel  value="todos" control={<Radio/>} label="Todos"/>
              <FormControlLabel  value="Work" control={<Radio/>} label="Work"/>
              <FormControlLabel  value="Money" control={<Radio/>} label="Money"/>
              <FormControlLabel  value="Reminders" control={<Radio/>} label="Reminders"/>
              
           </RadioGroup>
           <Button 
            type="submit"
            variant= "contained"
            disableElevation
            color="secondary"
            endIcon={<KeyboardArrowRightOutlinedIcon/>}
            >
            Submit
            </Button>
           </FormControl>
            
            


            </form>
            
            </Container>
    );
}

export default Create;