import React from 'react';
import { Link } from 'react-router-dom';

const ExpansionLink = props =>{

    return(
		<Link to={props.linkText} className="column">
			<button className={`ui yellow button`}>More</button>
		</Link>);
};

export default ExpansionLink;