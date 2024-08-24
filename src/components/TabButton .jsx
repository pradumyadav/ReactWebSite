const TabButton = ({ title, activeTab, onClick }) => (
  <button
      className={`px-6 py-3 text-sm font-bold tracking-wide transition-all duration-1000 mr-3 rounded-t-2xl border-b-2 focus:outline-none relative overflow-hidden ${
          activeTab === title
              ? 'text-white border-blue-500'
              : 'text-gray-700 border-transparent hover:text-blue-550 hover:border-blue-300'
      }`}
      onClick={() => onClick(title)}
  >
      <span className="relative z-10">{title}</span>
      <div
          className={`absolute inset-0  bg-blue-600 transition-transform duration-500 ease-in-out ${
              activeTab === title ? 'translate-y-0' : 'translate-y-full'
          }`}
      ></div>
  </button>
);

export default TabButton;