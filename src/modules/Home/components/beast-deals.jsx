import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsCartPlusFill, BsFillCartDashFill } from 'react-icons/bs'
import { FaArrowRight, FaCartPlus } from 'react-icons/fa'
import { FaHeartCirclePlus } from 'react-icons/fa6'
import { FcDislike, FcLike } from 'react-icons/fc'
import useCountdown from '../../../hooks/useCountdown'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart } from '../../../features/CartSlice'
import { addToLike } from '../../../features/LikeSlice'
import { Link } from 'react-router-dom'
import ProductModal from '../../../components/singleModal/SingleModal'

const BeastDeals = ({ products }) => {
    const sliceProduct = products?.slice(54, 62)
    const product = products ? products[0] : ""
    const time = useCountdown("2026-02-01T00:00:00");
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const [isOpen, setIsOpen] = useState(false)
    const [isSelectedId, setSelectedId] = useState(null)

    return (
        <section className='mt-10 sm:mt-18'>
            <div className="container mx-auto px-2 md:px-0 2xl:px-2 w-full">
                <div className='flex items-center justify-between'>
                    <div className="flex items-center gap-5">
                        <p className="text-[22px] font-medium">Best Deals</p>
                        <p className="text-[14px]">Deals ends in</p>

                        <span className="bg-[#F3DE6D] px-3 py-1 rounded">
                            {time.ended
                                ? "Deal ended"
                                : `${time.days}d : ${time.hours}h : ${time.minutes}m : ${time.seconds}s`}
                        </span>
                    </div>

                    <div className="flex items-center gap-1 duration-200 cursor-pointer hover:bg-gray-300 px-2 py-1 rounded-lg">
                        <p className="text-blue-600 font-semibold">Browse All Product</p>
                        <FaArrowRight className="text-blue-600 w-3 h-3" />
                    </div>

                </div>
                <div className='flex flex-col lg:flex-row items-start mt-6'>
                    <div className='border-gray-300 border flex items-center flex-col justify-center p-3 bg-[white]'>
                        <div className='h-[210px] w-full object-contain'>
                            <img className='h-full w-full' src={product?.thumbnail} alt="img" />
                        </div>
                        <div>
                            <img className='w-30 h-4' src="/Rating.svg" alt="rating" />
                            <h2 className='mt-1'>{product.title}</h2>
                            <div className='flex items-center gap-2 mt-1 mb-1'>
                                <p className='line-through text-gray-500'>${product?.price}</p>
                                <p className='text-[#2DA5F3] font-medium text-[18px]'>${(product?.price - (product?.price * product?.discountPercentage) / 100).toFixed(2)}</p>
                            </div>
                            <p className='text-gray-700 text-[14px]'>Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.</p>
                            <div className='flex items-center justify-between gap-3 mt-2'>
                                <div className='hover:bg-[#FFE7D6] duration-200 flex items-center justify-center cursor-pointer px-2 py-1 rounded'>
                                    <FaHeartCirclePlus />
                                </div>
                                <button className='flex items-center gap-2 justify-center px-2 py-1 rounded text-[white] cursor-pointer w-full bg-[#FA8232]'>
                                    <FaCartPlus />
                                    ADD TO CARD
                                </button>
                                <div className='hover:bg-[#FFE7D6] duration-200 flex items-center justify-center cursor-pointer px-2 py-1 rounded'>
                                    <AiOutlineEye />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        {sliceProduct?.map((el) => (
                            <div
                                key={el?.id}
                                className="border relative overflow-hidden group border-gray-200 border-r max-w-[550px] w-full bg-white px-2 py-2"
                            >
                                <div className="w-full">
                                    <img
                                        className="w-full h-[120px] object-contain"
                                        src={el?.thumbnail}
                                        alt=""
                                    />
                                </div>

                                <div>
                                    <p className="text-[14px] line-clamp-2 font-sans text-black leading-4.1">
                                        {el?.description}
                                    </p>

                                    <div className="mt-2 flex items-center justify-between">
                                        <p className="text-[14px] text-[#2DA5F3] font-medium">
                                            ${(
                                                el?.price -
                                                (el?.price * el?.discountPercentage) / 100
                                            ).toFixed(2)}
                                        </p>
                                        <p className="text-[14px] text-gray-500 line-through font-medium">
                                            ${el?.price}
                                        </p>
                                    </div>
                                </div>

                                {/* OVERLAY */}
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
                                        onClick={() => dispatch(addToLike(el))}
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
                                    <div onClick={() => {
                                        setIsOpen(true)
                                        setSelectedId(el.id)
                                    }}
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
                            </div>

                        ))}
                    </div>
                </div>
                {isOpen ? (<ProductModal setIsOpen={setIsOpen} setSelectedId />) : ("")}
            </div>
        </section>
    )
}

export default BeastDeals
