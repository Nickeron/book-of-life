import React, { useState } from 'react';
import ExpansionLink from '../links/ExpansionLink';
import SaveQuizAnswer from './SaveQuizAnswer';

const OpenQuestion = ({question, response, title, link}) =>
{
	const [term, setTerm] = useState(response);

	const active = term === ""? "disabled" : "";
	const saveOrMore = (term === "" || term !== response)? "Save" : "More";

	const saveOrGo = () =>
	{
		if(saveOrMore === "More")
		{
			return <ExpansionLink linkText={link} chapterName={title}/>
		}
		// If the user has not input anything as an answer yet
		else
		{
			return <SaveQuizAnswer active={active}/>
		}
	}

	return (
		<div className="ui form">
			<div className="field">
    			<label>{question}</label>
				<div className="ui transparent input">
					<textarea rows="2"
						onChange={e => setTerm(e.target.value) }	
						value={term}
						type='text' 
						name='answer' 
						placeholder="Answer here...">
					</textarea>
				</div>								
  			</div>
			<div className="ui item right floated">
				{saveOrGo()}
			</div>
		</div>
		);
}

export default OpenQuestion;