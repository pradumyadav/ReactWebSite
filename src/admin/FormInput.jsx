import PropTypes from 'prop-types';

export default function FormInput({ title, type, value, onChange }) {
    return (
        <div className='flex flex-col items-start justify-start gap-1 w-full'>
            <label htmlFor={title} className="font-normal text-base font-poppins">
                {title}
            </label>
            <input type={type} id={title} value={value} onChange={onChange} className='border-2 rounded-lg h-10 w-full pl-3' placeholder={`Enter ${title}`} />
        </div>
    )
}

FormInput.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

FormInput.defaultProps = {
    title: '',
    type: 'text',
    value: '',
    onChange: () => { }
}
