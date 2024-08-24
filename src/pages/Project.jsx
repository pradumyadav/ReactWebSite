import { useState } from 'react';
import AboutNavbar from '../components/AboutNavbar';
import Footer from '../components/Footer';
import vid1 from '/assets/images/344.mp4';
import AboutVideo from '../components/AboutVideo';
import TechnicalConsulting from '../components/TechnicalConsulting';
import ManpowerPlanning from '../components/ManpowerPlanning';
import ProcessFlow from '../components/ProcessFlow';
import MaterialFlow from '../components/MaterialFlow';
import WarehouseSolutions from '../components/WarehouseSolutions';
import PlantLayout from '../components/PlantLayout';

export default function Project() {
    const services = [
        {
            title: 'Workflow Optimization',
            description:
                'To minimize material handling and reduce production time, start by analyzing your current workflow to identify inefficiencies and bottlenecks. Design a lean layout that places workstations in a sequence that minimizes movement and proximity-related delays. ',
        },
        {
            title: 'Space Utilization',
            description:
                'To maximize available space for machinery, storage, and workstations while allowing for future expansion, first conduct a space audit to identify current usage and constraints. Design a flexible layout using modular equipment and vertical storage solutions to optimize floor space.',
        },
        {
            title: 'Material Handling',
            description:
                'Facilitating smooth and efficient movement of materials involves strategically implementing equipment such as conveyors and forklifts to streamline operations. Conveyors should be used to automate the transport of materials between workstations. ',
        },
        {
            title: 'Safety and Ergonomics',
            description:
                'Ensuring a safe working environment involves providing ample space for movement and adhering to ergonomic principles in workstation design This means designing work areas with sufficient clearance for easy access and safe navigation',
        },
        {
            title: 'Environmental Factors',
            description:
                'Managing temperature, humidity, lighting, and noise levels is crucial for creating a comfortable working environment. Maintain an optimal temperature and humidity level through effective HVAC systems to ensure employee comfort and prevent ',
        },
        {
            title: 'Maintenance Access',
            description:
                'Designing layouts with easy access to machines and equipment is crucial for efficient maintenance and repairs. By strategically placing machinery in accessible locations and allowing adequate space around them, businesses can minimize downtime and ensure that routine ',
        },
        {
            title: 'Utility Services',
            description:
                'Optimizing the use of utilities like electricity, water, and compressed air is essential for reducing energy consumption and operational costs. By implementing energy-efficient technologies, monitoring usage, and minimizing waste.',
        },
        {
            title: 'Inventory Management',
            description:
                'Efficient inventory management is key to reducing costs and ensuring a smooth production process. By maintaining optimal stock levels, businesses can minimize carrying costs, reduce waste, and avoid production delays due to stockouts.',
        },
    ];

    const [activeTab, setActiveTab] = useState('London');

    const openCity = (cityName) => {
        setActiveTab(cityName);
    };
    return (
        <>
            <AboutNavbar />
            <AboutVideo
                vid1={vid1}
                title={''}
                des={''}
            />
            <PlantLayout />
            <TechnicalConsulting />
            <ManpowerPlanning />
            <ProcessFlow />
            <MaterialFlow />
            <WarehouseSolutions />
            <Footer />
        </>
    );
}
