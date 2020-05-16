import React from 'react';
import Header from './ui/header';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/theme'
import {BrowserRouter,Route,Switch} from "react-router-dom";



function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' render={()=><div>Home</div>}/>
                <Route  path='/services' render={()=><div>Services</div>}/>
                <Route  path='/customSoftware' render={()=><div>customSoftware</div>}/>
                <Route  path='/mobileapps' render={()=><div>mobileapps</div>}/>
                <Route  path='/websites' render={()=><div>websites</div>}/>
                <Route  path='/revolution' render={()=><div>revolution</div>}/>
                <Route  path='/about' render={()=><div>about</div>}/>
                <Route  path='/contact' render={()=><div>contact</div>}/>
                <Route  path='/estimate' render={()=><div>estimate</div>}/>
            </Switch>
        </BrowserRouter>


    </ThemeProvider>
  );
}

export default App;
