// src/pages/BuyPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './BuyPage.css';
import img1 from '../../assets/BuyPage/img1.jpg';
import img2 from '../../assets/BuyPage/img2.jpeg';
import img3 from '../../assets/BuyPage/img3.webp';

const properties = [
    {
        id: 1,
        title: "Luxury Villa in Noida",
        price: "₹1.2 Cr",
        image: img1,
        location: "Sector 62, Noida",
        type: "Villa",
        description: "Beautiful luxury villa with pool and garden."
    },
    {
        id: 2,
        title: "2BHK Apartment in Gurugram",
        price: "₹75 Lakh",
        image: img2,
        location: "DLF Phase 3, Gurugram",
        type: "Apartment",
        description: "Spacious 2BHK with modern amenities and security."
    },
    {
        id: 3,
        title: "Commercial Plot in Delhi",
        price: "₹3 Cr",
        image: img3,
        location: "Connaught Place, Delhi",
        type: "Plot",
        description: "Prime location for office or retail setup."
    }
];

const BuyPage = () => {
    return (
        <div className="BuyPageContainer">
            <header className="BuyHeader">
                <Link to="/" className="BuyLogo">Banke Bihari Group</Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/sell">Sell</Link>
                </nav>
            </header>

            <section className="BuyIntro">
                <h1>Find Your Dream Property</h1>
                <p>Explore handpicked properties across India.</p>
            </section>

            <section className="BuyListings">
                {properties.map(property => (
                    <Link key={property.id} to={`/property/${property.id}`} className="BuyCardLink">
                        <div className="BuyCard">
                            <img src={property.image} alt={property.title} />
                            <div className="BuyCardInfo">
                                <h2>{property.title}</h2>
                                <p className="BuyLocation">{property.location}</p>
                                <p className="BuyType">{property.type}</p>
                                <p className="BuyPrice">{property.price}</p>
                                <button className="BuyBtn">View Details</button>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
        </div>
    );
};

export default BuyPage;
export { properties }; // export for use in detail page
