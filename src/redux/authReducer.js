const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true

            };
        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         ...action.data
        //
        //     };
        default: break;
    }
    return state;
}

// ActionCreator's
export const setAuthUserData = (userId,email,login) => ({type: SET_USER_DATA, data: {userId,email,login}});

export default authReducer;
