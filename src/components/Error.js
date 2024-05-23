import {useRouteError} from 'react-router-dom';
const Error = () => {
    const err = useRouteError();
    return (
        <div>
        <div>Oops !!! Something went wrong</div>
        <p>{err.status}:{err.statusText}</p>
        </div>
    )
}
export default Error;