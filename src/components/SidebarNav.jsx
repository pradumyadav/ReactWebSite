import { useState } from 'react';
import PropTypes from 'prop-types';
import RightChevron from './RightChevron';

export default function SidebarNav({ title }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className="text-white text-lg text-left flex justify-between w-full hover:text-primary"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {title}
            <RightChevron color={isHovered ? '#00548F' : 'white'} />
        </button>
    );
}

SidebarNav.propTypes = {
    title: PropTypes.string,
};
