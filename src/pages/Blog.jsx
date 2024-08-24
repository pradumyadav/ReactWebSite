import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import AboutNavbar from '../components/AboutNavbar';
import BlogCards from '../components/BlogCards';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BaseURL from './BaseURL';

export default function Blog() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        const response = await axios.get(`${BaseURL()}/api/blog/getPosts`);
        setBlogs(response.data.posts);
    }

    const dataArray = [
        {
            image: '/assets/images/199.jpg',
            date: 'Mar 16, 2024',
            title: 'How to Declutter Your Wardrobe Like a Pro: Mastering Wardrobe Organisation',
            des: "Learn how to declutter your wardrobe like a pro with these expert tips. From...",
            link: '/'
        },
        {
            image: '/assets/images/203.jpg',
            date: 'Mar 16, 2024',
            title: 'Unlocking the Power of Growth: The Essential Guide for Business Leaders',
            des: "In the dynamic and competitive landscape of today’s global economy, business growth is not just a desirable goal; it’s an essential element for survival and long-term success. Every entrepreneur and business owner dreams of seeing their enterprise flourish and...",
            link: '/'
        },
        {
            image: '/assets/images/196.jpg',
            date: 'Mar 16, 2024',
            title: 'Unlocking Your Sales Potential: A Journey of 12 Weeks',
            des: "In today’s competitive market, excelling in sales requires more than just enthusiasm and a good pitch. It demands a structured approach to skill enhancement, strategic thinking, and technique refinement. To address these needs, we present the 12-Week Sales Masterclass—an...",
            link: '/'
        },
        {
            image: '/assets/images/215.jpg',
            date: 'Mar 16, 2024',
            title: 'Strategizing Sales Growth: Accelerating Revenue Generation',
            des: "nnovex (name changed for confidentiality), a manufacturing company, encountered significant challenges in scaling their operations and optimizing sales outcomes. In partnership with Madasky Consulting,  Innovex embarked on an extensive transformation of their sales and marketing strategies. This case study...",
            link: '/'
        },

        {
            image: '/assets/images/211.jpg',
            date: 'Mar 16, 2024',
            title: 'Optimising Production Efficiency And Introducing A New Product Line',
            des: "The multifaceted consultancy services provided by MADASKY to ABC International (a leading player in home textile manufacturing, name kept confidential) aimed at overhauling their production capabilities and operational strategies, especially in the complex textiles manufacturing sector. Faced with escalating...",
            link: '/'
        },
        {
            image: '/assets/images/213.jpg',
            date: 'Mar 16, 2024',
            title: 'Navigating Challenges and Strategies for On-Time Delivery in New Product Development',
            des: "The term “On-Time Delivery” (OTD) often conjures up images of precision, punctuality, and the seamless execution of plans. In industries such as manufacturing or retail, OTD is a critical performance metric that reflects a company’s efficiency and reliability in...",
            link: '/'
        },
        {
            image: '/assets/images/207.jpg',
            date: 'Mar 16, 2024',
            title: 'MADASKY Consulting – Driving Manufacturing Excellence Through Strategic Planning.',
            des: "In today’s dynamic business landscape, manufacturing industries face unprecedented challenges and opportunities. To navigate these complexities and achieve sustainable growth, strategic planning becomes imperative. MADASKY Consulting specializes in offering planning services tailored to the unique needs of manufacturing companies....",
            link: '/'
        },
        {
            image: '/assets/images/192.jpg',
            date: 'Mar 16, 2024',
            title: 'Transforming Businesses: A Comprehensive Guide to Our Consultancy Services',
            des: "In an age where change is the only constant, businesses are required to continually innovate and adapt to maintain their competitive edge. Our consulting company is the catalyst for this transformation, providing bespoke solutions across a spectrum of critical...",
            link: '/'
        },
        {
            image: '/assets/images/206.jpg',
            date: 'Mar 16, 2024',
            title: 'Maximizing Business Growth: Strategies for Generating Inquiries and Boosting Conversion Rates',
            des: "The lack of an effective inquiry system poses major challenges for companies. Many fail to proactively manage inquiries, leading to missed sales opportunities. The absence of a centralized tracking system results in scattered and unmanaged leads, causing delayed responses...",
            link: '/'
        },
        {
            image: '/assets/images/212.jpg',
            date: 'Mar 16, 2024',
            title: 'Revitalizing a Garment Exporter’s Business',
            des: "Revitalizing a Garment Exporter’s Business: A Marketing and Sales Case Study This case study shows how Madasky Consulting collaborated with a client in the Apparel manufacturing industry to revamp their sales and marketing strategies, ultimately fueling...",
            link: '/'
        },
        {
            image: '/assets/images/210.jpg',
            date: 'Mar 16, 2024',
            title: 'Elevating Productivity in Textile Manufacturing with Madasky Consulting',
            des: "Madasky Consulting embarked on a eight-month transformative journey with a major textile manufacturing client grappling with low productivity across multiple factories....",
            link: '/'
        },
        {
            image: '/assets/images/208.jpg',
            date: 'Mar 16, 2024',
            title: 'Revolutionizing Manufacturing',
            des: "In an era where technological innovation is the keystone of progress, manufacturing companies stand on the threshold of a transformative revolution.Technological advancements are not only improving...",
            link: '/'
        },
        {
            image: '/assets/images/205.jpg',
            date: 'Mar 16, 2024',
            title: 'High Production Costs',
            des: "High production costs for the textile and garment industry?? Madasky can help to reduce this challenge High production costs are a critical challenge that the textile and garment industry often faces...",
            link: '/'
        }, {
            image: '/assets/images/219.jpg',
            date: 'Mar 16, 2024',
            title: 'Production capacity in the textile and garment industry',
            des: "Production capacity in the textile and garment industry refers to the maximum amount of output (e.g., fabric, garments, or accessories) that can be produced within a given period, usually measured in units per day, week, or month. The production...",
            link: '/'
        }, {
            image: '/assets/images/198.jpg',
            date: 'Mar 16, 2024',
            title: 'Digitalization on the Sewing Production Floor',
            des: "Digitalization on the Sewing Production Floor: A Case Study of Madasky Consulting’s Impact on Productivity In today’s fast-paced world, digitalization is no longer a luxury but a necessity for businesses to stay...",
            link: '/'
        },
        {
            image: '/assets/images/200.jpg',
            date: 'Mar 16, 2024',
            title: 'Digital Leap: Boosting Productivity by 20-30% in Home Textiles & Garments',
            des: "a luxury but a necessity for businesses to stay ahead of their competition. Industries across the globe are rapidly adopting digital technologies to streamline their processes and improve...",
            link: '/'
        }, {
            image: '/assets/images/202.jpg',
            date: 'Mar 16, 2024',
            title: 'Niche – All About Sales & Marketing – Lifetime Value',
            des: "As discussed in our previous blogs, niche stands on six pillars. We have previously covered: Acquisition cost, Five Ways, and Guarantee. Now we will...",
            link: '/'
        },
        {
            image: '/assets/images/218.jpg',
            date: 'Mar 16, 2024',
            title: 'Niche – All About Marketing & Sales – 5 Ways',
            des: "BY AMIT MITTAL, Business Coach, Consulting & Advisory As discussed in our previous blog, niche stands on six pillars one of which was Acquisition cost, and now we are going to discuss...",
            link: '/'
        },
        {
            image: '/assets/images/217.jpg',
            date: 'Mar 16, 2024',
            title: 'Coaching System – 6 Steps – Niche – USP',
            des: "As discussed in our previous blogs, niche stands among the six pillars. We have covered 4 of them: Acquisition cost, Five Ways, All about...",
            link: '/'
        },
        {
            image: '/assets/images/222.jpg',
            date: 'Mar 16, 2024',
            title: 'People and Education',
            des: "In our previous blog we have discussed briefly about Leverage that is a systematic approach in a system so that the organization may run automatically making the enterprise profitable....",
            link: '/'
        },
        {
            image: '/assets/images/214.jpg',
            date: 'Mar 16, 2024',
            title: 'Niche – All About Marketing & Sales – Guarantee',
            des: "BY AMIT MITTAL, Business Coach, Consulting & Advisory As discussed in our previous blog, niche stands on six pillars. We have previously covered two of them: Acquisition cost and Five Ways, and...",
            link: '/'
        },
        {
            image: '/assets/images/216.jpg',
            date: 'Mar 16, 2024',
            title: 'What Does the Budget Hold for MSME Business Owners?',
            des: "BY AMIT MITTAL, Business Coach, Consulting & Advisory Our Hon. Finance Minister Smt. Nirmala Sitharaman presented the Union Budget 2021-22 in the Parliament on February 1. The budget is an extraordinary budget...",
            link: '/'
        },
        {
            image: '/assets/images/223.jpg',
            date: 'Mar 16, 2024',
            title: 'How to Master Delivery Performance of Your Products & Services.',
            des: "BY AMIT MITTAL, Business Coach, Consulting & Advisory Delivering the right product at the right time at the right place and in the right quantity is the most important function of any business...",
            link: '/'
        },
        {
            image: '/assets/images/191.jpg',
            date: 'Mar 16, 2024',
            title: 'CASHFLOW MANAGEMENT – “A CARDIO WORKOUT”',
            des: "BY AMIT MITTAL, Business Coach, Consulting & Advisory Balance sheet and income statements are comrades in the business management story but cash flow is the real star...",
            link: '/'
        },
        {
            image: '/assets/images/195.jpg',
            date: 'Mar 16, 2024',
            title: '3 STEP PROCESS TO ACHIEVE YOUR GOALS BY BE, DO, & HAVE MINDSET',
            des: "BY AMIT MITTAL, Business Coach, Consulting & Advisory Everyone has gone through highs and lows in their life, be it personal or professional. Sometimes all we wish for is change, a shift...",
            link: '/'
        },
        {
            image: '/assets/images/204.jpg',
            date: 'Mar 16, 2024',
            title: 'A CUSTOMER LOYALTY LADDER',
            des: "BY AMIT MITTAL, Business Coach, Consulting & Advisory A satisfied customer is a boon to any business. To create a customer of varying interests in a digital and competitive world is a challenge...",
            link: '/'
        },
        {
            image: '/assets/images/201.jpg',
            date: 'Mar 16, 2024',
            title: 'A FORMULA FOR CHANGE',
            des: "BY AMIT MITTAL, Business Coach, Consulting & Advisory Without change, there is no innovation, creativity, or incentive for improvement. Those who initiate change will have a better opportunity to manage...",
            link: '/'
        },
        {
            image: '/assets/images/209.jpg',
            date: 'Mar 16, 2024',
            title: 'Common Business Challenges and Solutions',
            des: "BY AMIT MITTAL, Business Coach, Consulting & Advisory After a certain time organization which is unclear in its business strategies is often faced with unseen problems. Unable to defend themselves against competitors armed with new products, technologies...",
            link: '/'
        },
    ]
    return (
        <>
            <AboutNavbar />
            <div className=' bg-[#f0f0f0]'>
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="mb-8">
                        <Link
                            to="/about"
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
                        {/* <BlogCards data={dataArray} /> */}
                        {dataArray.map((data, index) => (
                            <BlogCards key={index} {...data} />
                        ))}
                        {
                            blogs.map((blog, index) => (
                                <BlogCards key={index} {...blog} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
