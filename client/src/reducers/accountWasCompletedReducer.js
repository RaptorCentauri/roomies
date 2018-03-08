const initialState = {
    id: null,
    profile: false,
    searchparams: false,
    status: null
}

const AccountWasCompleted = (state = initialState, action) => {
    switch (action.type) {
        case "ACCOUNT_COMPLETION_STATUS_CHANGED":
            state = { ...state, status: action.payload }
            break;

        case "ACCOUNT_COMPLETION_ID_CHANGED":
            state = { ...state, id: action.payload }
            break;

        case "ACCOUNT_COMPLETION_PROFILE_CHANGED":
            state = { ...state, profile: action.payload }
            break;
        case "ACCOUNT_COMPLETION_SEARCHPARAMS_CHANGED":
            state = { ...state, searchparams: action.payload }
            break;

    }
    return state
}

export default AccountWasCompleted;


