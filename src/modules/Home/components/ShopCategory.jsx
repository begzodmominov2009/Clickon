import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ShopCategory = ({ products }) => {
    const sliceProducts = products?.slice(120, 132);

    return (
        <section>
            <div className="container mx-auto px-2 sm:px-0 2xl:px-32 mt-5 sm:mt-10 relative">
                <h1 className="text-[26px] sm:text-[32px] font-medium text-center mb-6">
                    Shop with Categorys
                </h1>

                {/* LEFT BUTTON */}
                <div className="hidden sm:flex category-prev absolute -left-5 top-[65%] -translate-y-1/2 z-10">
                    <button className="w-10 h-10 cursor-pointer rounded-full bg-orange-500 text-white flex items-center justify-center shadow-md">
                        <IoIosArrowBack className="w-4 h-4" />
                    </button>
                </div>

                {/* RIGHT BUTTON */}
                <div className="hidden sm:flex category-next absolute -right-5 top-[65%] -translate-y-1/2 z-10">
                    <button className="w-10 h-10 cursor-pointer rounded-full bg-orange-500 text-white flex items-center justify-center shadow-md">
                        <IoIosArrowForward className="w-4 h-4" />
                    </button>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: ".category-prev",
                        nextEl: ".category-next",
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={12}
                    slidesPerView={6}
                    breakpoints={{
                        0: { slidesPerView: 1.2 },
                        480: { slidesPerView: 1.3 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 6 },
                    }}
                    className="px-12"
                >
                    {sliceProducts?.map((el) => (
                        <SwiperSlide key={el?.id}>
                            <Link to={`/product/${el.id}`} className="block h-full">
                                <div className="border rounded-md border-gray-300 shadow-md bg-white p-3 hover:shadow-lg transition text-center h-full">
                                    <img
                                        src={el?.thumbnail}
                                        alt={el?.title}
                                        className="w-full h-[120px] object-contain"
                                    />
                                    <p className="mt-2 text-[14px] font-medium">
                                        {el?.title}
                                    </p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </section>
    );
};

export default ShopCategory;
