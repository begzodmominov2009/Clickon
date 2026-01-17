import React, { useEffect, useState } from 'react';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, removeToCart } from '../../features/CartSlice';

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState([]);
  const cart = useSelector((state) => state?.cart || []);
  console.log(cart);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart) {
      setCartItems(cart);
    }
  }, [cart]);

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // Hisob-kitob logikasi
  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const subtotal = cartItems.reduce((sum, item) => {
    const quantity = item.quantity || 1;
    return sum + (item.price * quantity);
  }, 0);

  const originalTotal = cartItems.reduce((sum, item) => {
    const quantity = item.quantity || 1;
    const original = item.originalPrice || item.price;
    return sum + (original * quantity);
  }, 0);

  const totalDiscount = originalTotal - subtotal;

  const shipping = subtotal > 100 ? 0 : 10;

  const total = subtotal + shipping;

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems?.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Your cart is empty</p>
              </div>
            ) : (
              cartItems?.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-lg"
                    />

                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>

                          {item.description && (
                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                              {item.description}
                            </p>
                          )}

                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xl font-bold text-blue-600">
                              ${item.price.toFixed(2)}
                            </span>
                            {item.originalPrice && item.originalPrice > item.price && (
                              <>
                                <span className="text-sm text-gray-400 line-through">
                                  ${item.originalPrice.toFixed(2)}
                                </span>
                                <span className="text-sm text-green-600 font-medium">
                                  -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={() => dispatch(removeToCart(item))}
                          className="text-red-500 cursor-pointer hover:text-red-700 p-2 ml-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center">
                        <button
                        onClick={() => dispatch(decrease(item))}
                          className="w-8 h-8 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-semibold">{item?.qty}</span>
                        <button
                          onClick={() => dispatch(increase(item))}
                          className="w-8 h-8 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 lg:sticky lg:top-35">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="text-gray-600">Total Products</span>
                  <span className="font-semibold text-gray-900">{totalItems}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>

                {totalDiscount > 0 && (
                  <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                    <span className="text-gray-600">Total Discount</span>
                    <span className="font-semibold text-green-600">-${totalDiscount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-gray-900">
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                {shipping > 0 && subtotal > 0 && (
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-blue-800">
                      Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center mb-6 pt-4 border-t-2 border-gray-300">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
              </div>

              <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}