const initialState = {
    gender: "both",
    pets: "none",
    smokes: false,
    rent: 1000
}

const searchParamsReducer = (state=initialState, action) => {
    switch (action.type) {
        case "SEARCHPARAMS_CHANGED":
            state = { ...state, [action.payload.name]: action.payload.value }
    }
    return state
}

export default searchParamsReducer;