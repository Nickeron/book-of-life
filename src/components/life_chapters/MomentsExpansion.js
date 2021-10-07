import React, { Component } from 'react';
import { connect } from 'react-redux';
import UploadFile from '../interactions/UploadFile';

class MomentsExpansion extends Component
{  
    componentDidMount()
	{
		console.log("Moments Expansion: " + this.props.quizData);
        this.props.currPage = this.props.quizData.items.filter(
            obj => { return obj.link === this.props.location.pathname })[0];
	}
    
    render()
    {
        console.log("Moments Expansion");
        return (
            <div className="wrapper ui stretched container">
                <div className="ui center aligned huge header title">{this.props.currPage.title}</div>
                <div className="ui items mainContent">                
                    {this.props.currPage.response}	
    
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
    }    
};

const mapStateToProps = state =>
{
	return { 
		currPage: 5,
		quizData: Object.values(state.data),
		currentUserID: state.auth.userId
	};
}

export default connect(mapStateToProps)(MomentsExpansion);