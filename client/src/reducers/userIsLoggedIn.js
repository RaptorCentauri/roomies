const initialState = {
    success: false,
    id: null,
    token: null
}

const UserIsLoggedIn = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOGGED_IN":
            state = {...state, ...action.payload }
    }
    return state
}

export default UserIsLoggedIn;