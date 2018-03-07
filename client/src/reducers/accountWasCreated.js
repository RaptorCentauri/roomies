const initialState = {
    success: false
}

const AccountWasCreated = (state = initialState, action) => {
    switch (action.type) {
        case "NEW_ACCOUNT_WAS_MADE":
            state = {success: action.payload}
    }
    return state
}

export default AccountWasCreated;