import PropTypes from 'prop-types';

export default function BulletSection({
    title,
    description,
    textSize = 'text-sm',
    textColor = 'text-black',
}) {
    return (
        <div className="flex flex-col items-start justify-start">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <ul className={`list-disc pl-5 ${textSize} ${textColor}`}>
                {description.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li>
                ))}
            </ul>
        </div>
    );
}

BulletSection.propTypes = {
    title: PropTypes.string,
    description: PropTypes.array,
    textSize: PropTypes.string,
    textColor: PropTypes.string,
};