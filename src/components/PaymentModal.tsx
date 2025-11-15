import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PaymentModalProps {
  plan: string;
  price: string;
  onClose: () => void;
}

const PaymentModal = ({ plan, price, onClose }: PaymentModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in shadow-2xl border-4 border-purple-200 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 animate-gradient opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse"></div>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b relative z-10">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">Try {plan}</h2>
          <button onClick={onClose} className="p-2 hover:bg-red-100 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90">
            <X className="w-5 h-5 text-red-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 relative z-10">
          {/* Trial Info */}
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border-2 border-green-200 animate-bounce-slow shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-lg font-bold text-green-800 animate-pulse">🎉 7 days free</div>
            <div className="text-sm text-green-600">Then {price} per year starting November 22, 2025</div>
          </div>

          {/* Plan Details */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-semibold">{plan}</span>
              <span className="text-sm text-gray-500">Qty 1</span>
            </div>
            <div className="flex justify-between">
              <span>{price} / year after</span>
            </div>
            <div className="text-sm text-green-600">7 days free</div>
          </div>

          {/* Pricing */}
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{price}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total after trial</span>
              <span>{price}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total due today</span>
              <span className="text-green-600">US$0.00</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-purple-700">📧 Contact details</h3>
            <input 
              type="email" 
              placeholder="email@example.com" 
              className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:shadow-md"
            />
            <div className="flex gap-2">
              <select className="p-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 transition-all duration-300">
                <option>🇮🇳 IN</option>
              </select>
              <input 
                type="tel" 
                placeholder="081234 56789" 
                className="flex-1 p-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:shadow-md"
              />
            </div>
            <input 
              type="text" 
              placeholder="What would you like Memorae to call you? 😊" 
              className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 hover:shadow-md"
            />
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <h3 className="font-semibold text-blue-700">💳 Payment method</h3>
            <div className="space-y-3">
              <input 
                type="text" 
                placeholder="1234 1234 1234 1234" 
                className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:shadow-md"
              />
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="MM / YY" 
                  className="flex-1 p-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:shadow-md"
                />
                <input 
                  type="text" 
                  placeholder="CVC" 
                  className="flex-1 p-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:shadow-md"
                />
              </div>
              <input 
                type="text" 
                placeholder="Full name on card" 
                className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:shadow-md"
              />
              <select className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 transition-all duration-300">
                <option>🇮🇳 India</option>
              </select>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl border-2 border-yellow-300 animate-pulse shadow-lg">
            <p className="text-sm text-yellow-800 font-semibold">
              ⚠️ IMPORTANT: Please use exactly the same phone number that you will use for Memorae.
            </p>
          </div>

          {/* Start Trial Button */}
          <Button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 animate-pulse">
            🚀 Start trial
          </Button>

          {/* Terms */}
          <div className="text-xs text-gray-500 text-center space-y-1">
            <p>By subscribing, you authorize Memorae.ai to charge you according to the terms until you cancel.</p>
            <p>Pay securely at Memorae.ai and everywhere Link is accepted.</p>
            <div className="flex justify-center gap-4 mt-2">
              <span>Terms</span>
              <span>Privacy</span>
              <span>Free returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;