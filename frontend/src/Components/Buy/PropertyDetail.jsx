import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './PropertyDetail.css';

const PropertyDetail = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [showPhone, setShowPhone] = useState(false);
    const [showEmail, setShowEmail] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/property/property/${id}/`)
            .then(res => setProperty(res.data))
            .catch(err => console.error("Property not found", err));
    }, [id]);

    if (!property) return <div>Loading property...</div>;

    const imageUrl = property.images?.startsWith('http')
        ? property.images
        : `http://localhost:8000/api/property/${property.images.startsWith('/') ? '' : '/'}${property.images}`;

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
                {property.images ? (
                    <img
                        src={imageUrl}
                        alt={property.title}
                        className="DetailImage"
                    />
                ) : (
                    <div className="no-image">No Image</div>
                )}
                <div className="DetailContent">
                    <h1>{property.title}</h1>
                    <p><strong>Location:</strong> {property.city}, {property.locality}</p>
                    <p><strong>Type:</strong> {property.property_type}</p>
                    <p><strong>Size:</strong> {property.size_sqft} sqft</p>
                    <p><strong>Price:</strong> ₹{property.price}</p>
                    <p><strong>Construction:</strong> {property.construction_status}</p>
                    <p><strong>Age:</strong> {property.age_of_property}</p>
                    <p><strong>Bedrooms:</strong> {property.bedrooms || 'N/A'}</p>
                    <p><strong>Bathrooms:</strong> {property.bathrooms || 'N/A'}</p>
                    <p><strong>Description:</strong> {property.description}</p>

                    <div className="contact-buttons">
                        <button onClick={() => setShowPhone(!showPhone)}>
                            {showPhone ? 'Hide Contact' : 'Contact'}
                        </button>
                        {showPhone && <p><strong>Phone:</strong> {property.seller_contact}</p>}

                        <button onClick={() => setShowEmail(!showEmail)}>
                            {showEmail ? 'Hide Email' : 'Get Email'}
                        </button>
                        {showEmail && <p><strong>Email:</strong> {property.seller_email}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetail;
