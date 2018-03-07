const initialState = {
    firstName: null,
    lastName: null,
    bio: null,
    gender: "man",
    pets: "none",
    smokes: false,
    rent: 500
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PROFILE_INPUT_FIELD_CHANGED":
            state = { ...state, [action.payload.name]: action.payload.value }
    }
    return state
}

export default profileReducer;