const initialState = {
    email: null,
    password: null,
}

const newAccountReducer = (state = initialState, action) => {    
    switch (action.type) {
        case "NEWACCOUNT_INPUT_FIELD_CHANGED":
            state = { ...state, [action.payload.name]: action.payload.value }
    }
    return state
}

export default newAccountReducer;