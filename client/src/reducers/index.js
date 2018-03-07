import {combineReducers} from "redux";
import MatchesReducer from "./matchesReducer.js";
import SearchParams from "./searchParamsReducer.js"
import Credentials from "./credentialsReducer";
import NewAccount from "./newAccountReducer";
import NewAccountErrors from "./newAccountErrorsReducer";
import Profile from "./profileReducer";
import ProfileErrors from "./profileErrorsReducer";
import AccountWasCreated from "./accountWasCreated";
import ProfileWasCompleted from "./profileWasCompleted.js";
import UserIsLoggedIn from "./userIsLoggedIn.js";
import CreateNewUser from "./createNewUser.js";


const allReducers = combineReducers({
    matches: MatchesReducer,
    searchParams: SearchParams,
    credentials: Credentials,
    newAccount: NewAccount,
    newAccountErrors: NewAccountErrors,
    profile: Profile,
    profileErrors: ProfileErrors,
    accountWasCreated: AccountWasCreated,
    profileWasCompleted: ProfileWasCompleted,
    userIsLoggedIn: UserIsLoggedIn,
    createNewUser:CreateNewUser

});

export default allReducers;