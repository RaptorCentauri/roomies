import axios from "axios";

export default {
    //Allows us to add a new Account
    createNewUser: (credentials) => axios.post("/api/newacct", credentials).then((res) => console.log(res)),
    
    //Allows us to validate an email and password
    validateLogin: (credentials) => axios.post("/api/login", credentials).then((res) => console.log(res)),
 
    //Returns an array JSON objects of users from the DB that match the search parameters
    getMatches: (matchData) => axios.get("/api/matches", {params:{matchData}}).then((res) => console.log(res.data)),

    //Sets new user profile
    setProfile:(profileData) => axios.post("/api/profile", profileData)
}