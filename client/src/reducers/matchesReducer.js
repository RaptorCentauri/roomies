const initialState = {
    matches: null
}

const matchesReducer = (state = initialState, action) => {        
    switch (action.type) {
        case "MATCHES_CHANGED":
            console.log("Get SHORTY BITCHES");

            state = {...state, matches: action.payload}
    }
    return state
}

export default matchesReducer;