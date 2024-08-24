import React from 'react';
import PropTypes from 'prop-types';

export default function IndustriesLi({ industries = [] }) {
    if (!industries || industries.length === 0) {
        return null; 
    }

    return (
        <>
            {industries.map((industry, index) => (
                <li key={index} className="text-lg text-gray-700  list-disc">
                    {industry}
                </li>
            ))}
        </>
    );
}

IndustriesLi.propTypes = {
    industries: PropTypes.arrayOf(PropTypes.string),
};