import axios from "axios";

export default {
    createNewUser: (credentials) => {        
        return new Promise((resolve, reject) => {
            axios.post("/api/newacct", credentials).then((res) => res.data ? resolve(res.data)  : resolve(false))
        })
    },

    validateLogin: (credentials) => {        
        return new Promise((resolve, reject) => {
            axios.post("/api/login", credentials).then((res) => res.data ? resolve(res.data): resolve(false))
        })
    },

    
    updateUserProfile: (profileToUpdate) => {
        return new Promise((resolve, reject) => {
            axios.post("/api/profile", profileToUpdate).then((res) => res.data ? resolve(res.data): resolve(false))
        })
    },

    getUserProfile: (ProfileId) => {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("GET PROFILE WAS HIT!!!!!!!!!");
        console.log(ProfileId);
        console.log(typeof(ProfileId));

        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

        
        return new Promise((resolve, reject) => {
            axios.post("/api/getprofile", ProfileId).then((res) => res ? console.log("GOOD! " + res) : console.log("BAD! " + res.data))
        })
    },

    updateUserSearchParams: (searchParamsToUpdate) => {
        return new Promise((resolve, reject) => {
            axios.post("/api/searchparams", searchParamsToUpdate).then((res) => res.data ? resolve(res.data) : resolve(false))
        })
    },


    
    
    //Returns an array JSON objects of users from the DB that match the search parameters
    getMatches: (matchData) => axios.get("/api/matches", {params:{matchData}}).then((res) => console.log(res.data)),

    //Sets new user profile

}