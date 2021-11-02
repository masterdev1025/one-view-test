const initialState = {
    users: [],
    posts: null,
    loading: false,
    postGetLoading: false,
    error: null
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_USERS_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            }
        case "GET_USERS_SUCCEED":
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: null
            }
        case "GET_USERS_FAILED":
            return {
                ...state,
                users: null,
                loading: false,
                error: action.paylaod
            }
        case "GET_POST_REQUEST":
            return {
                ...state,
                postGetLoading: true,
                error: null
            }
        case "GET_POST_SUCCEED":
            return {
                ...state,
                postGetLoading: false,
                error: null,
                post: action.payload
            }
        case "GET_POST_FAILED":
            return {
                ...state,
                postGetLoading: false,
                error: action.payload,
                post: null
            }
        default:
            return state
    }
}

export default reducer;