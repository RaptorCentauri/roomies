const initialState = {
    success: false,
    token: null
}

const UserIsLoggedIn = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOGGED_IN":
            state = { success: action.payload }
    }
    return state
}

export default UserIsLoggedIn;