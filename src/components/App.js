import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import MainMenu from './MainMenu';
import Faces from './life_chapters/Faces';
import Family from './life_chapters/Family';
import Moments from './life_chapters/Moments';
import Music from './life_chapters/Music';
import Work from './life_chapters/Work';
import Travelling from './life_chapters/Traveling';
import MomentsExpansion from './life_chapters/MomentsExpansion';


const App = () =>
{
    return (
        <div className="wrapper">
            <BrowserRouter>
            <div className="wrapper">
                <Route path="/" exact component={MainMenu}/>
                <Route path="/faces" exact component={Faces}/>
                <Route path="/family" exact component={Family}/>
                <Route path="/moments" exact component={Moments}/>
                <Route path="/music" exact component={Music}/>
                <Route path="/work" exact component={Work}/>
                <Route path="/travelling" exact component={Travelling}/>
                <Route path="/moments-more/" component={MomentsExpansion}/>
            </div>
            </BrowserRouter>
        </div>
    );
};

export default App;