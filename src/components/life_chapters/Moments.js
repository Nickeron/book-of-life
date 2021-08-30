import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuizData } from '../../actions';
import SubjectList from '../interactions/SubjectList';

let items = 
[
	{
		title: 'The first kiss',
		link: '/moments/first-kiss',
		type: 'open question',
		content: 'What was your first kiss like?',
        response: 'Exceptional! I still remember the shock I felt inside, like I was struck by a lightning bolt'
	},
	{
		title: 'Wedding',
		link: '/moments/wedding',
		type: 'open question',
		content: 'What is the most memorable thing about your wedding?',
        response: ''
	},
	{
		title: 'First Birthday',
		link: '/moments/first-birthday',
		type: 'open question',
		content: 'What is it you remember of your first birthday?',
        response: 'That I ended up with 3 birthday cakes. One from my mother, one from my aunt and one from my grandma'
	},
	{
		title: 'Graduation',
		link: '/moments/graduation',
		type: 'open question',
		content: 'Who was there at the day of your graduation?',
        response: 'Both my parents were there, and my little sister. I remember how excited she was with my hat!',
	},
	{
		title: 'First Car',
		link: '/moments/first-car',
		type: 'open question',
		content: 'How was the first car you drove?',
        response: ''
	}
];

export {items};

class Moments extends Component
{
	componentDidMount()
	{
		this.props.fetchQuizData(this.props.subjectID);
	}

	renderList()
	{
		return (
			<div className="wrapper ui stretched container">
				<div className="ui center aligned huge header title">Moments</div>
				<div className="ui items mainContent">
					{console.log(this.props.quizData)}
					<SubjectList items={this.props.quizData[0].items} />				
				</div>
			</div>
		);
	}

	render()
	{
		return this.renderList();
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