// import FooterItemHeader from './FooterItemHeader';
// import FooterItem from './FooterItem';
// import FooterSocialItem from './FooterSocialItem';
// import CustomButton from './CustomButton';
// import FooterStripe from './FooterStripe';
// import LogoCombo from './LogoCombo';

// export default function Footer() {
//     return (
//         <>
//             <FooterStripe />
//             <div className="w-full h-auto min-h-[60vh] flex flex-col items-center justify-center gap-5 bg-slate-50">
//                 <div className="w-[90%] h-auto grid  border-2 grid-cols-3 gap-6 py-10">
//                     <div className="w-[90%] h-auto flex border-r-2 flex-col pr-4 items-center gap-7">
//                         {/* <FooterItemHeader title={'Madasky'} /> */}
//                         <LogoCombo />
//                         <div className="w-full h-auto flex flex-col gap-3">
//                             <p>
//                                 At Madasky Consulting, our approach is designed
//                                 to deliver exceptional value and ensure your
//                                 success.
//                             </p>
//                             <CustomButton
//                                 title={'Know More'}
//                                 link="/about"
//                                 customStyles="bg-primary text-white"
//                             />
//                         </div>
//                     </div>
//                     <div className="w-full h-auto flex flex-col border-r-2  items-center gap-5">
//                         <FooterItemHeader title={'Useful Links'} />
//                         <div className="grid w-full grid-cols-2 gap-2">
//                             <div className="flex flex-col items-start justify-start gap-2">
//                                 <FooterItem title={'About'} link="/about" />
//                                 <FooterItem title={'Blog'} link="/blogs" />
//                                 <FooterItem
//                                     title={'Business Books'}
//                                     link="/business-books"
//                                 />
//                                 <FooterItem
//                                     title={'Privacy Policy'}
//                                     link="/privacy-policy"
//                                 />
//                                 <FooterItem
//                                     title={'Business Consulting'}
//                                     link="/business-consulting"
//                                 />
//                             </div>
//                             <div className="flex flex-col items-start justify-start gap-2">
//                                 <FooterItem title={'Gallery'} link="/gallery" />
//                                 <FooterItem title={'Contact'} link="/contact" />
//                                 <FooterItem
//                                     title={'Testimonial'}
//                                     link="/testimonials"
//                                 />
//                                 <FooterItem
//                                     title={'Business Coaching'}
//                                     link="/business-coaching"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     {/* <div className="w-full h-auto flex flex-col items-center gap-3">
//                         <FooterItemHeader title={'Social Links'} />
//                         <div className="w-full flex flex-col items-start justify-start gap-2">
//                             <FooterSocialItem
//                                 icon="fa-brands fa-linkedin"
//                                 title="LinkedIn"
//                                 link="https://www.linkedin.com/company/68993529/admin/dashboard/"
//                             />
//                             <FooterSocialItem
//                                 icon="fa-brands fa-facebook"
//                                 title="Facebook"
//                                 link="https://www.facebook.com/madaskyconsulting"
//                             />

//                             <FooterSocialItem
//                                 icon="fa-brands fa-instagram"
//                                 title="Instagram"
//                                 link="https://www.instagram.com/madasky_consulting/"
//                             />

