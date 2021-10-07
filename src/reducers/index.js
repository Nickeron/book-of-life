import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./authReducer";
import dataReducer from "./dataReducer";

export default combineReducers(
	{
		auth: authReducer,
		form: formReducer,
		data: dataReducer
	}
);