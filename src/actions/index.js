import axios from 'axios';

export function startLoading() {
    return {
        type: 'START_LOADING',
    };
}

export function loadingFailure(error) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        payload: error
    };
}

export function usersLoadingComplete(users) {
    return {
        type: 'LOAD_COMPLETE',
        payload: users
    };
}

export const fetchUsers =  () => {
    return async dispatch => {
        dispatch(startLoading());
        try {
             const response = await axios.get(`http://localhost:5000/users`);
             const users = await response.data;
             dispatch(usersLoadingComplete(users))
        }catch (err) {
                dispatch(loadingFailure(err.message));
        }
    };
};
