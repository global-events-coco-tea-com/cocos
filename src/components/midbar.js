// Imports
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { IoIosHeartEmpty } from 'react-icons/io';

// CSS
import './midbar.css';

const Midbar = () => {
  return (
    <div className="midbar">
      <button className="back-button">
        <FaChevronLeft className="back-icon" />
        <span className="back-text"> Back</span>
      </button>
      <button className="save-button">
        <IoIosHeartEmpty className="save-icon" />
        <span className="save-text"> Save</span>
      </button>
    </div>
  );
};

export default Midbar;