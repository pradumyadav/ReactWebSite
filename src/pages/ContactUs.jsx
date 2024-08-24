import AboutNavbar from '../components/AboutNavbar';
import Footer from '../components/Footer';

export default function ContactUs() {
    return (
        <>
            <AboutNavbar />
            <div className='w-full min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-7xl mx-auto'>
                    <div className='bg-white shadow-2xl rounded-3xl overflow-hidden mb-12'>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div className='p-8 md:p-12'>
                                <h2 className='text-3xl font-extrabold text-gray-900 mb-6'>Get in Touch</h2>
                                <form className='space-y-6'>
                                    <div>
                                        <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                                        <input type='text' id='name' name='name' placeholder='Enter your name' className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:primary focus:primary' />
                                    </div>
                                    <div>
                                        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                                        <input type='email' id='email' name='email' placeholder='Enter your email' className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:primary focus:primary' />
                                    </div>
                                    <div>
                                        <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
                                        <textarea id='message' name='message' rows='4' className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:primary focus:primary'></textarea>
                                    </div>
                                    <div>
                                        <button type='submit' className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:primary'>
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className='bg-primary p-8 md:p-12 flex flex-col justify-between'>
                                <div>
                                    <h3 className='text-2xl font-bold text-white mb-4'>Contact Information</h3>
                                    <p className='text-indigo-200 mb-4'>Fill out the form and our team will get back to you within 24 hours.</p>
                                    <ul className='space-y-4'>
                                        <li className='flex items-center text-indigo-200'>
                                            <svg className='w-6 h-6 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'></path></svg>
                                            +91 7304424496
                                        </li>
                                        <li className='flex items-center text-indigo-200'>
                                            <svg className='w-6 h-6 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path></svg>
                                            info@madasky.com
                                        </li>
                                        <li className='flex items-center text-indigo-200'>
                                            <svg className='w-6 h-6 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'></path><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'></path></svg>
                                            Hiranandani Estate, Thane, Maharashtra, India. 400607
                                        </li>
                                    </ul>
                                </div>
                                <div className='mt-8'>
                                    <h4 className='text-xl font-semibold text-white mb-4'>Connect with us</h4>
                                    <div className='flex space-x-4'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className='bg-white shadow-2xl rounded-3xl overflow-hidden'>
                        <div className='aspect-w-16 h-96'>
                            <iframe
                                className='w-full h-full rounded-b-3xl'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.474098876057!2d72.98240557525503!3d19.261738381981463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb2c4fa9f0ed%3A0xeb0d65ae9e3ec3bf!2sMADASKY%20Consulting!5e0!3m2!1sen!2sin!4v1723645490572!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}