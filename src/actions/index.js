import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/post')

        dispatch({
            type: 'FETCH_POST',
            payload: response
        })
    }



export const selectPost = () => {
    return {
        type: 'SELECT_POST'
    }
}
