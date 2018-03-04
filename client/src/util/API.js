import axios from "axios";

export default {

    validateLogin(credentials){
        console.log("LOGINING IN USER");
        console.log(`email: ${credentials.email}`);
        console.log(`pass: ${credentials.password}`);
    
        return axios.post("/api/login", credentials);
    },

    //Get profile
    getAll: function(){
        return axios.get("/api/all")
    },


    //get users from the DB that match the users search Parameters
    getMatches: function (matchData) {
        return axios.get("/api/matches", {params:{matchData}})
            .then((res) => console.log(res.data))
    },

    //Sets user profile !!!!WORKING!!!
    setProfile: function (profileData) {
        console.log(`Sending to Server: ${profileData}`);
        return axios.post("/api/profile", profileData)
    },




}