import PropTypes from 'prop-types';

export default function HeadingDescription({
    title,
    description,
    additionalFields,
    textSize = 'text-base',
    textColor = 'text-black',
}) {
    return (
        <div className="flex flex-col items-start justify-start gap-3">
            <h3 className="text-3xl font-semibold">{title}</h3>
            <p className={`"font-semibold ${textSize} ${textColor}`}>
                {description.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </p>
            {additionalFields}
        </div>
    );
}

HeadingDescription.propTypes = {
    title: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
    additionalFields: PropTypes.node,
    textSize: PropTypes.string,
    textColor: PropTypes.string,
};
