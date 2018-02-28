import axios from "axios";

export default {

    validateLogin(credentials){
        return axios.get("/api/login", credentials);
    }
    //Get profile
    getAll: function(){
        return axios.get("/api/all")
    },

    getMatches: function () {
        return axios.get("/api/wherevermatchessearchbelongs")
    },

    setSearch: function (searchData) {
        return axios.post("/api/whereversearchsettingsaregoing", searchData)
    },

}