import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SellPage.css';

const SellPage = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        if (step < 5) setStep(step + 1);
    };

    const handlePrevious = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className='SellPageDiv'>
            <div className="Sellnavbar">
                <div className="Sellleft">
                    <Link to="/" className='Selllogo'>Banke Bihari Group</Link>
                </div>
                <div className="Sellright">
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/buy">Buy</Link>
                    </nav>
                </div>
            </div>

            <div className="SellForm">
                <div className="StatusBar">
                    {['Property Info', 'Address', 'Property Features', 'Photos', 'Review & Submit'].map((label, i) => {
                        const isActive = step === i + 1;
                        const isCompleted = step > i + 1;

                        return (
                            <div key={i} className="status-step">
                                <div className={`radio ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
                                    {isCompleted ? '✓' : i + 1}
                                </div>
                                <label>{label}</label>
                            </div>
                        );
                    })}
                </div>


                {/* STEP 1 */}
                <div className={`BasicPropertyInfo slide-form ${step === 1 ? 'active' : ''}`}>
                    <div className="heading-1">Basic Property Detail</div>
                    <table>
                        <tr><td className='td-1'>Property Title*</td><td><input type="text" placeholder='Title'/></td></tr>
                        <tr><td className='td-1'>Property Type*</td>
                            <td className='td-btn'>
                                <button>House</button>
                                <button>Apartment</button>
                                <button>Plot</button>
                                <button>Commercial</button>
                            </td>
                        </tr>
                        <tr><td className='td-1'>Size of Property*</td><td><input type="text" placeholder='In Sq feet' /></td></tr>
                        <tr><td className='td-1'>Number of Bedrooms <span>(if Plot Skip)</span></td><td><input type="number"  placeholder='Bedrooms'/></td></tr>
                        <tr><td className='td-1'>Number of Bathrooms <span>(if Plot Skip)</span></td><td><input type="number" placeholder='Bathrooms'/></td></tr>
                        <tr><td className='td-1'>Furnishing Status <span>(if Plot Skip)</span></td>
                            <td>
                                <select>
                                    <option>Select</option>
                                    <option>Furnished</option>
                                    <option>Semi-Furnished</option>
                                    <option>Unfurnished</option>
                                </select>
                            </td>
                        </tr>
                        <tr><td className='td-1'>Price*</td><td><input type="text" placeholder='In Rupees' /></td></tr>
                        <tr><td></td><td><button className='Next' onClick={handleNext}>Next</button></td></tr>
                    </table>
                </div>

                {/* STEP 2 */}
                <div className={`BasicPropertyInfo slide-form ${step === 2 ? 'active' : ''}`}>
                    <div className="heading-1">Location Details</div>
                    <table>
                        <tr><td className='td-1'>City*</td><td><input type="text" placeholder='City'/></td></tr>
                        <tr><td className='td-1'>Locality / Area*</td><td><input type="text" placeholder='Area'/></td></tr>
                        <tr><td className='td-1'>Full Address*</td><td><input type="text" placeholder='Address'/></td></tr>
                        <tr><td className='td-1'>PIN Code*</td><td><input type="text" placeholder='PIN Code'/></td></tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className='Prev' onClick={handlePrevious}>Previous</button>
                                <button className='Next' onClick={handleNext}>Next</button>
                            </td>
                        </tr>
                    </table>
                </div>

                {/* STEP 3 */}
                <div className={`BasicPropertyInfo slide-form ${step === 3 ? 'active' : ''}`}>
                    <div className="heading-1">Property Features</div>
                    <table>
                        <tr><td className='td-1'>Construction Status*</td>
                            <td>
                                <select>
                                    <option>Select</option>
                                    <option>Ready to Move</option>
                                    <option>Under Construction</option>
                                </select>
                            </td>
                        </tr>
                        <tr><td className='td-1'>Age of Property*</td>
                            <td>
                                <select>
                                    <option>Select</option>
                                    <option>New</option>
                                    <option>Less than 5 years</option>
                                    <option>5-10 years</option>
                                    <option>10+ years</option>
                                </select>
                            </td>
                        </tr>
                        <tr><td className='td-1'>Floor Number*</td><td><input type="number" placeholder='Floor No:'/></td></tr>
                        <tr><td className='td-1'>Total Floors*</td><td><input type="number" placeholder='Total Floors'/></td></tr>
                        <tr><td className='td-1'>Parking Available*</td>
                            <td>
                                <select>
                                    <option>Select</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className='Prev' onClick={handlePrevious}>Previous</button>
                                <button className='Next' onClick={handleNext}>Next</button>
                            </td>
                        </tr>
                    </table>
                </div>

                {/* STEP 4 */}
                <div className={`BasicPropertyInfo slide-form ${step === 4 ? 'active' : ''}`}>
                    <div className="heading-1">Upload Property Photos</div>
                    <table>
                        <tr><td className='td-1'>Upload Images*</td><td><input type="file" multiple /></td></tr>
                        <tr><td className='td-1'>Upload Floor Plan</td><td><input type="file" /></td></tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className='Prev' onClick={handlePrevious}>Previous</button>
                                <button className='Next' onClick={handleNext}>Next</button>
                            </td>
                        </tr>
                    </table>
                </div>

                {/* STEP 5 */}
                <div className={`BasicPropertyInfo slide-form ${step === 5 ? 'active' : ''}`}>
                    <div className="heading-1">Seller Info & Submit</div>
                    <table>
                        <tr><td className='td-1'>Your Name*</td><td><input type="text" placeholder='Name'/></td></tr>
                        <tr><td className='td-1'>Contact Number*</td><td><input type="text" placeholder='Contact Number'/></td></tr>
                        <tr><td className='td-1'>Email*</td><td><input type="email" placeholder='Email'/></td></tr>
                        <tr><td className='td-1'>Seller Type*</td>
                            <td>
                                <select>
                                    <option>Select</option>
                                    <option>Owner</option>
                                    <option>Agent</option>
                                    <option>Builder</option>
                                </select>
                            </td>
                        </tr>
                        <tr><td className='td-1'>Property Description*</td><td><textarea rows="3" placeholder='Description'></textarea></td></tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className='Prev' onClick={handlePrevious}>Previous</button>
                                <button className='Next'>Submit</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SellPage;
