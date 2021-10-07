import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuizData } from '../../actions';
import SubjectList from '../interactions/SubjectList';

class Moments extends Component
{
	componentDidMount()
	{
		this.props.fetchQuizData(this.props.subjectID);
		//console.log(this.props.quizData);
	}

	renderQuizData = () =>
	{
		return this.props.quizData.map(subjectItems =>
			{	
				//console.log("Rendering subject items: " + subjectItems);			
				if(subjectItems !== 0){
					return <SubjectList items={subjectItems} />
				}
				else return null;				
				 
			})
	}

	render()
	{
		return (
			<div className="wrapper ui stretched container">
				<div className="ui center aligned huge header title">Moments</div>
				<div className="ui items mainContent">
					{this.renderQuizData()}					
				</div>
			</div>
		);
	}    
};

const mapStateToProps = state =>
{
	return { 
		subjectID: 5,
		quizData: Object.values(state.data),
		currentUserID: state.auth.userId
	};
}

export default connect(mapStateToProps, {fetchQuizData})(Moments);