import React from "react";

function Card({
    title,
    authors,
    description,
    image,
    link
    }) {
    return (
    <div className="card">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h5 className="card-title">{authors}</h5>
            <p className="card-text">{description}</p>
            <a href={link} class="btn btn-primary" rel="noopener noreferrer" target="_blank">Check out {title}</a>
        </div>
    </div>
    );
};

export default Card;