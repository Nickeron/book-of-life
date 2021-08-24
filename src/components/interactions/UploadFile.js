import { connect } from 'react-redux';
import { importImage } from '../../actions';
import React, {Component} from 'react';
import { formValues, reduxForm } from 'redux-form';

class UploadFile extends Component 
{
	state = {
		// Initially, no file is selected
		selectedFile: null
	};
	
	// On file select (from the pop up)
	onFileChange = event => {
		// Update the state
		this.setState({ selectedFile: event.target.files[0] });	
	};
	
	// On file upload (click the upload button)
	onFileUpload = formValues => 
	{
		// Details of the uploaded file
		console.log(`Trying to upload file: ${this.state.selectedFile.name}`);
	
		// Request made to the backend api
		// Send formData object
		//axios.post("api/uploadfile", formData);
		this.props.importImage(formValues);
	};
		
	// File content to be displayed after
	// file upload is complete
	fileData = () => 
	{
		if (this.state.selectedFile) 
		{
			return (
				<button className="ui secondary basic button" onClick={this.props.handleSubmit(this.onFileUpload)}>Upload!</button>
			);
		} 
		else 
		{
			return (
				<label className="ui secondary basic button">
    				<input type="file" onChange={this.onFileChange} />
					Add Image
				</label>
			);
		}
	};
	
	render() 
	{
		return (
			<div>
				<div>{this.fileData()}</div>
			</div>
		);
	}
}

const formWrapped = reduxForm(
	{
		form: 'importImage',
	}
)(UploadFile);

export default connect(null, { importImage })(formWrapped);

//export default UploadFile;
