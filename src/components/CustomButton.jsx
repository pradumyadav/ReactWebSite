import PropTypes from 'prop-types';

export default function CustomButton({ title, customStyles }) {
    return (
        <button
            className={`${customStyles} w-auto h-auto px-5 py-2 font-semibold rounded-lg`}
        >
            {title}
        </button>
    );
}

CustomButton.propTypes = {
    title: PropTypes.string.isRequired,
    customStyles: PropTypes.string.isRequired,
};
