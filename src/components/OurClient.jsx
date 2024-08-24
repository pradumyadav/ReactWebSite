export default function OurClient() {
    // Create an array of image paths
    const imagePaths = Array.from({ length: 31 }, (_, i) => `/assets/images/clientlogo/${i + 1}.png`);
  
    return (
      <div className="relative overflow-hidden py-8 flex justify-center items-center">
        <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-l from-transparent to-white z-10"></div>
        <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-r from-transparent to-white z-10"></div>
        <div className="flex animate-slide space-x-4">
          {imagePaths.map((src, index) => (
            <img
              key={`logo-${index}`}
              src={src}
              alt={`Client Logo ${index + 1}`}
              className="h-32"
            />
          ))}
        </div>
      </div>
    );
  }
  