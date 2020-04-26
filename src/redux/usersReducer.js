const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    users: [
        // { id: 1,  photo: "https://i.pinimg.com/originals/36/62/5f/36625fdbc9a25f0bb2770e9a3e8d2952.jpg", followed: false, fullName: "Dimych", status: "stat1", location: {city: "berdsk", country: "Russia"} },
        // { id: 2,  photo: "https://avatars.mds.yandex.net/get-pdb/1686358/56dc4272-31fe-44f9-a1b3-03e7aefa5c4b/s1200?webp=false", followed: true, fullName: "Sveta", status: "stat", location: {city: "Minsk", country: "Belorus"} },
        // { id: 3,  photo: "https://pp.userapi.com/c11345/u18058769/-6/x_5e701aa8.jpg", followed: false, fullName: "Roma", status: "sssss", location: {city: "Moscow", country: "Russia"} },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false

};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId)
                        return {...u, followed: true};
                    return u
                })

            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId)
                        return {...u, followed: false};
                    return u
                })

            };
        case SET_USERS:
            // return { ...state, users: [...state.users, ...action.users]}
            return { ...state, users: [...action.users]}

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage}
        case SET_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}


        default: break;
    }
    return state;
}

// ActionCreator's
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_USERS_COUNT, totalUsersCount});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;
