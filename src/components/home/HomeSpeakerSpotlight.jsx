import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mic2 } from 'lucide-react';
import { BD_SPEAKER } from '../../data/bdContent';
import BdLeadForm from '../forms/BdLeadForm';

export default function HomeSpeakerSpotlight() {
  return (
    <section className="lc-speaker-spotlight" id="book-luke-speaker" aria-labelledby="speaker-spotlight-title">
      <div className="lc-speaker-spotlight__grid">
        <div className="lc-speaker-spotlight__copy">
          <p className="lc-speaker-spotlight__eyebrow">
            <Mic2 size={14} aria-hidden />
            {BD_SPEAKER.eyebrow}
          </p>
          <h2 id="speaker-spotlight-title">{BD_SPEAKER.title}</h2>
          <p className="lc-speaker-spotlight__sub">{BD_SPEAKER.subtitle}</p>
          <ul className="lc-speaker-spotlight__formats">
            {BD_SPEAKER.formats.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <Link to={BD_SPEAKER.formAnchor} className="lc-speaker-spotlight__link">
            Full corporate enquiry page
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
        <div className="lc-speaker-spotlight__form">
          <p className="lc-speaker-spotlight__form-label">Quick enquiry — speaker / webinar</p>
          <BdLeadForm defaultType="speaker" id="speaker-enquire-home" />
        </div>
      </div>
    </section>
  );
}
