const initialState = {
    emailError: null,
    passwordError: null,
}

const newAccountErrorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHECK_FOR_ACCOUNT_ERRORS":
            state = { ...state, ...action.payload }
        //SomeAction
    }
    return state
}

export default newAccountErrorsReducer;


// state = { ...state, obj }


