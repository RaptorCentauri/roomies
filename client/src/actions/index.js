export const changeSearchParams = (name, value) => {
    return{
        type: "SEARCHPARAMS_CHANGED",
        payload: {name: name, value: value}         
    }
};


export const changeCredentials = (name, value) => {    
    return {
        type: "LOGIN_VALUES_ENTERED",
        payload: { name: name, value: value }
    }
};

export const changeMatches = (name, value) => {
    return {
        // type: "LOGIN_VALUES_ENTERED",
        // payload: { name: name, value: value }
    }
};

export const changeNewAccountErrors = (obj) => {
    return {
        type: "CHECK_FOR_ACCOUNT_ERRORS",
        payload: obj
    }
};


export const changeNewAccount = (name, value) => {
    return {
        type: "NEWACCOUNT_INPUT_FIELD_CHANGED",
        payload: { name: name, value: value }
    }
};

export const changeProfileErrors = (obj) => {
    return {
        type: "CHECK_FOR_PROFILE_ERRORS",
        payload: obj
    }
};

export const changeProfile = (name, value) => {
    return {
        type: "PROFILE_INPUT_FIELD_CHANGED",
        payload: { name: name, value: value }
    }
};

export const changeAccountWasCompletedStatus = (status) => {
    return {
        type: "ACCOUNT_COMPLETION_STATUS_CHANGED",
        payload: status
    }
};

export const changeAccountWasCompletedId = (id) => {
    return {
        type: "ACCOUNT_COMPLETION_ID_CHANGED",
        payload: id
    }
};

export const changeAccountWasCompletedProfile = (bool) => {
    return {
        type: "ACCOUNT_COMPLETION_PROFILE_CHANGED",
        payload: bool
    }
};

export const changeAccountWasCompletedSearchParams = (bool) => {
    return {
        type: "ACCOUNT_COMPLETION_SEARCHPARAMS_CHANGED",
        payload: bool
    }
};


export const changeProfileWasCompleted = (bool) => {
    console.log("LOOK LOOK LOKK");
    
    return {
        type: "PROFILE_WAS_COMPLETED",
        payload: bool
    }
};

export const changeUserIsLoggedIn = (id, bool) => {
    return {
        type: "USER_LOGGED_IN",
        payload: {id: id, success: bool}
    }
};




export const changeCreateNewUser = (bool) => {
    return {
        type: "CREATE_USER_WAS_CLICKED",
        payload: bool
    }
};


