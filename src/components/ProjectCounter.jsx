import React, { useState, useRef, useEffect } from 'react';
import useCountUp from '../hooks/usCountUp';
// import useCountUp from '../hooks/useCountUp'; // Adjust the import path if necessary

const BusinessAchievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const happyCustomers = useCountUp(50, 2000, isVisible);
  const workQuality = useCountUp(100, 2000, isVisible);
  const awardWinners = useCountUp(65, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current); // Unobserve once visible
        }
      },
      {
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="text-black bg-[#f8fafc] py-16 px-4 flex items-center justify-center text-center w-full h-[80vh] relative"
    >
      <div className="flex items-center justify-center w-[50%]">
        <img className="w-full" src="/assets/images/counterbg.webp" alt="Background"></img>
      </div>
      <div className="w-full top-[35%] right-0 absolute z-10">
        <h2 className="text-6xl font-bold mb-6">Join Us And Achieve Business Goal</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="py-8 flex flex-col md:flex-row justify-around space-y-8 md:space-y-0">
          <div>
            <h3 className="text-5xl font-thin mb-2 text-blue-500">+{happyCustomers.toLocaleString()}</h3>
            <p className="text-xl">Project Delivered</p>
          </div>
          <div className="w-[1px] bg-gray-300"></div>
          <div>
            <h3 className="text-5xl font-thin mb-2 text-blue-500">{workQuality}%</h3>
            <p className="text-xl">Work Quality</p>
          </div>
          <div className="w-[2px] bg-gray-300"></div>
          <div>
            <h3 className="text-5xl font-thin mb-2 text-blue-500">+{awardWinners}</h3>
            <p className="text-xl">Award Winner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAchievements;
