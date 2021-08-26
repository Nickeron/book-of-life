import React from 'react';
import ChapterLink from './links/ChapterLink';

const MainMenu = () =>
{
    return (
        <div className="wrapper ui stretched container">
            <div className="ui center aligned huge header title">Life Chapters</div>
            <div className="ui three column grid">
                <div className="centered row">
                    <ChapterLink linkText="/faces" chapterName="Faces"/>
                    <ChapterLink linkText="/family" chapterName="Family"/>
                    <ChapterLink linkText="/moments" chapterName="Moments"/>
                </div>
                <div className="centered row">
                    <ChapterLink linkText="/music" chapterName="Music"/>
                    <ChapterLink linkText="/work" chapterName="Work"/>
                    <ChapterLink linkText="/travelling" chapterName="Travelling"/>
                </div>            
            </div>            
        </div>        
    );
};

export default MainMenu;