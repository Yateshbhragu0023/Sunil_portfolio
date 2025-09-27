import React from 'react'
import { FaPhoneAlt, FaGlobe, FaInstagram, FaTwitter, FaYoutube, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";

export default function Footer() {

    const icons = [
        {
            id: 1,
            icon: <FaInstagram />,
            aTag: "https://www.instagram.com/sunil_insta_23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        },
        {
            id: 2,
            icon: <FaTwitter />,
            aTag: "https://www.instagram.com/sunil_insta_23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        },
        {
            id: 3,
            icon: <FaYoutube />,
            aTag: "https://www.youtube.com/@sunilkardam23"
        },
        {
            id: 4,
            icon: <FaFacebookF />,
            aTag: "https://www.facebook.com/profile.php?id=100086728616442&ref=_xav_ig_profile_page_web#"
        },

    ]

    return (
        <>
            <footer className="bg-white text-black">
                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-4 py-8">
                    {/* Heading Section */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold mb-2"> Let's <span className='text-orange-500' >Connect</span> there</h1>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-300 my-6"></div>

                    {/* Links and Contact Section */}
                    <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-8">
                        {/* logo description */}
                        <div className='space-y-2'>
                            <div className='flex place-items-center'>
                                <h1 className='bg-orange-500 text-white rounded-full px-2 py-2 text-2xl font-semibold' >
                                    S.P.
                                </h1>
                                <div className='font-bold text-2xl pl-2 flex flex-col leading-tight'>
                                    <span>Sunil</span>
                                </div>
                            </div>
                            <p className='text-black/80 '>
                                “Sunil Kardam is a passionate entrepreneur dedicated to helping people achieve financial freedom and personal growth through network marketing. With a vision to inspire and empower, , leadership, and innovation.
                            </p>
                            <div className="flex gap-2 text-lg text-black">
                                {
                                    icons.map(
                                        (d) => {
                                            return (
                                                <a href={d.aTag} target='_blank'>
                                                    <h1 className='text-white hover:text-orange-600 bg-orange-500  p-2 mt-2 rounded-full  cursor-pointer '>
                                                        {d.icon}
                                                    </h1>
                                                </a>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>
                        {/* Navigation */}
                        <div>
                            <h3 className="font-semibold text-orange-500 text-lg mb-4"> Navigation</h3>
                            <ul className="space-y-2">
                                {['Home', 'About', 'Work', 'Contact', 'FAQs'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-600 hover:text-black">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="font-semibold text-lg text-orange-500 mb-4"> Contact</h3>
                            <div className="space-y-2 text-gray-600">
                                <p>+91 9568208540</p>
                                <p>www.sunilkardam.com</p>
                                <p>kardamsunil273@gmail.com</p>
                                <p>Sanjya Palace. Agra, India 45463</p>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4 text-orange-500">Get the latest information</h3>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="border-b border-gray-300 px-2 py-1 w-full focus:outline-none focus:border-black"
                                />
                                <button className='p-2 px-4 bg-orange-500 rounded-md font-semibold hover:bg-orange-600 '>Submit</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className=" relative border-t border-gray-300  mt-10 py-6 text-center text-sm">
                    © Copyright 2025 by <span className="text-orange-500 font-medium">WEB TH</span>
                    <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className=' fixed bottom-5 right-10 bg-orange-600 p-4 text-white text-xl rounded-full' >
                        <FaChevronUp />
                    </div>
                </div>
            </footer>
        </>
    )
}
