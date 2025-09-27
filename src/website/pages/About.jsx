import React from 'react'
import { FaUsers, FaCheckCircle, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import IMG from "../../assets/IMG/sunil_kardam_6.jpg"

export default function About() {
  return (
    <>
      <section className="bg-white py-12 " id='about'>
        <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* Left Side - Image */}
          <div className="relative flex justify-center">
            <div className="absolute -top-6 -left-6 rounded-full w-54 h-72 md:w-96 md:h-40 z-0" />
            <img
              src={IMG}
              alt="Profile"
              className="relative z-10 w-[400px] rounded-[50px]"
            />

          </div>

          {/* Right Side - Content */}
          <div className='space-y-6'>
            <p className="text-orange-600  text-2xl font-medium ">— About Me</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Who is <span className="text-orange-600">Sunil Kardam</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Sunil Kardam is a passionate entrepreneur dedicated to empowering people through network marketing. With his vision and leadership, he helps individuals achieve financial growth and personal success.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="text-2xl font-bold">70+</h3>
                <p className="text-gray-500 text-sm">My Team Member</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">15+</h3>
                <p className="text-gray-500 text-sm">Industry Covered</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">5+</h3>
                <p className="text-gray-500 text-sm">Years of Experience</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white shadow-md px-5 py-3 rounded-xl">
                <FaPhoneAlt className="text-orange-600 " size={25} />
                <span>+91 9568208540</span>
              </div>
              <div className="flex items-center gap-2 bg-white shadow-md px-5 py-3 rounded-xl">
                <FaEnvelope className="text-orange-600" size={25} />
                <span>kardamsunil273@gmail.com</span>
              </div>
            </div>
            <div>
              <a href="https://api.whatsapp.com/send?phone=917618471902" target='_blank'>
                <button className='bg-orange-500 hover:bg-orange-600 transition-all px-3 p-2 text-white rounded-md font-semibold'>Connect With Me</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
