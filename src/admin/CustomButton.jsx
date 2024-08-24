import PropTypes from 'prop-types';

export default function CustomButton({ title, onclick }) {
    return (
        <button type='submit' onClick={onclick} className='mt-5 rounded-lg text-white bg-primary px-4 py-2 font-semibold font-poppins'>
            {title}
        </button>
    )
}

CustomButton.propTypes = {
    title: PropTypes.string,
    onclick: PropTypes.func
}

CustomButton.defaultProps = {
    title: '',
    onclick: () => { }
}