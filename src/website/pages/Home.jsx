import React from 'react'
import Hero from './Hero'
import About from './About'
import Infiniteslider from './infiniteslider'
import Education from './Education'
import Contact from './Contact'
import Faq from './Faq'
import Slider from './TestemonialSlider'

export default function Home() {
    return (
        <>
            <div className='bg-gray-50'>
                <Hero />
            </div>
            <About/>
            <Infiniteslider/>
            <Education/>
            <Slider/>
            <Contact/>
            <Faq/>
            <Infiniteslider/>
            
        </>
    )
}
