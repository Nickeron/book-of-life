import server from "../apis/server";
import { IMPORT_IMAGE, DELETE_IMAGE, EDIT_TEXT,	FETCH_QUIZ_DATA, FETCH_EXP_DATA } from "./types";

export const importImage = formValues =>
{
	return async dispatch => 
	{
		const response = await server.post('/images', formValues);

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


export const fetchQuizData = chapterID =>
{
	return async dispatch => 
	{
		const response = await server.get(`/quiz/${chapterID}`);

		dispatch({ type: FETCH_QUIZ_DATA, payload: response.data});
	};
};

export const fetchExpandedData = subjectExpansion =>
{
	return async dispatch => 
	{
		const response = await server.get(`/exp/${subjectExpansion}`);

		dispatch({ type: FETCH_EXP_DATA, payload: response.data});
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