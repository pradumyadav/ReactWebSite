import PropTypes from 'prop-types';

export default function FormSelect({ title, name, data, onChange, value }) {
    return (
        <div className='flex flex-col items-start justify-start gap-1 w-full'>
            <label htmlFor={name} className="font-normal text-base font-poppins">
                {title}
            </label>
            <select name={name} id={name} value={value} onChange={onChange} className='border-2 rounded-lg h-10 w-full pl-3'>
                <option value="">{title}</option>
                {data.map((item) => (
                    <option key={item._id} value={item._id}>{item.title}</option>
                ))}
            </select>
        </div>
    )
}

FormSelect.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    data: PropTypes.array,
    onChange: PropTypes.func,
    value: PropTypes.string
}

FormSelect.defaultProps = {
    title: '',
    name: '',
    data: [],
    onChange: () => { },
    value: ''
}
