import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FormContext } from '../context/FormContext';
import '../css/Header.css'

const HeaderComponent = () => {
    const { formData } = useContext(FormContext);

    return (
        <div className="header">
            <h1>
                <FontAwesomeIcon icon={faStar} size="2x" color="green" />
                {formData.name || 'Your Name'}
            </h1>
        </div>
    );
}

export default HeaderComponent;