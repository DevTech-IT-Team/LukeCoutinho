import React from 'react';
import { BookOpen, Download } from 'lucide-react';
import DownloadWithEmailTooltip from '../components/DownloadWithEmailTooltip';
import { FREE_BOOKS } from '../data/booksDownloads';
import '../components/consult/book-consult-flow.css';
import './books.css';

export default function Books() {
  return (
    <div className="books-page">
      <header className="books-page__hero">
        <div className="books-page__hero-inner">
          <p className="books-page__eyebrow">
            <BookOpen size={16} aria-hidden />
            Free Resources
          </p>
          <h1>Books &amp; Downloads</h1>
          <p>Transformative reads and free guides by Luke Coutinho — download instantly.</p>
        </div>
      </header>

      <section className="books-page__grid-wrap" aria-labelledby="books-list-title">
        <h2 id="books-list-title" className="sr-only">
          Available downloads
        </h2>
        <ul className="books-page__grid">
          {FREE_BOOKS.map((book) => (
            <li key={book.id} className="books-page__card">
              <img src={book.cover} alt="" className="books-page__cover" loading="lazy" />
              <div className="books-page__body">
                <h3>{book.title}</h3>
                <p>{book.subtitle}</p>
                <DownloadWithEmailTooltip
                  href={book.pdf}
                  downloadLabel={`Download ${book.title} PDF`}
                  className="books-page__download"
                >
                  <Download size={14} aria-hidden />
                  Download PDF
                </DownloadWithEmailTooltip>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
