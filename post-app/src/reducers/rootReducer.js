const initialState = {
    posts : []
}


const rootReducer = (state = initialState, action) => {
    if(action.type === 'SET_POSTS'){
        return {
            ...state,
            posts : action.posts
        }
    }
    return state;
}

export default rootReducer;
