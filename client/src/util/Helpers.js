export default {
   validateProfile: function (data) {
       if (data.firstName == null) {
           console.log("Please Enter First Name");
        //    let error = "First Name Required";
           return false;
       }

    //    if (data.lastName == null) {
    //        console.log("Please Enter a Last Name");
    //    }

    //    if (data.birthday == null) {
    //        console.log("Please Enter a Birthday");
    //    }
    //         else if (!data.birthday.match(/[0-9]{2}-[0-9]{2}-[0-9]{4}/)) {
    //             console.log("Bday format not valid");
    //         }

        else{
            return true;
        }
       }
    }