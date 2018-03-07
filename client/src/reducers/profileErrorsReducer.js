
const initialState = {
    firstNameError: null,
    lastNameError: null,
    bioError: null,
}

const profileErrorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHECK_FOR_PROFILE_ERRORS":
            state = { ...state, ...action.payload }

        //SomeAction
    }
    return state
}

export default profileErrorsReducer;
