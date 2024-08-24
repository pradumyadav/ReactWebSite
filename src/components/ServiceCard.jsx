
import propTypes from 'prop-types';
const ServiceCard = ({ title, description }) => (
    <div className=" w-[60%]flex flex-col mb-2  p-8 hover:shadow-2xl transition-all duration-300 ease-in rounded-3xl">
      <h3 className="text-[24px] font-semibold text-blue-600 mb-2">
        {title}
      </h3>
      <p className="text-[19px] text-gray-500">{description}</p>
    </div>
  );

  export default ServiceCard ;

  ServiceCard.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  }