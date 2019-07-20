const initialState = {
    posts : [
        {id: 1, title: 'title 1', body: 'Body 1', author : 'author 1'},
        {id: 2, title: 'title 2', body: 'Body 2', author : 'author 2'},
        {id: 3, title: 'title 3', body: 'Body 3', author : 'author 3'},
        {id: 4, title: 'title 4', body: 'Body 4', author : 'author 4'},
        {id: 5, title: 'title 5', body: 'Body 5', author : 'author 5'},
    ]
}

const rootReducer = (state = initialState, action) =>{
    console.log(action);
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts : newPosts
        }
    }
    return state;
} 


export default rootReducer;