import PropTypes from 'prop-types';

export default function LatestNews({ details1 }) {
    return (
        <div className="font-sans max-w-screen-xl mx-auto p-10 bg-white">
            <header className="text-center font-bold mb-10 text-2xl">
                WEEKLY UPDATES
            </header>

            <div className="bg-blue-100 flex p-16 mb-10 items-center">
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src={details1.img}
                        alt="Sustainable growth lightbulb"
                        className="w-full max-w-xs"
                    />
                </div>

                <div className="flex-2 pl-16 text-4xl font-bold mb-6 text-justify">
                    <h2 className="font-baskerville">{details1.title}</h2>
                    <a
                        href="#"
                        className="text-blue-600 no-underline text-2xl font-baskerville"
                    >
                        Watch the video series →
                    </a>
                </div>
            </div>
        </div>
    );
}

LatestNews.propTypes = {
    details1: PropTypes.object,
};

LatestNews.defaultProps = {
    details1: {},
};
