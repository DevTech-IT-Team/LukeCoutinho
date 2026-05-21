import React from 'react';
import CorporateEnquiryForm from '../../../components/forms/CorporateEnquiryForm';
import EditorialMasthead from '../../../components/layout/EditorialMasthead';

const GlobalShiftCTA = () => {
  return (
    <section className="bg-white py-16 lg:py-24 px-6 md:px-10 lg:px-16 relative overflow-hidden" id="enquire">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-black text-gray-50 leading-none">GLOBAL</span>
      </div>

      <div className="max-w-[720px] mx-auto relative z-10">
        <EditorialMasthead
          eyebrow="Corporate wellness"
          title="Be part of a"
          titleAccent="global shift toward health"
          className="mb-12"
        >
          <p>
            Empower your organisation with integrative lifestyle medicine — enquire below and our team will design a
            program around your people.
          </p>
        </EditorialMasthead>

        <CorporateEnquiryForm />
      </div>
    </section>
  );
};

export default GlobalShiftCTA;
