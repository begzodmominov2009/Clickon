import React, { useState } from "react";
import { AiOutlineHome, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const BottomNav = () => {
    const [active, setActive] = useState("home");

    const navItems = [
        { id: "home", icon: <AiOutlineHome size={24} />, label: "Home", to: "/" },
        { id: "like", icon: <AiOutlineHeart size={24} />, label: "Like", to: "like" },
        { id: "cart", icon: <BsCartCheckFill size={24} />, label: "Cart", to: "cart"  },
        { id: "profile", icon: <AiOutlineUser size={24} />, label: "Profile", to: "profile" },
    ];

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-md md:hidden">
            <div className="flex justify-between px-3 items-center py-2">
                {navItems.map((item) => (
                    <Link
                    to={item.to}
                        key={item.id}
                        className={`flex flex-col items-center justify-center cursor-pointer transition-colors font-medium duration-200 ${active === item.id ? "text-[#1B6392]" : "text-gray-500"
                            }`}
                        onClick={() => setActive(item.id)}
                    >
                        <span className="w-6 h-6">{item.icon}</span>
                        <span className="text-[14px] mt-1">{item.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BottomNav;
