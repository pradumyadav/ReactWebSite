import PropTypes from 'prop-types';

const InfoCard = ({ image, title, subtitle, description, order }) => {
    return (
        <div className="w-full h-auto flex items-center justify-center py-5">
            <div
                className={`w-[90%] h-full ${order} flex justify-center overflow-hidden`}
            >
                <div className="h-4/5 w-1/2  flex items-center justify-center overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-[80%] h-[80%] object-cover rounded-2xl  transition-all duration-300 cursor-pointer"
                    />
                </div>
                <div className="w-1/2 h-full flex flex-col items-start p-10 gap-4 justify-center">
                    <h2 className="text-4xl font-serif uppercase">{title}</h2>
                    {subtitle && (
                        <p className="text-sm text-gray-600">{subtitle}</p>
                    )}
                    <div className="w-28 h-0.5 bg-blue-500" />
                    <div className="mt-5 space-y-4">
                        {description.map((item, index) => (
                            <p key={index} className="text-base text-gray-600">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

InfoCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    order: PropTypes.string,
};

export default InfoCard;
