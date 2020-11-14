const initialState = {
    loading: false,
    users: null,
    error: null
};

const rootReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'STARTING_LOADING':
            return {
                ...state,
                loading: true
            };
        case 'LOAD_COMPLETE':
            return {
                ...state,
                loading: false,
                users: action.payload.users
            };
        case 'LOADING_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state
    }
 }
;

export default rootReducer;