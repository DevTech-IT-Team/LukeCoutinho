import React, { createContext, useCallback, useContext, useState } from 'react';
import ConsultBookingDrawer from '../components/ConsultBookingDrawer';

const ConsultBookingContext = createContext(null);

export function ConsultBookingProvider({ children }) {
  const [drawer, setDrawer] = useState({
    isOpen: false,
    mode: 'booking',
    expertId: null,
    categoryId: null,
  });

  const openBooking = useCallback((opts = {}) => {
    setDrawer({
      isOpen: true,
      mode: opts.mode || 'booking',
      expertId: opts.expertId || null,
      categoryId: opts.categoryId || null,
    });
  }, []);

  const closeBooking = useCallback(() => {
    setDrawer((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <ConsultBookingContext.Provider value={{ ...drawer, openBooking, closeBooking }}>
      {children}
      <ConsultBookingDrawer
        isOpen={drawer.isOpen}
        onClose={closeBooking}
        mode={drawer.mode}
        initialExpertId={drawer.expertId}
        initialCategoryId={drawer.categoryId}
      />
    </ConsultBookingContext.Provider>
  );
}

export function useConsultBooking() {
  const ctx = useContext(ConsultBookingContext);
  if (!ctx) {
    throw new Error('useConsultBooking must be used within ConsultBookingProvider');
  }
  return ctx;
}
