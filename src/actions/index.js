import images from "../apis/images";

export const importImage = formValues =>
{
	return async dispatch => 
	{
		images.post('/images', formValues);
	};
};