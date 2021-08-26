import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class Authentication extends React.Component 
{
	componentDidMount() 
	{
		// TODO: Implement proper authentication through the 
		this.auth = 
		{
			currentUser: {
				get: () => 
				{
					return {
						getId: () => 
						{
							return '712';
						}
					};
				}
			},

			signIn: () => {return;}			
		};

		this.props.signIn(this.auth.currentUser.get().getId());

		// Google Authentication
		/* window.gapi.load('client:auth2', () => 
		{
		  window.gapi.client
			.init({
			  clientId:
				'797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
			  scope: 'email'
			})
			.then(() => {
			  this.auth = window.gapi.auth2.getAuthInstance();
	
			  this.onAuthChange(this.auth.isSignedIn.get());
			  this.auth.isSignedIn.listen(this.onAuthChange);
			});
		}); */
	}

/* 	onSignInClick = () => {	this.auth.signIn();	};

	onSignOutClick = () => { this.auth.signOut(); }; */

	render()
	{
		return null;
	}
}

const mapStateToProps = state => { return { isSignedIn: state.auth.isSignedIn }; };
  
export default connect( mapStateToProps, { signIn, signOut })(Authentication);
  