import { IMPORT_IMAGE,	DELETE_IMAGE, EDIT_TEXT, FETCH_QUIZ_DATA, FETCH_EXP_DATA} from '../actions/types';
import _ from 'lodash';

const INTIAL_STATE = {
	activeSubject: 0,
	activeQuestion: 0
  };

const dataReducer = (state = INTIAL_STATE, action) =>
{
	switch( action.type) 
	{
		case FETCH_EXP_DATA:
			console.log("Returned data: " + action.payload);
			return { ...state, activeSubject: action.payload, activeQuestion: action.payload };
		case FETCH_QUIZ_DATA:
			return {...state, ..._.mapKeys(action.payload, 'id')};
		case IMPORT_IMAGE:
		case EDIT_TEXT:
			return {...state, [action.payload.id]: action.payload};
		case DELETE_IMAGE:
			return _.omit(state, action.payload);
		default:
			return state;		
	}
}

export default dataReducer;