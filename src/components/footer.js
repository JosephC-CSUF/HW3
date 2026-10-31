import React from "react";
import "../App.css";

function Button({onClick, children}) {
    return (
        <button onClick={onClick}>{children}</button>
    );
}

function PreviousPage() {
    function handleClick(){
        alert('Previous page');
    }

    return (
        <Button onClick={handleClick()}>
            Prev
        </Button>
    );
}

function NextPage(){
    return(
            <Button onClick={() => alert("Next Page")}>
                Next
            </Button>
    );
}

export default function Footer() {
    return (
        <div className="footer">
            <PreviousPage />
            X of Y pages
            <NextPage />   
        </div>
    );
}
