const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, text: 'How are you?'},
        {id: 2, text: 'Good, and you?'},
        {id: 3, text: 'WTF???'},
        {id: 4, text: 'Going dawn...'}
    ],
    newPostText: 'OOPS-IT'
}

function accountReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, {newPost}],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.textMessage
            }

        default: {
            return state;
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, textMessage: text});

export default accountReducer;
