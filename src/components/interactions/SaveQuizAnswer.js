import { Component } from "react";
import { connect } from "react-redux";
import { saveQuizAnswer } from '../../actions';

class SaveQuizAnswer extends Component
{
	render()
	{
		return <button className={`ui ${this.props.active} positive button`} 
						onClick={this.props.subjectID !== undefined ? 
							this.props.saveQuizAnswer(this.props.subjectID, this.props.formValues) : 
							console.log("Tried to save answer with undefined subjectID")}>
					Save
				</button>
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