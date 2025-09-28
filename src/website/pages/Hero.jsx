import React from 'react'
import { FaFacebookF, FaXTwitter, FaPinterestP, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import heroImg from "../../assets/IMG/image.png"

export default function Hero() {
  return (
    <>
      <section className="relative md:w-[85%] w-[95%] mx-auto overflow-hidden md:mt-20 sm:mt-20 mt-14 py-12 md:py-15">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

          {/* Left Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              I’m <span className="text-orange-500">Sunil Kardam</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Digital Enterprenuer based in Agra UP
            </p>

            {/* Testimonial */}
            <div className="max-w-md mx-auto md:mx-0 text-gray-700">
              <p className="italic text-lg">Sunil Kardam will Transformed Your Carrier – Failure to Succesfull!”</p>
              <div className="flex items-center mt-4 gap-3">
                {/* avatars */}
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="client" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="client" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/women/72.jpg" alt="client" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <p className="text-sm">
                  <span className="text-orange-500 font-semibold">150+ Reviews (4.9 of 5)</span><br />
                  <span className="text-gray-500">Reviews from Valued Clients</span>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <button className="bg-black text-white md:px-6 px-6 md:py-3 py-0 rounded-full flex items-center gap-2 hover:bg-orange-500 transition">
                Portfolio <FaArrowRight />
              </button>
              <a href="https://api.whatsapp.com/send?phone=917618471902" target='_blank'>
                <button className="border border-black md:px-6 px-4 md:py-3 py-1 rounded-full hover:bg-orange-500 hover:text-white transition">
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 relative flex justify-center">
            {/* Orange Background Shape */}
            <div className="absolute -z-10 w-72 h-72 md:w-96 md:h-96 bg-orange-500 rounded-full top-1/2 transform -translate-y-1/2"></div>

            {/* Hero Image */}
            <img src={heroImg} alt="Oliver Scott" className="relative w-64 md:w-96  rounded-xl" />

          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-4 mt-10 px-4">
          <a href="https://www.facebook.com/profile.php?id=100086728616442&ref=_xav_ig_profile_page_web#" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-orange-500 hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-orange-500 hover:text-white transition">
            <FaXTwitter />
          </a>
          <a href="https://www.youtube.com/@sunilkardam23" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-orange-500 hover:text-white transition">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/sunil_insta_23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-orange-500 hover:text-white transition">
            <FaInstagram />
          </a>
        </div>
      </section>
    </>
  )
}
