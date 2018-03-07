const initialState = {
    success: false
}

const CreateNewUser = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_USER_WAS_CLICKED":
            state = { success: action.payload }
    }
    return state
}

export default CreateNewUser;