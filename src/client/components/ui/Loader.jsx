import React from 'react';
import RingLoader from "react-spinners/RingLoader";

const Loader = () => {
    return (
        <>
        <div className="row pt-4"></div>
        <div className="row pt-4"></div>
        <div className="row pt-4"></div>
        <div className="row pt-4"></div>
        <div className="d-flex justify-content-center"><RingLoader color="#000000" /></div>
        </>
    )
}

export default Loader;