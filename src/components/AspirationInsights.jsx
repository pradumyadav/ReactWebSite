import PropTypes from 'prop-types';

export default function AspirationInsights({ title, items }) {
    return (
        <div className="w-4/5 max-w-5xl">
            <h2 className="text-4xl font-semibold mb-8 border-b-2 border-gray-800 pb-4">
                {title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all"
                    >
                        <img
                            // src={item.image}
                            src='/assets/images/86.jpg'
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {item.description}
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                Read more →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

AspirationInsights.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
};
