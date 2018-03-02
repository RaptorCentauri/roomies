import axios from "axios";

export default {

    validateLogin(credentials){
        return axios.get("/api/login", credentials);
    },

    //Get profile
    getAll: function(){
        return axios.get("/api/all")
    },


    //get users from the DB that match the users search Parameters
    getMatches: function (matchData) {
        return axios.get("/api/matches",{ params:{matchData}})
    },

    //Sets user profile !!!!WORKING!!!
    setProfile: function (profileData) {
        console.log(`Sending to Server: ${profileData}`);
        return axios.post("/api/profile", profileData)
    },

}