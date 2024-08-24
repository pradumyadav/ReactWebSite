const TabContent = ({ title, description }) => (
    <div id={title} className="p-12 bg-gray-200 shadow-md rounded-b-lg">
      <h3 className="text-2xl font-semibold text-blue-600 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );

  export default TabContent