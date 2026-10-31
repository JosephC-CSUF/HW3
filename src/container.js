import React from 'react';
import MovieDetails from "../src/apiCall.js";

const Container = ({data}) => {
    const result = data;
    console.log(result);
    return(
                <div className="masterContainer">
                <img src={result} alt=""/>
                <p className="title">
                    {result}
                </p>
                <p></p>
                <p></p>
            </div>
    );
};

export default Container;