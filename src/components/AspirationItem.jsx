import PropTypes from 'prop-types';

export default function AspirationItem({ title, items, order }) {
    return (
        <div className={`flex p-10 bg-dark-blue ${order} gap-10`}>
            <div className="lg:w-1/2 flex items-start flex-col justify-center lg:pr-8 mb-8 lg:mb-0">
                <div className="flex items-center mb-4">
                    <img
                        className="w-12 h-12 mr-4"
                        src="/assets/images/51.jpg"
                        alt="Goal icon"
                    />
                    <h3 className="text-2xl font-semibold text-white">
                        {title}
                    </h3>
                </div>
                <ul className="list-disc pl-5 space-y-4 text-white">
                    {Object.keys(items).map((key, index) => (
                        <li key={index}>
                            <strong className="text-yellow">{key}:</strong>
                            <p>{items[key]}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
                <img src="/assets/images/62.jpg" alt="Strategic Goals" />
            </div>
        </div>
    );
}

AspirationItem.propTypes = {
    title: PropTypes.string,
    items: PropTypes.object,
    order: PropTypes.string,
};
