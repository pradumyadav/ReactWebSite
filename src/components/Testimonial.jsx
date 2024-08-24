import PropTypes from 'prop-types';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet cursus volutpat. Aliquam sit amet ligula et justo tincidunt laoreet non vitae lorem. Aliquam porttitor tellus enim, eget commodo augue porta ut. Maecenas lobortis ligula vel tellus sagittis ullamcorperv vestibulum pellentesque cursutu.",
    rating: 5,
    name: "Angela Cuevas",
    position: "Sony CEO",
    image: "https://via.placeholder.com/50"
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet cursus volutpat. Aliquam sit amet ligula et justo tincidunt laoreet non vitae lorem. Aliquam porttitor tellus enim, eget commodo augue porta ut. Maecenas lobortis ligula vel tellus sagittis ullamcorperv vestibulum pellentesque cursutu.",
    rating: 4.5,
    name: "Ronan Mckenzie",
    position: "Sony CEO",
    image: "https://via.placeholder.com/50"
  }
  
];

// TestimonialCard Component
const TestimonialCard = ({ text, rating, name, position, image }) => {
  return (
    <div className="bg-[#f6f6f6] p-6">
      <div className="mb-4 text-[#7e8a8d] text-2xl">
      <i className="fa-solid fa-message"></i>
      
            </div>
      <p className="text-[#7e8a8d] mb-4">{text}</p>
     
      <div className="flex mt-4">
        {[...Array(Math.floor(rating))].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="#7e8a8d" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.431L23.071 9.5l-5.704 5.556L18.974 24 12 19.882 5.027 24l1.607-8.943L.93 9.5l7.403-1.482z"/>
          </svg>
        ))}
        {rating % 1 !== 0 && (
          <svg className="w-5 h-5 text-yellow-400" fill="#7e8a8d" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.431L23.071 9.5l-5.704 5.556L18.974 24 12 19.882 5.027 24l1.607-8.943L.93 9.5l7.403-1.482z"/>
          </svg>
        )}
      </div>
      <div className="flex items-center py-8">
        <img className="w-12 h-12 rounded-full mr-4" src={image} alt={name} />
        <div>
          <p className="text-[#7e8a8d] font-semibold">{name}</p>
          <p className="text-gray-500 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

// Prop Validation for TestimonialCard
TestimonialCard.propTypes = {
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

// Testimonials Component
const Testimonials = () => {
  return (
    <section className="py-12 bg-[#f6f6f6]">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 sm:grid-cols-1">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
