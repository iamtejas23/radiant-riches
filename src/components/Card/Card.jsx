import React from 'react';
import './Card.css'; // Assuming you have a CSS file for styling
import rating from '../../assets/rating.png'; // Assuming you have an image file for the rating
import serv1 from '../../assets/1.png'; // Assuming you have an image file for the service


const Card = () => {
    return (
        <div>
            <div className="card">
                <div className="section">
                    <div className="service-app">
                    <img className='service-img' src={serv1} alt="serv" />
                <p>Builder 1</p> 
                    </div>
                </div>
                <div className="section"><b>WixPro 72-Inch Responsive Website Builder</b>- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue) <br />
                <b>Main highlights</b> [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</div>
                <div className="section">

                <div className='rating'>
                <p>9.8 </p>
                Exceptional
                <img src={rating} alt="stars" />
                <div className="button">
                    View
                </div>
                </div>

                </div>
            </div>
            <div className="card">
                <div className="section"><div className="service-app">
                    <img className='service-img' src={serv1} alt="serv" />
                <p>Builder 1</p> 
                    </div></div>
                <div className="section"><b>SiteCraft 68-Inch Ultimate Web Design Studio-</b> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White) <br />
                 <b>Main highlights</b> <br />
                 <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                 </div>
                <div className="section"><div className='rating'>
                <p>9.5 </p>
                Exceptional
                <img src={rating} alt="stars" />
                <div className="button">
                    View
                </div>
                </div></div>
            </div>
            <div className="card">
                <div className="section"><div className="service-app">
                    <img className='service-img' src={serv1} alt="serv" />
                <p>Builder 1</p> 
                    </div></div>
                <div className="section"><b>WixPro 72-Inch Responsive Website Builder-</b> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue) <br />
                <b>Main highlights</b> <br />
                <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                </div>
                <div className="section"><div className='rating'>
                <p>9.3 </p>
                Exceptional
                <img src={rating} alt="stars" />
                <div className="button">
                    View
                </div>
                </div></div>
            </div>
        </div>
    );
};

export default Card;
