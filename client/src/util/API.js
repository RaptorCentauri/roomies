import axios from "axios";

export default {
    //Allows us to add a new Account
    // createNewUser: (credentials) => axios.post("/api/newacct", credentials).then((res) => console.log(res.data)),


    createNewUser: (credentials) => {        
        return new Promise((resolve, reject) => {
            axios.post("/api/newacct", credentials).then((res) => res.data ? resolve(res.data)  : resolve(false))
        })
    },



    validateLogin: (credentials) => {
        console.log(credentials)
        
        return new Promise((resolve, reject) => {
            axios.post("/api/login", credentials).then((res) => res.data ? resolve(res.data) : resolve(false))
        })
    },
    
    //Allows us to validate an email and password
    // validateLogin: (credentials) => axios.post("/api/login", credentials).then((res) => res.data ? resolve(true) : resolve(false)),
 
    //Returns an array JSON objects of users from the DB that match the search parameters
    getMatches: (matchData) => axios.get("/api/matches", {params:{matchData}}).then((res) => console.log(res.data)),

    //Sets new user profile
    setProfile:(profileData) => axios.post("/api/profile", profileData)
}


// createNewUser: (credentials) => axios.post("/api/newacct", credentials).then((res) => console.log(res)),



// validateLogin: (credentials) => {
//     return new Promise((resolve, reject) => {
//         axios.post("/api/login", credentials).then((res) => res.data ? resolve(true) : resolve(false)),
//     })
// },