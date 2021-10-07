import server from "../apis/server";
import { IMPORT_IMAGE, DELETE_IMAGE, EDIT_TEXT,	FETCH_QUIZ_DATA, FETCH_EXP_DATA, SIGN_IN, SIGN_OUT } from "./types";

export const signIn = userId => 
{
	return {
	  type: SIGN_IN,
	  payload: userId
	};
};
  
export const signOut = () => 
{
	return { type: SIGN_OUT	};
};

export const importImage = formValues =>
{
	return async (dispatch, getState) => 
	{
		const { userId } = getState().auth;
		const response = await server.post('/images', {...formValues, userId} );

		dispatch({ type: IMPORT_IMAGE, payload: response.data});
	};
};

export const deleteImage = id =>
{
	return async dispatch => 
	{
		await server.delete(`/images/${id}`);

		dispatch({ type: DELETE_IMAGE, payload: id});
	};
};


export const fetchQuizData = id =>
{
	return async (dispatch, getState) => 
	{
		const { userId } = getState().auth;
		getState().activeSubject = id;
		const response = await server.get(`/quiz?userID=${userId}&subjectID=${id}`);
		const dataReturned = response.data[0].subjects.find(x => x.subjectID === id);
		//console.log(dataReturned.items);

		dispatch({ type: FETCH_QUIZ_DATA, payload: dataReturned});
	};
};

export const saveQuizAnswer = (id, formValues) =>
{
	return async (dispatch, getState) => 
	{
		const { userId } = getState().auth;
		const response = await server.put(`/quiz?userID=${userId}&subjectID=${id}/text/${id}`, formValues);

		dispatch({ type: EDIT_TEXT, payload: response.data});
	};
}

export const fetchExpandedData = id =>
{
	return async (dispatch, getState) => 
	{
		const { userId } = getState().auth;
		const response = await server.get(`/exp?id=${userId}&id=${id}`);

		dispatch({ type: FETCH_EXP_DATA, payload: {id, response}});
	};
};

export const editText = (id, formValues) =>
{
	return async dispatch => 
	{
		const response = await server.put(`/text/${id}`, formValues);

		dispatch({ type: EDIT_TEXT, payload: response.data});
	};
}