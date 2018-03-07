
const initialState = {
    email: null,
    password: null
}

const credentialsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_VALUES_ENTERED":
            state = { ...state, [action.payload.name]: action.payload.value }
    }
    return state
}

export default credentialsReducer;