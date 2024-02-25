// CardSection.js

import React from 'react';
import './CardSection.css'; // Import your CSS file
import serv1 from '../../assets/1.png'; // Import your image file

const CardSection = () => {
  return (
    <div className="card-section-unique">
      <div className="card-unique">
        <img src={serv1} alt="lol 1" className="card-image-unique" />
        <div className="tag">
            <p>20% Off</p> <p>Limited time</p>
        </div>
        <h2 className="card-name-unique">Webbuilder 1</h2>
        <p className="card-description-unique">Computer  Modern clasic with wix support</p>
        <p>$39.96</p>
        <div className="deal">
            <button className="view-deal-button-unique">View Deal</button>
        </div>
      </div>
      <div className="card-unique">
        <img src={serv1} alt="Imaglol 2" className="card-image-unique" />
        <div className="tag">
            <p>20% Off</p> <p>Limited time</p>
        </div>
        <h2 className="card-name-unique">Webbuilder 1</h2>
        <p className="card-description-unique">Computer  Modern clasic with wix support</p>
        <p>$39.96</p>
        <div className="deal">
            <button className="view-deal-button-unique">View Deal</button>
        </div>
      </div>
      <div className="card-unique">
        <img src={serv1} alt="Imaglol 3" className="card-image-unique" />
        <div className="tag">
            <p>20% Off</p> <p>Limited time</p>
        </div>
        <h2 className="card-name-unique">Webbuilder 1</h2>
        <p className="card-description-unique">Computer  Modern clasic with wix support</p>
        <p>$39.96</p>
        <div className="deal">
            <button className="view-deal-button-unique">View Deal</button>
        </div>
      </div>

   

    </div>
  );
};

export default CardSection;
