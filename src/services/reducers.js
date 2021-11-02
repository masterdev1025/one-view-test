const initialState = {
    users: [],
    posts: null,
    loading: false,
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
        case "GET_POST_REQEST":
            return {
                ...state,
                loading: true,
                error: null
            }
        case "GET_POST_SUCCEED":
            return {
                ...state,
                loading: false,
                error: null,
                post: action.payload
            }
        case "GET_POST_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload,
                post: null
            }
        default:
            return state
    }
}

export default reducer;