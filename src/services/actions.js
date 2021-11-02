import Settings from '../config/settings';



const getUsersRequest = () => {
    return {
        type: "GET_USERS_REQUEST"
    }
}

const getUsersSucceed = (users) => {
    return {
        type: "GET_USERS_SUCCEED",
        payload: users
    }
}

const getUsersFailed = (error) => {
    return {
        type: "GET_USERS_FAILED",
        payload: error
    }
}

const getUsers = () => {
    return (dispatch) => {
        dispatch( getUsersRequest() );
        fetch(`${Settings.BASE_URL}/users`).then((response) => response.json()).then((data) => {
            const users = data;
            dispatch( getUsersSucceed(users) );
        })
        .catch(error => {
            const errMsg = error.message;
            dispatch( getUsersFailed(errMsg) );
        })
    }
}


const getPostRequest = () => {
    return {
        type: "GET_POST_REQUEST"
    }
}

const getPostSucceed = (post) => {
    return {
        type: "GET_POST_SUCCEED",
        payload: post
    }
}

const getPostFailed = (error) => {
    return {
        type: "GET_Post_FAILED",
        payload: error
    }
}

const getPost = (userId) => {
    return (dispatch) => {
        dispatch( getPostRequest() );
        fetch(`${Settings.BASE_URL}/posts?userId=${userId}`).then((response) => response.json()).then((data) => {
            const posts = data;
            dispatch( getPostSucceed(posts) );
        })
        .catch(error => {
            const errMsg = error.message;
            dispatch( getPostFailed(errMsg) );
        })
    }
}

export {
    getUsers,
    getUsersRequest,
    getUsersSucceed,
    getUsersFailed,
    getPost,
    getPostRequest,
    getPostSucceed,
    getPostFailed
 }