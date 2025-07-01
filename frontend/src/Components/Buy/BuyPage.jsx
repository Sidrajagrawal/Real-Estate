import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BuyPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BuyPage = () => {
    const navigate = useNavigate();
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/property/buy/')
            .then(res => setProperties(res.data))
            .catch(err => console.error("Error fetching properties", err));
    }, []);
    const handleSellClick = () => {
        const token = localStorage.getItem('access');

        if (!token) {
            alert('Please login first to post your property.');
            navigate('/login');
        } else {
            navigate('/sell');
        }
    };

    return (
        <div className="BuyPageContainer">
            <header className="BuyHeader">
                <Link to="/" className="BuyLogo">Banke Bihari Group</Link>
                <div>
                    <Link to="/">Home</Link>
                    <div onClick={handleSellClick} className='Sellbtn'>Sell</div>
                </div>
            </header>

            <section className="BuyIntro">
                <h1>Find Your Dream Property</h1>
                <p>Explore handpicked properties across India.</p>
            </section>

            <section className="BuyListings">
                {properties.length === 0 ? (
                    <p>No properties available yet.</p>
                ) : (
                    properties.map(property => (
                        <Link key={property.id} to={`/property/${property.id}`} className="BuyCardLink">
                            <div className="BuyCard">
                                {property.images ? (
                                    <img src={
                                        property.images.startsWith("http")
                                            ? property.images
                                            : `http://localhost:8000${property.images.startsWith("/") ? "" : "/"}${property.images}`} alt={property.title} />
                                ) : (
                                    <div className="no-image">No Image</div>
                                )}
                                <div className="BuyCardInfo">
                                    <h2>{property.title}</h2>
                                    <p className="BuyLocation">{property.city}, {property.locality}</p>
                                    <p className="BuyType">{property.property_type}</p>
                                    <p className="BuyPrice">₹{property.price}</p>
                                    <button className="BuyBtn">View Details</button>
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </section>
        </div>
    );
};

export default BuyPage;
