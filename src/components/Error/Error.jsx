import { Link, useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError();
    
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-8xl text-red-500 font-semibold mb-8">Oops! :(</h1>
            <h3 className="text-xl font-semibold mb-6">Error: {error.status} Page {error.statusText}</h3>
            <Link to={-1}><button className="btn bg-orange-500 text-xl font-bold text-white">Go Back!</button></Link>
        </div>
    );
};

export default Error;