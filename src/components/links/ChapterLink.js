import React from 'react';
import { Link } from 'react-router-dom';

const ChapterLink = props =>{
    return(
		<Link to={props.linkText} className="column">
			<div className="ui centered card">				
				<div className="square image">
					<img alt="" className="ui medium centered rounded image" src={`./chapters/${props.chapterName}.jpg`}/>
				</div>						
				<div className="content">
					<div className="ui center aligned header">
						<div className="text">{props.chapterName}</div>
					</div>
				</div>	
			</div>
		</Link>);
};

export default ChapterLink;