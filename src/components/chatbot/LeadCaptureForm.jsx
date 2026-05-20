import React from 'react';

export default function LeadCaptureForm({ formData, onChange, onSubmit, isSubmitting }) {
  return (
    <form onSubmit={onSubmit} className="mt-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-3">
        <label className="space-y-2 text-sm text-slate-700">
          <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Full Name</span>
          <input
            required
            type="text"
            value={formData.fullName}
            onChange={(e) => onChange('fullName', e.target.value)}
            placeholder="Jane Doe"
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-700">
          <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Email Address</span>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="jane@example.com"
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-700">
          <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Phone Number</span>
          <input
            required
            type="tel"
            value={formData.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-700">
          <span className="block text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Preferred Callback Time</span>
          <input
            required
            type="text"
            value={formData.callbackTime}
            onChange={(e) => onChange('callbackTime', e.target.value)}
            placeholder="Morning / Afternoon / Evening"
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 w-full rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_12px_28px_-12px_rgba(249,115,22,0.9)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Submitting...' : 'Connect with Advisor'}
      </button>
    </form>
  );
}
