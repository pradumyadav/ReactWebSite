import PropTypes from 'prop-types';

export default function DoubleCard({
    image,
    title,
    height = '110vh',
    description,
    order,
    additionalFields,
}) {
    return (
        <div
            className={`w-full ${order} flex items-center justify-center`}
            style={{ height }} // Apply height here
        >
            <div className="w-1/2 h-full flex flex-col items-start px-14 gap-5 justify-center">
                <h2 className="text-5xl font-baskervville">{title}</h2>
                <div className="flex flex-col items-start justify-start gap-3 text-sm">
                    {description.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
                {additionalFields}
            </div>
            <div className="w-1/2 h-full flex items-center justify-center overflow-hidden">
                <img
                    src={image}
                    alt=""
                    className="w-full cursor-pointer h-full object-cover hover:scale-105 transition-all"
                />
            </div>
        </div>
    );
}

DoubleCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    height: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
    order: PropTypes.string,
    additionalFields: PropTypes.node,
};

DoubleCard.defaultProps = {
    image: '',
    title: '',
    height: '110vh',
    description: [],
    order: '',
    additionalFields: null,
};
