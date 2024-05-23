import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("parent constructor");
    }
    componentDidMount(){
        // console.log("parent mount");
    }
    render(){
        // console.log("parent render");
        return (
            <div>
                <div>About page</div>
                 {/* <User
                    name={"Raj"}
                    location={"Basavanagudi"}
                />  */}
                <UserClass
                    name={"first"}
                    location={"Basavanagudiuuu"}
                />
                <UserClass
                    name={"second"}
                    location={"hsr layout"}
                />
            </div>
        )
    }
}

export default About;