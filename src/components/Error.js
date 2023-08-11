import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err =useRouteError();
    console.log(err);
    return(
        <>
        <h1>{err.status}</h1>
        <h3>Page {err.statusText}</h3>
        </>
    )
}
export default Error;