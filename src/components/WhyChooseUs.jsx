import React from 'react';

export default function WhyChooseUs() {
    return (
        <div className="flex h-screen w-full">
            <div className="w-1/2 flex flex-col justify-center items-center relative">
                <div className="w-[80%]">
                    <h2 className="mb-4 text-6xl font-bold">
                        Why Choose Amit Mittal for Advisory Services?
                    </h2>
                    <div className="mb-4 flex items-center">
                        <div className="mr-4 p-4 rounded-full bg-blue-200 w-12 h-12 flex items-center justify-center">
                            <i className="fas fa-globe"></i>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">
                                Global Expertise
                            </h3>
                            <p className="text-gray-600">
                                Proven track record of success with leading
                                organizations worldwide.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 flex items-center">
                        <div className="mr-4 p-4 rounded-full bg-blue-200 w-12 h-12 flex items-center justify-center">
                            <i className="fas fa-wrench"></i>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">
                                Tailored Solutions
                            </h3>
                            <p className="text-gray-600">
                                Customized advisory services that address
                                specific business needs.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 flex items-center">
                        <div className="mr-4 p-4 rounded-full bg-blue-200 w-12 h-12 flex items-center justify-center">
                            <i className="fas fa-chess"></i>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">
                                Strategic Insight
                            </h3>
                            <p className="text-gray-600">
                                Deep understanding of market dynamics and
                                industry trends.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 flex items-center">
                        <div className="mr-4 p-4 rounded-full bg-blue-200 w-12 h-12 flex items-center justify-center">
                            <i className="fas fa-trophy"></i>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">
                                Commitment to Excellence
                            </h3>
                            <p className="text-gray-600">
                                Dedication to delivering exceptional results and
                                fostering long-term client relationships.
                            </p>
                        </div>
                    </div>
                    <div className="text-gray-900 pt-5 font-bold">
                        Amit Mittal's advisory services are designed to empower
                        businesses to navigate complexities, seize
                        opportunities, and achieve their strategic objectives.
                        Partner with Amit to unlock your organization's full
                        potential and drive sustainable growth.
                    </div>
                </div>

                <img
                    src="/assets/images/297.jPG"
                    alt="Success Stats"
                    className="w-[85%] h-[75%] rounded-2xl shadow-2xl absolute top-1/2 right-[-80%] -translate-y-1/2 "
                    style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}
                />
            </div>
            <div className="w-1/2 bg-[#0d0d0b] h-full"></div>
        </div>
    );
}
