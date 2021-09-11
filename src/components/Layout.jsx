import {
     makeStyles,
     Drawer,
     Typography,
     List,
     ListItem,
     ListItemIcon,
     ListItemText,
     AppBar,
     Toolbar,
     Avatar,



} from '@material-ui/core';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import React from 'react';
import { useHistory,useLocation } from 'react-router-dom';
import { format } from 'date-fns';
const useStyles=makeStyles((theme)=>({
   page:{
     background:'#f9f9f9',
     width:'100%',
     marginTop:20
   },
   drawer:{
       width:240
   },
   drawerPaper:{
    width:240
},
root:{
    display:'flex'
},
active:{
    background:'#f4f4f4'
},
title:{
    padding:theme.spacing(2)
},
appbar:{
    width:'calc(100% - 240px)',
    background:'#ed2fc1'
},
toolbarHeight:theme.mixins.toolbar,
date:{
    flexGrow:1
},
avatar:{
    marginLeft:theme.spacing(2)
}

}))
function Layout({children}) {
    const classes=useStyles();
    const history=useHistory();
    const location=useLocation();


    const menuItem=[
     {
         text:'mynotes',
         icon:<SubjectOutlined color="secondary"/>,
         path:'/'
     },
     {
        text:'Createnotes',
        icon:<AddCircleOutlined color="secondary"/>,
        path:'/create'
    },
    

    ];
    return (
        <div className={classes.root}>
            {/* APP BAR */}
             <AppBar className={classes.appbar}>
                 <Toolbar >
                     <Typography className={classes.date}>
                         {format(new Date(), 'do MMMM Y')}
                     </Typography>
                     <Typography>
                         Pikachu
                     </Typography>
                     <Avatar  src=" https://api.pexels.com/v1/photos/2345" className={classes.avatar}/>

                     
                 </Toolbar>


             </AppBar>



            {/* DRAWER */}
            <Drawer 
             className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{paper:classes.drawerPaper}}
            >
                <div className={classes.title}>
                    <Typography variant="h4">
                        NOTES APP
                    </Typography>
                </div>
                {/* LIST ITEMS */}
                <List>
                    {menuItem.map(item=>(

                        <ListItem   
                         button
                         onClick={()=>history.push(item.path)}
                         className={location.pathname===item.path?classes.active:null}
                        >
                            <ListItemIcon>
                            {item.icon}
                            </ListItemIcon>
                            <ListItemText>
                            {item.text}
                            </ListItemText>
                        </ListItem>

                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                 <div className={classes.toolbarHeight}>
                        
                  </div>
                  {children} 
            
            </div>
            
        </div>
    );
}

export default Layout;