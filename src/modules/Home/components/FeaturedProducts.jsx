import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { BsCartPlusFill, BsFillCartDashFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../../../features/CartSlice";

const tabs = [
    "All Product",
    "Motorcycle",
    "Laptop",
    "Smartphones",
    "Beauty",
];

const FeaturedProducts = ({ products }) => {
    const [activeTab, setActiveTab] = useState("All Product");
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    const filtered =
        activeTab === "All Product"
            ? products?.slice(20, 28)
            : products
                ?.filter(
                    (p) => p.category?.toLowerCase() === activeTab.toLowerCase()
                )
                .slice(0, 8);

    return (
        <section className="mt-14">
            <div className="container mx-auto px-2 sm:px-0 2xl:px-3">
                <div className="grid grid-cols-12 gap-6">
                    {/* LEFT BANNER */}
                    <div className="col-span-12 sm:col-span-3 bg-[#F7D046] rounded-lg px-6 py-2 h-137 relative overflow-hidden mb-4 sm:mb-0">
                        <p className="text-[12px] text-red-500 font-semibold mb-2">
                            COMPUTER & ACCESSORIES
                        </p>
                        <h2 className="text-[28px] font-bold leading-tight">
                            32% Discount
                        </h2>
                        <p className="mt-1 text-sm">
                            For all electronics products
                        </p>

                        <div className="bg-white inline-block px-3 py-1 text-xs font-semibold mt-2 rounded">
                            ENDS OF CHRISTMAS
                        </div>

                        <button className="mt-3 bg-orange-500 text-white px-6 py-3 rounded-md flex items-center gap-2">
                            SHOP NOW →
                        </button>

                        <img
                            src="/3_1.svg"
                            alt=""
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%]"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="col-span-12 sm:col-span-9">
                        {/* HEADER */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2 sm:gap-0">
                            <h2 className="text-[24px] font-semibold">Featured Products</h2>

                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`${activeTab === tab
                                            ? "text-orange-500 font-semibold"
                                            : "text-gray-600"
                                            } cursor-pointer`}
                                    >
                                        {tab}
                                    </button>
                                ))}

                                <div className="flex items-center gap-1 duration-200 cursor-pointer hover:bg-gray-300 px-2 py-1 rounded-lg">
                                    <p className="text-blue-600 font-semibold">Browse All Product</p>
                                    <FaArrowRight className="text-blue-600 w-3 h-3" />
                                </div>
                            </div>
                        </div>

                        {/* PRODUCTS GRID */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                            {filtered && filtered.length > 0 ? (
                                filtered.map((el) => (
                                    <div
                                        key={el.id}
                                        className="border border-gray-300 rounded-lg overflow-hidden p-4 bg-white relative group"
                                    >
                                        {/* IMAGE */}
                                        <img
                                            src={el.thumbnail}
                                            alt={el.title}
                                            className="h-[150px] mx-auto object-contain"
                                        />

                                        {/* HOVER ACTIONS */}
                                        <div
                                            className="
                        flex items-center justify-center gap-3
                        absolute inset-0
                        bg-white/5
                        opacity-0 group-hover:opacity-100
                        group-hover:bg-white/8 group-hover:backdrop-blur-sm
                        transition-all duration-200
                        pointer-events-auto
                    "
                                        >
                                            {/* LEFT */}
                                            <div
                                                className="
                            bg-gray-200 rounded-full w-8 h-8 flex
                            items-center justify-center cursor-pointer
                            -translate-x-full group-hover:translate-x-0
                            hover:bg-[#FA8232]
                            transition-all duration-500
                            pointer-events-auto
                        "
                                            >
                                                <FaHeartCirclePlus className="text-black hover:text-white transition-colors duration-300" />
                                            </div>
                                            {cart.find(item => item.id === el.id) ? (
                                                <div
                                                    onClick={() => dispatch(removeToCart(el))}
                                                    className="bg-gray-200 rounded-full w-8 h-8 flex
      items-center justify-center cursor-pointer
      opacity-0 group-hover:opacity-100
      hover:bg-[#FA8232]
      transition-all duration-700">
                                                    <BsFillCartDashFill className="text-black hover:text-white transition-colors duration-300" />
                                                </div>
                                            ) : (
                                                <div
                                                    onClick={() => dispatch(addToCart(el))}
                                                    className="  bg-gray-200 rounded-full w-8 h-8 flex
      items-center justify-center cursor-pointer
      opacity-0 group-hover:opacity-100
      hover:bg-[#FA8232]
      transition-all duration-700"
                                                >
                                                    <BsCartPlusFill className="text-black hover:text-white transition-colors duration-300" />
                                                </div>
                                            )}

                                            {/* RIGHT */}
                                            <div
                                                className="
                            bg-gray-200 rounded-full w-8 h-8 flex
                            items-center justify-center cursor-pointer
                            translate-x-full group-hover:translate-x-0
                            hover:bg-[#FA8232]
                            transition-all duration-500
                            pointer-events-auto
                        "
                                            >
                                                <AiOutlineEye className="text-black hover:text-white transition-colors duration-300" />
                                            </div>
                                        </div>

                                        {/* TITLE */}
                                        <p className="text-sm mt-2 font-medium line-clamp-1">
                                            {el.title}
                                        </p>

                                        {/* PRICE */}
                                        <div className="mt-2 flex items-center justify-between">
                                            <p className="text-[14px] text-[#2DA5F3] font-medium">
                                                ${(el?.price - (el?.price * el?.discountPercentage) / 100).toFixed(2)}
                                            </p>
                                            <p className="text-[14px] text-gray-500 line-through font-medium">
                                                ${el?.price}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-1 sm:col-span-2 lg:col-span-4 text-center text-gray-500 font-semibold py-20">
                                    No products available
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
