import React, { useState } from 'react';
import OpenQuestion from './OpenQuestion';

const SubjectList = ({items}) =>
{
    const [activeIndex, setActiveIndex] = useState(null);

	const onTitleClick = (index) => 
	{
		setActiveIndex(index);
	};

	const typeOfContent = item =>
	{
		switch(item.type)
		{
			case "open question":
				{
					return ( <OpenQuestion question={item.content} response={item.response} 
											title={item.title} link={item.link}/>	);
				}				
			default:
				{
					return(	<p>{item.content}</p> );
				}				
		}
	}

	const completedContent = ({response}) =>
	{
		if(response === '') return;

		if (response)
		{
			return <i className="check icon"></i>;
		}
	}

	const renderedItems = items?.map((item, index) =>
	{
		const active = index === activeIndex? "active" : "";
		return (
			<React.Fragment key={index}>
				<div className = {`title ${active}`} onClick={() => onTitleClick(index)}>
					<i className="dropdown icon"></i>
					{item.title}
					{completedContent(item)}
				</div>
				<div className={`content ${active}`}>
					{typeOfContent(item)}
				</div>
			</React.Fragment>
		)
	});

	return (
		<div className = "ui styled accordion">
				{renderedItems}
		</div>);
};

export default SubjectList;