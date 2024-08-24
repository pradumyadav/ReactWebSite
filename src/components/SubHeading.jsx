import PropTypes from 'prop-types';

export default function SubHeading({ text }) {
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center text-center text-xl font-medium w-3/4 py-10 leading-6 font-sans">
                {text}
            </div>
        </div>
    );
}

SubHeading.propTypes = {
    text: PropTypes.string.isRequired,
}