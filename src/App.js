import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {createTheme,ThemeProvider} from '@material-ui/core';

import Create from "./pages/Create";
import Notes from "./pages/Notes";
import { purple } from "@material-ui/core/colors";
import Layout from "./components/Layout";

const theme=createTheme({
palette:{
  
  secondary:purple,
  
},
typography:{

  fontFamily:'Quicksand',
  fontWeightLight:400,
  fontWeightRegular:500,
  fontWeightMedium:600,
  fontWeightBold:700,

}




})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <Layout>
      <Switch>
        
        <Route exact path='/'>
           <Notes/>
        </Route>
        <Route path='/create'>
           <Create/>
        </Route>
      </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
