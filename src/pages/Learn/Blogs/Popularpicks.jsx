import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionEyebrow from '../../../components/layout/SectionEyebrow';
import './blogs.css';

const PopularPicks = () => {
  const articles = [
    {
      id: 1,
      title: 'From Samosa to Pizza: The Shocking Number of Steps Your Junk Food Demands',
      date: '14 January, 2026',
      category: 'Nutrition',
      image:
        'https://images.unsplash.com/photo-1601050638917-3d0663052bc4?auto=format&fit=crop&q=80&w=800',
      featured: true,
    },
    {
      id: 2,
      title: 'Why a Warm Bowl Still Works: 5 Best Soups for Cold, Cough, Sore Throat & Fever',
      date: '13 January, 2026',
      category: 'Wellness',
      image:
        'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
      featured: false,
    },
    {
      id: 3,
      title: 'From Stage 3 Blood Cancer to Remission: How Nora Found Balance at 47',
      date: '12 January, 2026',
      category: 'Lifestyle',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      featured: false,
    },
  ];

  return (
    <section id="popular-picks" className="blogs-picks scroll-mt-28">
      <div className="blogs-picks__inner">
        <header className="blogs-picks__head">
          <div>
            <SectionEyebrow>Curated content</SectionEyebrow>
            <h2 className="blogs-picks__title">Popular picks</h2>
          </div>
          <a href="#categories" className="blogs-picks__link">
            Browse categories
            <ArrowRight size={14} />
          </a>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article
            className="blogs-card lg:col-span-7"
            onClick={() => {}}
            onKeyDown={(e) => e.key === 'Enter' && {}}
            role="button"
            tabIndex={0}
          >
            <div className="aspect-[16/10] blogs-card__media">
              <img src={articles[0].image} alt="" />
            </div>
            <div className="blogs-card__body">
              <div>
                <span className="blogs-card__tag">Featured</span>
                <span className="blogs-card__date">{articles[0].date}</span>
              </div>
              <h3 className="blogs-card__heading">{articles[0].title}</h3>
            </div>
          </article>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {articles.slice(1).map((article) => (
              <article
                key={article.id}
                className="blogs-card blogs-card--side"
                onClick={() => {}}
                onKeyDown={(e) => e.key === 'Enter' && {}}
                role="button"
                tabIndex={0}
              >
                <div className="blogs-card__media">
                  <img src={article.image} alt="" />
                </div>
                <div className="blogs-card__body">
                  <span className="blogs-card__tag blogs-card__category">{article.category}</span>
                  <h3 className="blogs-card__heading text-[1.15rem]">{article.title}</h3>
                  <p className="blogs-card__date mt-3 ml-0">{article.date}</p>
                </div>
              </article>
            ))}

            <div className="blogs-promo">
              <h4>Want more wellness tips?</h4>
              <p>Subscribe to our weekly newsletter.</p>
              <button type="button">Sign up now →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPicks;
