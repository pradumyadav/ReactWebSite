
import { ShareIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DomainURL from '../pages/DomainURL';
export default function BlogCards({ image, date, title, des, link, url, index }) {

    const createLink = (link) => {
        return `/show-blog/${link}`;
    }


    const handleCopy = (url) => {
        const currentUrl = DomainURL();
        return navigator.clipboard.writeText(`${currentUrl}${url}`);
    }

    return (
        <>
            <div key={index} className="max-w-sm  rounded-2xl overflow-hidden hover:scale-105 bg-white shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
                <div className='flex flex-col items-center justify-center h-52 overflow-hidden'>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-52 object-cover transition-all duration-300 cursor-pointer hover:scale-110"
                    />
                </div>
                <div className="px-4 flex flex-col items-start justify-start gap-2 py-4">
                    <span className='text-sm text-slate-700'>
                        {date}
                    </span>
                    <h2 className="font-bold text-xl mb-3 text-gray-800  cursor-pointer  hover:text-blue-700 leading-tight">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {des}
                    </p>
                    <div className="flex items-center justify-between w-full">
                        <Link to={createLink(url)} className="text-blue-600 flex gap-1 hover:gap-6 transition-all duration-300 hover:text-blue-800 text-sm font-semibold ease-in-out">
                            <span>
                                Read More
                            </span>
                            <span>
                                →
                            </span>
                        </Link>
                        <button type="button" onClick={() => handleCopy(createLink(url))} className="bg-blue-50 shadow-xl border-1 border-gray-500 p-2 rounded-full text-black transition-all duration-150 ease-in-out hover:scale-110">
                            <ShareIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


BlogCards.propTypes = {
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    des: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}
