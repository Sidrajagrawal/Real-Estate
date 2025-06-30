// src/pages/PropertyDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from './BuyPage'; // Import property data
import './PropertyDetail.css';

const PropertyDetail = () => {
    const { id } = useParams();
    const property = properties.find(p => p.id === parseInt(id));

    if (!property) return <div>Property not found.</div>;

    return (
        <div className="PropertyDetail">
            <header className="DetailHeader">
                <Link to="/" className="BuyLogo">Banke Bihari Group</Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/buy">Back to Listings</Link>
                </nav>
            </header>

            <div className="DetailContainer">
                <img src={property.image} alt={property.title} className="DetailImage" />
                <div className="DetailContent">
                    <h1>{property.title}</h1>
                    <p><strong>Location:</strong> {property.location}</p>
                    <p><strong>Type:</strong> {property.type}</p>
                    <p><strong>Price:</strong> {property.price}</p>
                    <p><strong>Description:</strong> {property.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetail;
