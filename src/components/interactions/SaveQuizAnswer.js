import { Component } from "react";
import { connect } from "react-redux";
import { saveQuizAnswer } from '../../actions';

class SaveQuizAnswer extends Component
{
	saveAnswer()
	{
		console.log("(SaveAnswer Button) Trying to save answer...")
		return this.props.subjectID !== undefined ? 
		this.props.saveQuizAnswer(this.props.subjectID, this.props.formValues) : 
		console.log("(SaveAnswer Button) ABORT: Undefined subjectID")
	}
	
	render()
	{
		return <button className={`ui ${this.props.active} positive button`} onClick={this.saveAnswer()}>Save</button>
	}
}

const mapStateToProps = state =>
{
	return { 
		subjectID: state.activeSubject,
		currentUserID: state.auth.userId
	};
}

export default connect(mapStateToProps, {saveQuizAnswer})(SaveQuizAnswer);