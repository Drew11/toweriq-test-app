import axios from 'axios';

export function startLoading() {
    return {
        type: 'START_LOADING',
    };
}

export function loadingFailure(error) {
    return {
        type: 'LOADING_FAILURE',
        payload: error
    };
}

export function usersLoadingComplete(users) {
    return {
        type: 'LOADING_COMPLETE',
        payload: users
    };
}

export const fetchUsers =  () => {
    return async dispatch => {
        await dispatch(startLoading());
        try {
             const response = await axios.get(`http://localhost:5000/users`);
             const users = await response.data;
             dispatch(usersLoadingComplete(users))
        }catch (err) {
                dispatch(loadingFailure(err.message));
        }
    };
};
