const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        { id: 1, likes: 3, post: "gjh sjdf ggggggggg"},
        { id: 2, likes: 5, post: "gjh sjdf ggggggggg"},
        { id: 3, likes: 1, post: "gsdfvsvsjdf ggggj"},
    ],
    newPostText: ''
};


const profileReducer = (state = initialState, action) => {

        switch (action.type) {
            case ADD_POST:
                const newPost = {
                    id: 6,
                    post: state.newPostText,
                    likes: 0
                };
                state.posts.push(newPost);
                state.newPostText = '';
                break;
            case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;
                break;

            default: break;
        }

    return state;
}

export const addPostActionCreator = () =>  ({type: ADD_POST});
export const updateNewPostActionCreator = newText => ({type: UPDATE_NEW_POST_TEXT,  newText: newText});

export default profileReducer;
