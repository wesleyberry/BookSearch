import React from "react";
import "../ButtonStyle/style.css";
import "./style.css";

function Card({
    placeholder="https://via.placeholder.com/100",
    title,
    authors,
    description,
    image,
    link
    }) {
    return (
    <div className="card">
        <img className="card-img-top" src={image ? image : placeholder} alt={title} />
        <div className="card-body">
            <h5 className="card-title"><i>{title}</i></h5>
            <h5 className="card-title"><strong>Authors: </strong>{authors ? authors : "No authors found"}</h5>
            <p className="card-text"><strong>A description: </strong>{description ? description : "No description found"}</p>
            <a href={link} className="btn btn-primary" rel="noopener noreferrer" target="_blank">Check out {title}</a>
        </div>
    </div>
    );
};

export default Card;