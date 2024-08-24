import PropTypes from 'prop-types';

const UpcomingEvents = ({ image, title, description, date, comments, readMoreLink }) => {
  return (
    <div className="max-w-md flex items-center justify-center mx-auto bg-white  shadow-md overflow-hidden ">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <img className="h-50 w-full object-cover" src={image} alt={title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{date}</div>
          <h3 className="block mt-1 text-lg leading-tight font-bold text-black">{title}</h3>
          <p className="mt-2 text-gray-500">{description}</p>
          <div className="mt-4 flex items-center">
            <span className="text-gray-500">{comments} Comments</span>
          </div>
          <div className="mt-4">
            <a href={readMoreLink} className="text-indigo-600 hover:text-indigo-900">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
UpcomingEvents.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    comments: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    readMoreLink: PropTypes.string.isRequired,
  };
  