import { FaRegCommentAlt } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
    return (
        <section className=" container mx-auto px-0 sm:px-2 w-full mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                {/* ================= LEFT BIG BANNER ================= */}
                <div className="lg:col-span-2 bg-[#f7f7f7] shadow-md border-gray-300 rounded-lg p-10 flex items-center justify-between relative overflow-hidden">

                    {/* TEXT */}
                    <div className="max-w-md">
                        <span className="text-xs font-semibold text-[#2DA5F3] uppercase tracking-wide">
                            The best place to play
                        </span>

                        <h1 className="text-4xl font-bold mt-3 mb-4 text-[#1D1F21]">
                            Xbox Consoles
                        </h1>

                        <p className="text-sm text-gray-600 mb-6">
                            Save up to 50% on select Xbox games. Get <br />
                            3 months of PC Game Pass for $2 USD.
                        </p>

                        <button className="bg-[#FA8232] text-white px-6 py-3 rounded flex items-center gap-2 text-sm font-semibold">
                            SHOP NOW <FiArrowRight />
                        </button>

                        {/* SLIDER DOTS */}
                        <div className="flex gap-2 mt-10">
                            <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="relative">
                        <img
                            src="/1_3.svg"
                            alt="Xbox"
                            className="w-[320px] h-[308px]"
                        />

                        {/* PRICE CIRCLE */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#2DA5F3] text-white flex items-center justify-center rounded-full text-lg font-bold border-4 border-white">
                            $299
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <div className="flex flex-col gap-4">

                    {/* TOP SMALL CARD */}
                    <div className="bg-[#111416] rounded-lg pl-6 pt-5 shadow  text-white flex items-center justify-between relative overflow-hidden">

                        <div>
                            <span className="text-xs text-yellow-400 font-semibold uppercase">
                                Summer Sales
                            </span>

                            <h3 className="text-lg font-semibold mt-2">
                                New Google <br /> Pixel 6 Pro
                            </h3>

                            <button className="mt-4 bg-[#FA8232] px-4 mb-5 cursor-pointer py-2 text-xs font-semibold rounded flex items-center gap-1">
                                SHOP NOW <FiArrowRight />
                            </button>
                        </div>

                        <img
                            src="/1_2.svg"
                            alt="Pixel"
                            className="w-[150px]"
                        />

                        {/* DISCOUNT */}
                        <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                            29% OFF
                        </span>
                    </div>

                    {/* BOTTOM SMALL CARD */}
                    <div className="bg-[#f7f7f7] border-gray-300 shadow-md border rounded-lg p-6 flex items-center justify-between">

                        <img
                            src="/1_1.svg"
                            alt="Xiaomi"
                            className="max-w-[220px] h-[150px]"
                        />

                        <div>
                            <h3 className="font-semibold text-lg text-[#1D1F21]">
                                Xiaomi <br /> FlipBuds Pro
                            </h3>

                            <p className="text-[#2DA5F3] font-semibold mt-1">
                                $299 USD
                            </p>

                            <button className="mt-3 bg-[#FA8232] cursor-pointer px-4 py-2 text-xs text-white font-semibold rounded flex items-center gap-1">
                                SHOP NOW <FiArrowRight />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* ================= FEATURES ================= */}
            <div className="relative mt-6">
                <div className="overflow-x-auto scrollbar-hide  [&::-webkit-scrollbar]:w-2">
                    <div className="flex gap-4 px-2">
                        {/* CARD 1 */}
                        <div className="flex-shrink-0 w-[240px] bg-[#f7f7f7] border border-gray-300 shadow-md rounded-lg p-4 cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <img className="group-hover:scale-115 duration-200" src="/Package.svg" alt="Package" />
                                <div>
                                    <p className="font-semibold text-sm">FASTED DELIVERY</p>
                                    <p className="text-xs text-gray-500">Delivery in 24/H</p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="flex-shrink-0 w-[240px] bg-[#f7f7f7] border border-gray-300 shadow-md rounded-lg p-4 cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <img className="group-hover:scale-115 duration-200" src="/Trophy.svg" alt="Trophy" />
                                <div>
                                    <p className="font-semibold text-sm">24 HOURS RETURN</p>
                                    <p className="text-xs text-gray-500">100% money-back guarantee</p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="flex-shrink-0 w-[240px] bg-[#f7f7f7] border border-gray-300 shadow-md rounded-lg p-4 cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <img className="group-hover:scale-115 duration-200" src="/CreditCard.svg" alt="Card" />
                                <div>
                                    <p className="font-semibold text-sm">SECURE PAYMENT</p>
                                    <p className="text-xs text-gray-500">Your money is safe</p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className="flex-shrink-0 w-[240px] bg-[#f7f7f7] border border-gray-300 shadow-md rounded-lg p-4 cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <img className="group-hover:scale-115 duration-200" src="/Headphones.svg" alt="Phones" />
                                <div>
                                    <p className="font-semibold text-sm">SUPPORT 24/7</p>
                                    <p className="text-xs text-gray-500">Live contact/message</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-[240px] bg-[#f7f7f7] border border-gray-300 shadow-md rounded-lg p-4 cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <FaRegCommentAlt className="group-hover:scale-115 w-8 h-8 duration-200" />

                                <div>
                                    <p className="font-semibold text-sm">ABOUT US 24/7</p>
                                    <p className="text-xs text-gray-500">Live contact/message</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PASTDA chiziq */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300"></div>
            </div>

        </section>
    );
};

export default HeroSection;
