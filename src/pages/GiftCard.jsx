import React, { useState } from "react";
import {
  CreditCard,
  Gift,
  CheckCircle,
  Mail,
  MessageSquare,
} from "lucide-react";

export default function GiftCard() {
  const [formData, setFormData] = useState({
    amount: "",
    recipientEmail: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const quickAmounts = ["1000", "2500", "5000", "10000"];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "amount" && value < 0) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuickAmount = (amount) => {
    setFormData((prev) => ({
      ...prev,
      amount,
    }));
  };

  const resetForm = () => {
    setFormData({
      amount: "",
      recipientEmail: "",
      message: "",
    });

    setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.amount || Number(formData.amount) < 500) {
      alert("Minimum gift amount is ₹500");
      return;
    }

    setStatus("sending");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1800));

      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 py-16 pt-28 flex items-center justify-center antialiased">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 p-8 text-center text-white sm:p-12">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 blur-xl"></div>

          <h1 className="flex items-center justify-center gap-2 text-3xl font-black tracking-tight sm:text-4xl">
            Gift a Wellness Experience
          </h1>
        </div>

        {status === "sent" ? (
          <div className="mx-auto max-w-md p-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="text-green-600" size={36} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Gift Card Sent Successfully!
            </h2>

            <p className="mt-3 text-gray-600">
              An elegant digital voucher worth{" "}
              <span className="font-bold text-gray-900">
                ₹{Number(formData.amount).toLocaleString("en-IN")}
              </span>{" "}
              has been dispatched to{" "}
              <span className="font-semibold text-orange-600">
                {formData.recipientEmail}
              </span>
              .
            </p>

            <button
              onClick={resetForm}
              className="mt-8 rounded-xl bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-800"
            >
              Send Another Gift
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 divide-gray-100 lg:grid-cols-2 lg:divide-x">
            {/* Left Preview */}
            <div className="flex flex-col items-center justify-center bg-slate-50/50 p-8 sm:p-12">
              <span className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                Live Preview
              </span>

              <div className="group relative flex aspect-[1.58/1] w-full max-w-sm flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 p-6 text-white shadow-lg">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-orange-500/10 blur-2xl transition-all duration-500 group-hover:bg-orange-500/20"></div>

                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-orange-400">
                      Wellness Pass
                    </p>

                    <p className="mt-1 text-lg font-semibold text-slate-200">
                      E-Gift Voucher
                    </p>
                  </div>

                  <Gift className="text-orange-400" size={28} />
                </div>

                <div className="my-auto">
                  <p className="text-xs text-slate-400">Value</p>

                  <p className="text-3xl font-black tracking-tight text-white">
                    ₹
                    {formData.amount
                      ? Number(formData.amount).toLocaleString("en-IN")
                      : "0,000"}
                  </p>
                </div>

                <div className="flex items-end justify-between border-t border-slate-700/50 pt-3">
                  <div className="max-w-[70%]">
                    <p className="truncate text-[10px] uppercase tracking-wider text-slate-400">
                      To
                    </p>

                    <p className="truncate text-xs font-medium text-slate-200">
                      {formData.recipientEmail || "recipient@email.com"}
                    </p>
                  </div>

                  <span className="rounded border border-slate-700 bg-slate-800 px-2 py-1 text-[10px] text-slate-300">
                    Active
                  </span>
                </div>
              </div>

              {formData.message && (
                <div className="mt-4 w-full max-w-sm rounded-xl border border-gray-200 bg-white p-3 text-sm italic text-gray-600 shadow-sm">
                  "{formData.message}"
                </div>
              )}
            </div>

            {/* Right Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 sm:p-12"
            >
              {/* Amount */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700">
                  <CreditCard size={16} className="text-orange-500" />
                  Select Amount
                </label>

                <div className="mb-3 grid grid-cols-4 gap-2">
                  {quickAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handleQuickAmount(amt)}
                      className={`rounded-xl border py-2 text-sm font-bold transition-all duration-300 ${formData.amount === amt
                          ? "border-orange-500 bg-orange-500 text-white shadow-sm"
                          : "border-gray-200 bg-white text-gray-700 hover:border-orange-300"
                        }`}
                    >
                      ₹{parseInt(amt).toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-lg font-bold text-gray-500">
                    ₹
                  </span>

                  <input
                    type="number"
                    name="amount"
                    required
                    min="500"
                    placeholder="Custom amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-slate-50 py-2.5 pl-8 pr-3 text-lg font-semibold outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white"
                  />
                </div>

                <span className="mt-1 block text-xs text-gray-400">
                  Minimum value of ₹500 required
                </span>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700">
                  <Mail size={16} className="text-orange-500" />
                  Recipient Details
                </label>

                <input
                  type="email"
                  name="recipientEmail"
                  required
                  placeholder="Enter recipient's email address"
                  value={formData.recipientEmail}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-2.5 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700">
                  <MessageSquare
                    size={16}
                    className="text-orange-500"
                  />
                  Personal Note
                  <span className="text-xs font-normal text-gray-400">
                    (Optional)
                  </span>
                </label>

                <textarea
                  name="message"
                  rows={3}
                  maxLength={160}
                  placeholder="Write a sweet message to go with the voucher..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-gray-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3.5 text-base font-bold text-white shadow-md transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:shadow-lg disabled:cursor-not-allowed disabled:from-slate-400 disabled:to-slate-400"
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 
                        0 0 5.373 0 12h4zm2 
                        5.291A7.962 7.962 0 014 
                        12H0c0 3.042 1.135 5.824 
                        3 7.938l3-2.647z"
                      ></path>
                    </svg>

                    Processing Secure Payment...
                  </>
                ) : (
                  "Purchase & Send Voucher"
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}