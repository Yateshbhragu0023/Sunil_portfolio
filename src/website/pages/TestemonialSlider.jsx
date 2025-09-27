import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider() {

    const reviews = [
        {
            name: "Amit Sharma",
            role: "Startup Founder",
            text: "The team built a website that truly represents my brand. Clean design, fast loading, and mobile-friendly!",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Priya Verma",
            role: "Marketing Head",
            text: "Super impressed with their creativity and timely delivery. Definitely recommend them!",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Rohit Kumar",
            role: "E-commerce Owner",
            text: "My sales boosted after the redesign. The UI/UX was exactly what I wanted for my online store.",
            img: "https://randomuser.me/api/portraits/men/64.jpg",
        },
        {
            name: "Neha Singh",
            role: "Entrepreneur",
            text: "Loved the professional approach and clear communication. Will work again for future projects!",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
        },
    ];

    return (
        <div className="w-[85%]  mx-auto bg-white rounded-[50px] py-10 relative">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">
                    <p className="text-gray-500 mt-2 text-sm uppercase tracking-wide">
                        — Education & Work
                    </p>
                    What <span className="text-orange-500">My </span> {" "}
                    <span className="text-orange-500">Students Say</span>
                </h2>

            </div>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3500 }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-12"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-xl transition">
                            {/* Top: Image + Name + Role */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={review.img}
                                    alt={review.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {review.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">{review.role}</p>
                                </div>
                            </div>

                            {/* Rating + Quote Icon */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-orange-500">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                    <span className="ml-2 font-semibold text-gray-800">{review.rating}</span>
                                </div>
                                <FaQuoteRight className="text-orange-500 text-2xl" />
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
