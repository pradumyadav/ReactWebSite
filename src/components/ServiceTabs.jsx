// import { useState } from 'react';
// import TabButton from './TabButton ';
// import TabContent from './TabContent ';
import PropTypes from 'prop-types';

export default function ServiceTabs({ services }) {
    // const [activeTab, setActiveTab] = useState(services[0].title);

    // const openTab = (tabName) => {
    //     setActiveTab(tabName);
    // };

    return (
        <div className="w-full flex flex-col items-center justify-center gap-10">
            {/* <div className="flex flex-wrap border-b border-blue-200">
                {services.map((service) => (
                    <TabButton
                        key={service.title}
                        title={service.title}
                        activeTab={activeTab}
                        onClick={openTab}
                    />
                ))}
            </div>
            <div className={`${activeTab ? 'bg-gray-900' : ''}`}>
                {services.map(
                    (service) =>
                        activeTab === service.title && (
                            <TabContent
                                key={service.title}
                                title={service.title}
                                description={service.description}
                            />
                        )
                )}
            </div> */}
            <div className='grid grid-cols-4 gap-x-6 gap-y-10 w-full mb-10'>
                {services.map((service) => (
                    <div key={service.title} className='flex border-2 flex-col items-center justify-start gap-2 shadow-xl rounded-2xl w-full p-6 hover:scale-105 hover:shadow-2xl transition-all cursor-pointer'>
                        <img
                            src={service.image}
                            alt={service.title}
                            onError={(e) => {
                                e.target.src = '/assets/images/default-image.png';
                            }}
                        />
                        <h3 className='text-xl text-center font-bold'>{service.title}</h3>
                        <p className='text-center'>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

ServiceTabs.propTypes = {
    services: PropTypes.array.isRequired,
};