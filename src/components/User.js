import { useState } from "react";

const User = (props) =>{
    const {name, location} = props;
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    return(
        <div>
        <h1>Count:{count}</h1>
        <h1>Count:{count2}</h1>
            <p>functional user</p>
            <p>name:{name}</p>
            <p>location:{location}</p>
        </div>
    )
}
export default User;