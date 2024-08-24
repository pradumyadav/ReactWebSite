import AboutNavbar from '../components/AboutNavbar'
import Footer from '../components/Footer'

export default function Solutions() {
    return (
        <>
            <AboutNavbar />

            <div className='w-full h-auto flex flex-col items-center justify-center py-10 px-20'>
                <h1 className='text-6xl font-bold font-serif text-center text-primary drop-shadow-xl mb-8'>
                    Solutions
                </h1>
                <div className='max-w-4xl text-lg'>
                    <p className='mb-6'>
                        At Madasky Consulting, we understand that every industry has unique challenges and requirements. To address these, we have partnered with leading IT companies to provide tailored digital solutions that align with the specific needs of our clients across various sectors. Our collaborative approach ensures that our clients receive the most advanced and effective tools to enhance their operations, drive innovation, and achieve sustainable growth.
                    </p>
                    <h2 className='text-3xl font-semibold mb-4'>Comprehensive Industry Expertise</h2>
                    <p className='mb-6'>
                        Our partnerships are not just about technology; they are about understanding the intricacies of different industries and delivering solutions that make a tangible impact. By combining our industry expertise with the technological prowess of our IT partners, we offer vertical solutions that are finely tuned to the demands of sectors such as:
                    </p>
                    <ul className='list-disc pl-6 mb-6'>
                        <li className='mb-3'>
                            <strong>Manufacturing:</strong> We offer digitalization solutions that streamline production processes, improve quality control, and optimize supply chains. Our solutions enable manufacturers to transition to Industry 4.0, ensuring they stay competitive in a rapidly evolving market.
                        </li>
                        <li className='mb-3'>
                            <strong>Retail:</strong> For the retail sector, we provide solutions that enhance the customer experience, optimize inventory management, and drive e-commerce success. Our digital tools help retailers personalize their offerings, manage logistics efficiently, and increase customer engagement.
                        </li>
                    </ul>
                    <h2 className='text-3xl font-semibold mb-4'>Collaborative Innovation</h2>
                    <p>
                        Our partnerships with IT companies are based on a shared commitment to innovation. We work closely with our partners to co-develop solutions that not only meet current industry standards but also anticipate future trends. This collaborative innovation allows us to offer our clients solutions that are not only relevant today but will also support their growth and success in the years to come.
                    </p>
                </div>
            </div>


                <div>
                    <div>

                        <div>
                            <video src=""></video>
                        </div>
                        <div>
                        <vide src=""></vide>
                        </div>
                    </div>
                </div>



            <Footer />
        </>
    )
}