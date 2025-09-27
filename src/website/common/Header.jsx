import React, { useState } from 'react'
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

export default function Header() {

    const [menu, setMenu] = useState(false)

    const menubar = [
        {
            id: 1,
            name: "Home",
            aTag: ""
        },
        {
            id: 2,
            name: "About",
            aTag: "#about"
        },
        {
            id: 3,
            name: "Work",
            aTag: "#work"
        },
        {
            id: 4,
            name: "Contact",
            aTag: "#contact"
        },
        {
            id: 5,
            name: "Faq",
            aTag: "#faq"
        }

    ]


    return (
        <div className='pt-5 bg-gray-50 items-center sticky top-0 left-0 z-50 '>
            <div className='px-3 shadow-lg w-[85%] bg-white mx-auto  text-black rounded-full py-2' >
                <div className='flex justify-between'>
                    {/* logo */}
                    <div className='flex place-items-center'>
                        <a href="#">
                            <h1 className='bg-orange-500 text-white rounded-full px-2 py-2 text-2xl font-semibold' >
                                S.P.
                            </h1>
                        </a>
                        <div className='font-bold text-2xl pl-2 flex flex-col leading-tight'>
                            <span>Sunil</span>
                        </div>
                    </div>
                    {/* menubar */}
                    <ul className=' hidden md:flex justify-between font-semibold place-items-center gap-6 '>
                        {
                            menubar.map(
                                (d) => {
                                    return (
                                        <a href={d.aTag}>
                                            <li className='hover:text-orange-500 transition-all cursor-pointer'>
                                                {d.name}
                                            </li>
                                        </a>
                                    )
                                }
                            )
                        }
                    </ul>
                    {/* button */}
                    <div className='place-items-center pt-1'>
                        <a href="#contact">
                            <button className='md:block hidden bg-black px-4 py-2 hover:bg-orange-600 transition-all  font-semibold text-white rounded-full' >Contact Me</button>
                        </a>
                    </div>

                    <div className='text-orange-500 font-bold place-items-center pt-2 md:hidden block'>
                        <h1>
                            {
                                menu == false
                                    ?
                                    <HiBars3 size={28} onClick={() => setMenu(!menu)} />
                                    :
                                    <RxCross1 size={20} onClick={() => setMenu(!menu)} />
                            }
                        </h1>
                    </div>

                </div>
                {/* side menu */}
                <div className={`absolute top-[64px] right-0 ${menu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}  w-[200px] h-screen  p-6 pt-10 bg-white transition-all duration-150`}>
                    <ul className='space-y-2'>
                        {
                            menubar.map(
                                (d) => {
                                    return (
                                        <li className='hover:text-orange-500 transition-all cursor-pointer'>
                                            {d.name}
                                        </li>
                                    )
                                }
                            )
                        }

                    </ul>

                </div>
            </div>

        </div>
    )
}
