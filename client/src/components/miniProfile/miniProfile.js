import React from "react";
import blobUtil from "blob-util";
import "./miniProfile.css"


class Miniprofile extends React.Component{

    showRandomImage = () => {
        let num = Math.floor(Math.random() * 13)+1

        let pic = num.toString();

        let srcFile = '/assets/images/ui-elements/avatar' + pic + '.png'

        let img = <img src={srcFile}  alt='upload avatar' />

        return img
    }

    hasPets = (pets) => {

    let msg ="";

        switch (pets) {
            case "both":
                msg = "Has cats and dogs."
                break;

            case "dog":
                msg = "Has dog(s)."
                break;

            case "cat":
                msg = "Has cat(s)."
                break;

            case "none":
                msg = "Does not have pets."
                break;
        
            default:
                break;
        }

        return <h4>{msg}</h4>

    }
 

    render(){
        return(
        < div className = "mini-profile-box" >
            <div className="avatar-box">
                <div className="avatar-top">
                    <div className="avatar-frame">
                            {this.showRandomImage()}
                        {/* <img src="/assets/images/ui-elements/avatarUploadPlaceholder{.png" alt="upload avatar" /> */}
                    </div>
                </div>

                <div className="avatar-bottom">
                    <h4>{this.props.firstname}</h4>
                </div>
            </div>
            <div className="wrapper">
                <div className="mini-info">
                    <h4>Rent Limit ${this.props.rent}</h4>
                    {this.hasPets(this.props.pets)}
                    {(this.props.smokes === 1) ? <h4>Is A Smoker</h4> : <h4>Is Not A Smoker</h4>}
                </div>
                <div className="mini-bio">
                    <h6>{this.props.bio}</h6>
                </div>
            </div>
        </div >


        )
    }

}

export default Miniprofile;
