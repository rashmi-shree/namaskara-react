import React from 'react';
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            count2:2,
            userInfo:{
                name:"",
                location:""
            }
        }
        // console.log(this.props.name + "child constructor");
    }
    async componentDidMount(){
        // console.log(this.props.name + "child mount");
        //make api calls
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json=await data.json();
        this.setState({
            userInfo:json,
        })
    }
    render(){
        // console.log(this.props.name + "child render");
        const {name, location} = this.state.userInfo;
        const {count, count2} = this.state;
        return(
            <div>
                <h1>Count:{count}</h1>
                <h1>Count:{count2}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                        count2:this.state.count2+1,
                    })
                }}>increase</button>
                <p>class user</p>
                 <p>name:{name}</p>
                <p>location:{location}</p> 
            </div>
        )
    }
}
export default UserClass;