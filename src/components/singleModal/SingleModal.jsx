import React, { useState } from 'react';
import { X, Star, Heart, ShoppingCart, Plus, Minus } from 'lucide-react';

export default function ProductModal({ setIsOpen, setSelectedId }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('gray');
    const [selectedSize, setSelectedSize] = useState('256GB');
    const [selectedMemory, setSelectedMemory] = useState('8GB');
    const [selectedStorage, setSelectedStorage] = useState('512GB');

    const product = {
        name: "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray",
        price: 1699,
        originalPrice: 1399.00,
        discount: 24,
        rating: 4.7,
        reviews: 738,
        brand: "Apple",
        category: "Electronics Devices",
        availability: "In stock",
        images: [
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1542393881221-373c0ffe01d5?w=400&h=400&fit=crop"
        ]
    };

    const [selectedImage, setSelectedImage] = useState(0);

    const colors = [
        { name: 'Space Gray', value: 'gray', color: 'bg-gray-600' },
        { name: 'Silver', value: 'silver', color: 'bg-gray-300' }
    ];

    const sizes = ['128GB', '256GB', '512GB', '1TB'];
    const memoryOptions = ['8GB', '16GB', '32GB'];
    const storageOptions = ['256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD'];


    return (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 backdrop-blur-lg bg-white/10 flex items-center justify-center z-150 p-4">
            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{product.rating} Star Rating</span>
                            <span className="text-gray-500">({product.reviews} User feedback)</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Side - Images */}
                        <div className="space-y-4">
                            {/* Main Image */}
                            <div className="border-2 border-blue-500 rounded-lg p-4 bg-gray-50">
                                <img
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    className="w-full h-96 object-contain"
                                />
                            </div>

                            {/* Thumbnail Images */}
                            <div className="flex gap-2 justify-center">
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`border-2 rounded-lg p-2 ${selectedImage === index ? 'border-orange-500' : 'border-gray-200'
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Product ${index + 1}`}
                                            className="w-16 h-16 object-contain"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Details */}
                        <div className="space-y-4">
                            <h1 className="text-2xl font-semibold text-gray-900">{product.name}</h1>

                            <div className="flex items-center gap-4">
                                <span className="text-3xl font-bold text-blue-600">${product.price}</span>
                                <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                                <span className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-semibold">
                                    {product.discount}% OFF
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-gray-500">Brand:</span>
                                    <span className="ml-2 font-semibold text-blue-600">{product.brand}</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Category:</span>
                                    <span className="ml-2 font-semibold">{product.category}</span>
                                </div>
                            </div>

                            {/* Color Selection */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">Color</label>
                                <div className="flex gap-2">
                                    {colors.map((color) => (
                                        <button
                                            key={color.value}
                                            onClick={() => setSelectedColor(color.value)}
                                            className={`w-10 h-10 rounded-full ${color.color} border-2 ${selectedColor === color.value ? 'border-blue-600' : 'border-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">Size</label>
                                <div className="flex gap-2">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 rounded border ${selectedSize === size
                                                ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                : 'border-gray-300 hover:border-gray-400'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Memory Selection */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">Memory</label>
                                <div className="flex gap-2">
                                    {memoryOptions.map((memory) => (
                                        <button
                                            key={memory}
                                            onClick={() => setSelectedMemory(memory)}
                                            className={`px-4 py-2 rounded border ${selectedMemory === memory
                                                ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                : 'border-gray-300 hover:border-gray-400'
                                                }`}
                                        >
                                            {memory} unified memory
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Storage Selection */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">Storage</label>
                                <div className="flex gap-2">
                                    {storageOptions.map((storage) => (
                                        <button
                                            key={storage}
                                            onClick={() => setSelectedStorage(storage)}
                                            className={`px-4 py-2 rounded border ${selectedStorage === storage
                                                ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                : 'border-gray-300 hover:border-gray-400'
                                                }`}
                                        >
                                            {storage} Storage
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity and Actions */}
                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex items-center border border-gray-300 rounded">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-3 py-2 hover:bg-gray-100"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="px-6 py-2 font-semibold">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-3 py-2 hover:bg-gray-100"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>

                                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded flex items-center justify-center gap-2">
                                    <ShoppingCart className="w-5 h-5" />
                                    ADD TO CART
                                </button>

                                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded">
                                    BUY NOW
                                </button>
                            </div>

                            {/* Additional Actions */}
                            <div className="flex gap-2">
                                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                                    <Heart className="w-5 h-5" />
                                    Add to Wishlist
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                                    Add to Compare
                                </button>
                            </div>

                            {/* Payment Icons */}
                            <div className="pt-4 border-t">
                                <p className="text-sm text-gray-600 mb-2">100% Guarantee Safe Checkout</p>
                                <div className="flex gap-2">
                                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold">VISA</div>
                                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold">MC</div>
                                    <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-xs font-semibold text-white">AMEX</div>
                                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold">DISC</div>
                                    <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-xs font-semibold text-white">PP</div>
                                    <div className="w-12 h-8 bg-purple-600 rounded flex items-center justify-center text-xs font-semibold text-white">APLY</div>
                                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold">GPAY</div>
                                </div>
                            </div>

                            {/* Share Icons */}
                            <div className="flex items-center gap-3 pt-2">
                                <span className="text-sm text-gray-600">Share product:</span>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
                                        <span className="text-xs font-bold">f</span>
                                    </button>
                                    <button className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white">
                                        <span className="text-xs font-bold">t</span>
                                    </button>
                                    <button className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white">
                                        <span className="text-xs font-bold">P</span>
                                    </button>
                                    <button className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white">
                                        <span className="text-xs font-bold">in</span>
                                    </button>
                                    <button className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white">
                                        <span className="text-xs font-bold">M</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}