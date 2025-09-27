import React, { useEffect } from 'react'

export default function Infiniteslider() {

    const items = [
        "Network Creation",
        "Dashboard",
        "EnterPrenuership",
        "User Research",
        "Branding",
        "Video Editing",
    ];

    return (
        <>
            <div className="w-full bg-black overflow-hidden py-6">
                <div className="flex gap-16 animate-scroll whitespace-nowrap">
                    {/* duplicate 2 times for infinite effect */}
                    {[...items, ...items].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 text-white text-xl font-semibold"
                        >
                            <span>{item}</span>
                            <span className="text-orange-500 text-2xl">✦</span>
                        </div>
                    ))}
                </div>

                {/* animation style */}
                <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 15s linear infinite;
        }
      `}</style>
            </div>
        </>
    )
}
