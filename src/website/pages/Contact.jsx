import React, { useState } from 'react'
import { FaFacebookF, FaXTwitter, FaPinterestP, FaInstagram, FaYoutube } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

export default function Contact() {

    const [form, setform] = useState()
    console.log(form)

    const HandleForm = (e) => {
        e.preventDefault()
        const data = {
            "name": e.target.name.value,
            "email": e.target.email.value,
            "message": e.target.message.value,
        }
        setform(data)

        if (data) {
            alert("Thankyou For reach Out Me , I will Conect you Soon")
            e.target.reset()
        } else {
            alert("all fields are required")
        }


        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    }

    return (
        <>
            <section className="py-16 bg-gray-50" id='contact'>
                <div className="md:w-[85%] sm:w-[93%] w-[95%] mx-auto">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <p className="text-sm uppercase text-gray-500 tracking-wide">— Contact Me</p>
                        <h2 className="text-2xl md:text-4xl font-bold mt-2">
                            Let’s Talk about{" "}
                            <span className="text-orange-500">Your Life changing Journey</span>
                        </h2>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-white md:p-6 p-4 rounded-xl shadow">
                            <form className="grid md:grid-cols-2 gap-6" onSubmit={HandleForm}>
                                {/* Name */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Your Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        name='name'
                                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Email *</label>
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        name='email'
                                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>

                                {/* Phone */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Phone *</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Phone Number"
                                        name='phone'
                                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>

                                {/* Interest */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">I’m Interested in *</label>
                                    <select className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                                        <option>Select</option>
                                        <option>Enterprenuership</option>
                                        <option>network Markeitng</option>
                                        <option>Digitally Platform</option>
                                    </select>
                                </div>

                                {/* Budget */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Work Experience *</label>
                                    <select className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                                        <option>Select </option>
                                        <option>Online Work</option>
                                        <option>Work as affliate a company</option>
                                        <option>Work as a freelancer</option>
                                        <option>job person</option>
                                        <option>I have Business</option>
                                        <option>Not any experience</option>
                                    </select>
                                </div>

                                {/* Country */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-1">Country *</label>
                                    <select className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                                        <option>Select Country</option>
                                        <option>USA</option>
                                        <option>India</option>
                                        <option>UK</option>
                                        <option>Canada</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="md:col-span-2 flex flex-col">
                                    <label className="text-sm font-medium mb-1">Your Message *</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Enter here.."
                                        name='message'
                                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-black transition"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Info Card */}
                        <div className="bg-black text-white rounded-xl shadow md:p-8 sm:p-6 p-4 flex flex-col justify-between">
                            <div className="space-y-6">
                                {/* Address */}
                                <div>
                                    <h4 className="text-orange-500 font-semibold mb-2">Address</h4>
                                    <p className="text-sm text-gray-300">
                                        Sanjya Palace. Agra, <br /> India 45463
                                    </p>
                                </div>

                                {/* Contact */}
                                <div>
                                    <h4 className="text-orange-500 font-semibold mb-2">Contact</h4>
                                    <p className="text-sm text-gray-300">Phone : +91 9568208540</p>
                                    <p className="text-sm text-gray-300">Email : kardamsunil273@gmail.com</p>
                                </div>

                                {/* Time */}
                                <div>
                                    <h4 className="text-orange-500 font-semibold mb-2">Time</h4>
                                    <p className="text-sm text-gray-300">Monday – sunaday : 09:00 – 04:00</p>
                                    <p className="text-sm text-gray-300">Support : 24*7 Available</p>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="mt-8 bg-orange-500 p-4 rounded-lg flex justify-center gap-4">
                                <a href="https://www.facebook.com/profile.php?id=100086728616442&ref=_xav_ig_profile_page_web#" target='_blank' className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full hover:bg-black hover:text-white transition">
                                    <FaFacebookF />
                                </a>
                                <a href="https://www.instagram.com/sunil_insta_23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full hover:bg-black hover:text-white transition">
                                    <FaXTwitter />
                                </a>
                                <a href="https://www.instagram.com/sunil_insta_23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full hover:bg-black hover:text-white transition">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.youtube.com/@sunilkardam23" target='_blank' className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full hover:bg-black hover:text-white transition">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
