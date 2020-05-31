import React, {useState} from 'react';
import Header from './ui/Header/Header';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './ui/Theme/theme'
import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";
import LandingPage from "./LandingPage";
import Services from "./ui/services/services";


function App() {
    const [value, setValue] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            <Switch>
                <Route exact
                       path='/'
                       render={(props) =>
                           <LandingPage {...props} setValue={setValue}
                                        setSelectedIndex={setSelectedIndex}/>}/>
                <Route  path='/services' render={(props)=><Services {...props} setValue={setValue}
                                                               setSelectedIndex={setSelectedIndex} />}/>
                <Route  path='/customSoftware' render={()=><div>customSoftware</div>}/>
                <Route  path='/mobileapps' render={()=><div>mobileapps</div>}/>
                <Route  path='/websites' render={()=><div>websites</div>}/>
                <Route  path='/revolution' render={()=><div>revolution</div>}/>
                <Route  path='/about' render={()=><div>about</div>}/>
                <Route  path='/contact' render={()=><div>contact</div>}/>
                <Route  path='/estimate' render={()=><div>estimate</div>}/>
            </Switch>
            {/*<Footer value={value} setValue={setValue}  setSelectedIndex={setSelectedIndex} />
*/}
        </BrowserRouter>


    </ThemeProvider>
  );
}

export default App;
