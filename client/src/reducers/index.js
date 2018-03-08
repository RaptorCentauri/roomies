import {combineReducers} from "redux";
import MatchesReducer from "./matchesReducer.js";
import SearchParams from "./searchParamsReducer.js"
import Credentials from "./credentialsReducer";
import NewAccount from "./newAccountReducer";
import NewAccountErrors from "./newAccountErrorsReducer";
import Profile from "./profileReducer";
import ProfileErrors from "./profileErrorsReducer";
import AccountWasCompleted from "./accountWasCompletedReducer";
import UserIsLoggedIn from "./userIsLoggedIn.js";

const allReducers = combineReducers({
    matches: MatchesReducer,
    searchParams: SearchParams,
    credentials: Credentials,
    newAccount: NewAccount,
    newAccountErrors: NewAccountErrors,
    profile: Profile,
    profileErrors: ProfileErrors,
    userIsLoggedIn: UserIsLoggedIn,
    accountWasCompleted: AccountWasCompleted
});

export default allReducers;