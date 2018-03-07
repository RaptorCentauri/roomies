const initialState = {
    success: false
}

const ProfileWasCompleted = (state = initialState, action) => {
    switch (action.type) {
        case "PROFILE_WAS_COMPLETED":
            state = { success: action.payload }
    }
    return state
}

export default ProfileWasCompleted;