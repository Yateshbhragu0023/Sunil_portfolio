import React from 'react'
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function Education() {

    const education = [
        {
            title: "Inter Colege",
            subtitle: "Complete 12th standard",
            year: "2014 – 2015",
        },
        {
            title: "Mahi International",
            subtitle: "Bachelor in  Arts",
            year: "2016 – 2019",
        },
        {
            title: "Masters in Sales",
            subtitle: "JNU Jaipur",
            year: "2019 – 2022",
        },
    ];

    const work = [
        {
            title: "Insightlancer",
            subtitle: "Junior Sales Manager",
            year: "2022 – 2023",
        },
        {
            title: "Self-Employed",
            subtitle: "Enterprenuership",
            year: "2023 – 2024",
        },
        {
            title: "Working With Team",
            subtitle: "Enterprenuer",
            year: "2024 – Current",
        },
    ];


    return (
        <>
            <section className="py-16 px-4 w-[85%] mx-auto" id='work'>
                {/* Section Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">
                        My <span className="text-orange-500">Education</span> &{" "}
                        <span className="text-orange-500">Work Experience</span>
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm uppercase tracking-wide">
                        — Education & Work
                    </p>
                </div>

                {/* Two Columns */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Education */}
                    <div className="bg-white rounded-2xl shadow p-6 border border-orange-100 border-l-4 border-l-orange-400">
                        <div className="flex items-center gap-2 mb-7">
                            <FaGraduationCap className="text-orange-500 " size={40}/>
                            <h3 className="font-semibold text-4xl">Education</h3>
                        </div>
                        <ul className="space-y-7">
                            {education.map((item, idx) => (
                                <li key={idx} className="flex justify-between items-center">
                                    <div>
                                        <h4 className="font-medium md:text-xl text-lg">{item.title}</h4>
                                        <p className="md:text-lg text-sm text-gray-500">{item.subtitle}</p>
                                    </div>
                                    <span className="bg-black text-white text-xs  font-semibold md:px-4 px-3  md:py-3 py-2 rounded-full">
                                        {item.year}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Work Experience */}
                    <div className="bg-white rounded-2xl shadow p-6 border border-orange-100 border-l-4 border-l-orange-400">
                        <div className="flex items-center gap-2 mb-7">
                            <FaBriefcase className="text-orange-500" size={40} />
                            <h3 className="font-semibold text-4xl">Work Experience</h3>
                        </div>
                        <ul className="space-y-7">
                            {work.map((item, idx) => (
                                <li key={idx} className="flex justify-between items-center">
                                    <div>
                                        <h4 className="font-medium md:text-xl text-lg">{item.title}</h4>
                                        <p className="md:text-lg text-sm text-gray-500">{item.subtitle}</p>
                                    </div>
                                    <span className="bg-black text-white text-xs font-semibold md:px-4 px-3  md:py-3 py-2 rounded-full">
                                        {item.year}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
