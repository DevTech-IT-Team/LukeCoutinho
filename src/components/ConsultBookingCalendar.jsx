import React from 'react';
import { DayPicker } from 'react-day-picker';
import { addDays, addMonths, startOfDay, format } from 'date-fns';
import { enIN } from 'date-fns/locale';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { CONSULT_TIME_SLOTS, formatTimeSlotLabel } from '../data/consultServices';
import 'react-day-picker/style.css';
import './consult-calendar.css';

/**
 * Full month grid + time slots for consult booking.
 * Earliest bookable day: tomorrow (24h notice). Window: ~6 months.
 */
export default function ConsultBookingCalendar({
  selectedDate,
  onSelectDate,
  selectedTime,
  onSelectTime,
}) {
  const today = startOfDay(new Date());
  const firstBookable = addDays(today, 1);
  const lastBookable = addMonths(today, 6);
  const hasDate = Boolean(selectedDate);
  const hasTime = Boolean(selectedTime);

  const dateChip =
    selectedDate &&
    format(selectedDate, 'EEE, d MMM yyyy', { locale: enIN });

  return (
    <div
      className={`consult-booking-calendar${hasDate ? ' has-date' : ''}${hasTime ? ' has-time' : ''}`}
    >
      <div className="consult-calendar-header">
        <div className="consult-calendar-header-icon" aria-hidden="true">
          <Sparkles size={18} strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="consult-calendar-title" id="consult-schedule-heading">
            Preferred date &amp; time
          </h3>
          <p className="consult-calendar-sub">
            Tap a day, then a slot — calendar updates instantly.
          </p>
        </div>
      </div>

      <div className="consult-calendar-steps" aria-hidden="true">
        <span className={`consult-calendar-step${hasDate ? ' is-done' : ' is-active'}`}>
          <span className="consult-calendar-step-num">1</span>
          Date
        </span>
        <span className="consult-calendar-step-line" />
        <span className={`consult-calendar-step${hasTime ? ' is-done' : hasDate ? ' is-active' : ''}`}>
          <span className="consult-calendar-step-num">2</span>
          Time
        </span>
      </div>

      {dateChip && (
        <div className="consult-calendar-chip" role="status">
          <Calendar size={14} aria-hidden />
          <span>{dateChip}</span>
          {selectedTime && (
            <>
              <span className="consult-calendar-chip-dot" aria-hidden />
              <Clock size={14} aria-hidden />
              <span>{formatTimeSlotLabel(selectedTime)}</span>
            </>
          )}
        </div>
      )}

      <div className="consult-calendar-grid">
        <div className="consult-calendar-panel consult-calendar-panel--month">
          <div className="consult-calendar-panel-label">
            <Calendar size={14} strokeWidth={2} aria-hidden />
            Pick a day
          </div>
          <div className="consult-calendar-month-inner">
            <DayPicker
              mode="single"
              required={false}
              selected={selectedDate}
              onSelect={onSelectDate}
              disabled={{ before: firstBookable }}
              defaultMonth={firstBookable}
              startMonth={firstBookable}
              endMonth={lastBookable}
              captionLayout="dropdown-years"
              weekStartsOn={1}
              navLayout="around"
              aria-labelledby="consult-schedule-heading"
            />
          </div>
        </div>

        <div
          className={`consult-calendar-panel consult-calendar-panel--times${hasDate ? ' is-unlocked' : ' is-locked'}`}
          role="group"
          aria-label="Available times"
        >
          <div className="consult-calendar-panel-label">
            <Clock size={14} strokeWidth={2} aria-hidden />
            Pick a time
          </div>
          {!hasDate && (
            <p className="consult-time-slots-cta">
              Choose a date on the left to unlock 30-minute slots.
            </p>
          )}
          <div className="consult-time-slots-grid">
            {CONSULT_TIME_SLOTS.map((slot) => {
              const active = selectedTime === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  className={`consult-time-slot${active ? ' is-selected' : ''}`}
                  aria-pressed={active}
                  disabled={!selectedDate}
                  onClick={() => onSelectTime(slot)}
                >
                  <span className="consult-time-slot-inner">{formatTimeSlotLabel(slot)}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
