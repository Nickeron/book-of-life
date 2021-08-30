import React from 'react';
import { connect } from 'react-redux';
import UploadFile from '../interactions/UploadFile';

const MomentsExpansion = (props) =>
{  
    console.log(props)
    var currPage = this.props.quizData.filter(
        obj => { return obj.link === props.location.pathname })[0];

    return (
        <div className="wrapper ui stretched container">
            <div className="ui center aligned huge header title">{currPage.title}</div>
            <div className="ui items mainContent">                
                {currPage.response}	

                <div className="ui divider"></div>

                <div className='ui center aligned grid'>
                    <div className="four wide column">
                        <i className="huge camera icon"></i>
                        <div className="ui hidden divider"></div>
                        <UploadFile textButton="Add Image"/>
                    </div>
                    <div className="four wide column">
                        <i className="huge pencil alternate icon"></i>
                        <div className="ui hidden divider"></div>
                        <button className="ui secondary basic button">Add Text</button>
                    </div>
                    <div className="four wide column">
                        <i className="huge microphone icon"></i>
                        <div className="ui hidden divider"></div>
                        <button className="ui secondary basic button">Record</button>
                    </div>
                    <div className="four wide column">
                        <i className="huge music icon"></i>
                        <div className="ui hidden divider"></div>
                        <button className="ui secondary basic button">Add a Song</button>
                    </div>
                </div>
                <div className="ui divider"></div>
                <div className="ui placeholder">
                <div className="paragraph">
                    <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>            			
            </div>            
        </div>        
    );
};

const mapStateToProps = state =>
{
	return { 
		subjectID: 5,
		quizData: Object.values(state.data),
		currentUserID: state.auth.userId
	};
}

export default connect(mapStateToProps, {})(MomentsExpansion);