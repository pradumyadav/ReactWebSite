import PropTypes from 'prop-types';

const SingleInfoCard = ({ image, title, subtitle, description, order }) => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center py-10 gap-2">
            <h2 className="text-4xl font-serif uppercase">{title}</h2>
            <div className="w-28 h-0.5 bg-blue-500" />
            <div
                className={`w-[70%] h-full ${order} flex justify-center overflow-hidden`}
            >
                <div className="h-4/5 w-1/2 shadow-xl rounded-2xl overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer"
                    />
                </div>
                <div className="w-1/2 h-full flex flex-col items-start p-14 gap-4 justify-center">
                    {subtitle && (
                        <p className="text-sm text-gray-600">{subtitle}</p>
                    )}
                    <div className="mt-5 space-y-4">
                        {description.map((item, index) => (
                            <p key={index} className="text-base">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleInfoCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    order: PropTypes.string,
};

export default SingleInfoCard;