//                              <FooterSocialItem
//                                 icon="fab fa-whatsapp"
//                                 title="Whatsapp"
//                                 link="https://api.whatsapp.com/send/?phone=7304424496&text=Hi&type=phone_number&app_absent=0"
//                             />
//                              <FooterSocialItem
//                                 icon="fa-brands fa-youtube"
//                                 title="Youtube"
//                                 link="https://www.youtube.com/channel/UCG95pxF2SdRxLxDk_azEuIA"
//                             />
//                         </div>
//                     </div> */}
//                     <div className="w-full h-auto flex flex-col items-start gap-5">
//                         <FooterItemHeader title={'Contact'} />
//                         <div className="w-full h-auto flex flex-col gap-2">
//                             <a
//                                 href=""
//                                 className="flex gap-0 items-center justify-start w-full"
//                             >
//                                 <span className="w-1/6 h-auto flex items-start justify-start">
//                                     <i className="fa-solid fa-phone"></i>
//                                 </span>
//                                 <span className="w-5/6"><a href="tel:+91 8007370008">+91 7304424496</a></span>
//                             </a>
//                             <a
//                                 href=""
//                                 className="flex gap-0 items-center justify-start w-full"
//                             >
//                                 <span className="w-1/6 h-auto flex items-start justify-start">
//                                     <i className="fa-solid fa-envelope"></i>
//                                 </span>
//                                 <span className="w-5/6"><a href="mailto:info@madasky.com">info@madasky.com</a></span>
//                             </a>
//                             <a
//                                 href=""
//                                 className="flex gap-0 items-center justify-start w-full"
//                             >
//                                 <span className="w-1/6 h-auto flex items-start justify-start">
//                                     <i className="fa-solid fa-location-dot"></i>
//                                 </span>
//                                 <span className="w-5/6">
//                                     Hiranandani Estate, Thane, Maharashtra,
//                                     India. Pincode 400607
//                                 </span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-black h-16 w-full flex items-center justify-center">
//                     <div className="w-[85%] h-full flex items-center justify-between text-white">
//                         <span>© 2022 Madasky. All rights reserved.</span>
//                         <span>Privacy Policy</span>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
} from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import FooterItemHeader from './FooterItemHeader';
import FooterItem from './FooterItem';
import CustomButton from './CustomButton';
import LogoCombo from './LogoCombo';

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Top strip */}
            <div className="bg-blue-900 h-16 w-full flex items-center justify-around px-4">
                <div className="text-white text-xl font-bold">
                    Subscribe to our newsletter to stay up-to-date.
                </div>
                <div className="flex items-center">
                    <span className="text-white mr-2">News Letter</span>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-3 py-2 rounded-sm mr-5"
                    />
                </div>
            </div>

            {/* Main footer content */}
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start">
                <div className="w-full md:w-1/3 pr-4 mb-6 md:mb-0 md:border-r border-gray-300">
                    <LogoCombo />
                    <p className="mt-4 mb-6 text-gray-600 text-lg">
                        At Madasky Consulting, our approach is designed to
                        deliver exceptional value and ensure your success.
                    </p>
                    <CustomButton
                        title="READ MORE"
                        link="/about"
                        customStyles="bg-custom-gradient-3 text-white rounded-full text-sm font-bold px-6 py-2"
                    />
                </div>

                <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0 md:border-r border-gray-300">
                    <FooterItemHeader title="QUICK LINKS" />
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mt-4">
                        {[
                            'home',
                            'About',
                            'Industries',
                            // 'Consulting',
                            'Blog',
                            'Gallery',
                            'Books',
                            'Testimonials',
                            'Coaching',
                            'Privacy',
                        ].map((link) => (
                            <FooterItem
                                key={link}
                                title={link}
                                link={`/${link.toLowerCase()}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/3 pl-4">
                    <FooterItemHeader title="CONTACT DETAILS" />
                    <div className="space-y-3 mt-4 text-gray-600 text-lg">
                        <p className="flex items-center">
                            <i className="fa-solid fa-phone mr-3 w-5 text-center"></i>
                            <a href="tel:+917304424496">+91-7304424496</a>
                        </p>
                        <p className="flex items-center">
                            <i className="fa-solid fa-envelope mr-3 w-5 text-center"></i>
                            <a href="mailto:info@madasky.com">
                                info@madasky.com
                            </a>
                        </p>
                        <p className="flex items-start">
                            <i className="fa-solid fa-location-dot mr-3 w-5 text-center mt-1"></i>
                            <span>
                                Hiranandani Estate, Thane,
                                <br />
                                Maharashtra - 400607
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom strip */}
            <div className="bg-black h-16 w-full flex items-center justify-center">
                <div className="w-[85%] h-full flex items-center justify-between text-white">
                    <span>© 2022 Madasky. All rights reserved.</span>
                    <span className="flex gap-3 text-xl">
                        <div>
                            <a href="https://api.whatsapp.com/send/?phone=7304424496&text=Hi&type=phone_number&app_absent=0">
                                <FaWhatsapp />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/madasky_consulting/">
                                <FaInstagram />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/channel/UCG95pxF2SdRxLxDk_azEuIA">
                                <FiYoutube />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/madaskyconsulting">
                                <FaFacebookF />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/company/68993529/admin/dashboard/">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </span>
                </div>
            </div>
        </footer>
    );
}
// <div className="bg-black h-16 w-full flex items-center justify-center">
//                     <div className="w-[85%] h-full flex items-center justify-between text-white">
//                         <span>© 2022 Madasky. All rights reserved.</span>
//                         <span className='flex gap-3 text-xl'>
//                             <div><a href="https://api.whatsapp.com/send/?phone=7304424496&text=Hi&type=phone_number&app_absent=0"><FaWhatsapp /></a></div>
//                             <div><a href="https://www.instagram.com/madasky_consulting/"><FaInstagram  /></a></div>
//                             <div><a href="https://www.youtube.com/channel/UCG95pxF2SdRxLxDk_azEuIA"><FiYoutube /></a></div>
//                             <div><a href="https://www.facebook.com/madaskyconsulting"><FaFacebookF /></a></div>
//                             <div><a href="https://www.linkedin.com/company/68993529/admin/dashboard/"><FaLinkedinIn /></a></div>
//                         </span>
//                     </div>
//                 </div>
