import PropTypes from 'prop-types';

export default function Industries({ image, title, titletext, link, order, subtitle, icons, text }) {
    return (
        <div
            className={`w-full h-[80vh] flex ${order} items-center justify-center bg-slate-50`}
        >
            <img
                src={image}
                alt={title}
                className="w-1/2 h-full object-cover"
            />
            <div className="flex flex-col items-center justify-center w-1/2 h-full">
                <div className="w-[80%] h-[70%] flex flex-col items-start justify-start gap-5">
                    <h2 className="text-6xl font-bold font-baskervville">
                        {title}
                    </h2>
                    <p className="font-normal text-base text-left">{titletext}</p>

                    <div className="flex flex-col items-start justify-start gap-5">
                        {subtitle.map((sub, index) => (
                            <a href={link[index]} key={index} target="_blank" rel="noopener noreferrer" className='w-full'>
                                <div className="flex items-center justify-start gap-5 shadow-md p-3 className='w-full'">
                                    <div className="icon flex items-center justify-start">
                                        {icons[index] && (
                                            <img src={icons[index]} alt={`${sub} icon`} className="h-8 w-8"/>
                                        )}
                                    </div>
                                    <div className="flex flex-col items-start justify-start gap-1">
                                        <h3 className="text-2xl font-semibold font-baskervville">
                                            {sub}
                                        </h3>
                                        <p className="font-normal text-base text-left">
                                            {text[index]}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

Industries.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    titletext: PropTypes.string.isRequired,
    text: PropTypes.array.isRequired,
    link: PropTypes.array.isRequired,
    order: PropTypes.string,
    subtitle: PropTypes.array.isRequired,
    icons: PropTypes.array.isRequired,
};
