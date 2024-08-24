import { useEffect, useState } from 'react'
import BaseURL from './BaseURL';
import axios from 'axios';
import Footer from '../components/Footer';
import BlogCards from '../components/BlogCards';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutNavbar from '../components/AboutNavbar';

export default function Events() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        getEvents();
    }, []);

    const getEvents = async () => {
        const response = await axios.get(`${BaseURL()}/api/blog/getEvents`);
        console.log('response', response.data.events);
        setEvents(response.data.events);
    }

    return (
        <>
            <AboutNavbar />
            <div className=' bg-[#f0f0f0]'>
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="mb-8">
                        <Link
                            to="#"
                            className="text-[#333333] hover:text-gray-800 flex items-center"
                        >
                            <ArrowLeftIcon className="h-4 w-4 mr-1" />
                            Back to About Us
                        </Link>
                    </div>

                    <h1 className="text-7xl font-serif font-extrabold text-gray-700 mb-7">
                        New at MADASKY Blog
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        A collection of stories about our people, our capabilities,
                        our research, and the ever-changing face of our firm.
                    </p>
                    <div className="border-2 border-slate-300"></div>
                    <div className='pt-8 grid grid-cols-3 gap-8 '>
                        {
                            events.map((blog, index) => (
                                <BlogCards key={index} {...blog} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
