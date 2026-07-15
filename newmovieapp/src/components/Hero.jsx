import './Hero.css';


/**
 * Hero Component
 * Full-viewport cinematic hero section featuring a movie backdrop,
 * dark gradient overlays, title, rating, genres, description, and CTA buttons.
 * All content uses staggered fade-in-up entrance animations.
 */
const Hero = () => {
  return (
    <section className="hero" id="hero-section" aria-label="Featured Movie">
      {/* ── Background Image ── */}
      <div className="hero__backdrop" aria-hidden="true">
        <img
          src={heroBg}
          alt=""
          loading="eager"
          draggable="false"
        />
      </div>

      {/* ── Gradient Overlay ── */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="hero__content">
        {/* Title */}
        <h1 className="hero__title" id="hero-title">
          Interstellar
        </h1>

        {/* Star Rating */}
        <div className="hero__rating" id="hero-rating" aria-label="Rating: 5 out of 5 stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="hero__star" aria-hidden="true">
              ★
            </span>
          ))}
          <span className="hero__rating-text">9.2 / 10</span>
        </div>

        {/* Genres */}
        <div className="hero__genres" id="hero-genres">
          <span className="hero__genre">Sci-Fi</span>
          <span className="hero__genre-dot" aria-hidden="true" />
          <span className="hero__genre">Drama</span>
          <span className="hero__genre-dot" aria-hidden="true" />
          <span className="hero__genre">Adventure</span>
        </div>

        {/* Description */}
        <p className="hero__description" id="hero-description">
          A team of explorers travel through a wormhole in space in an attempt
          to ensure humanity&apos;s survival. When Earth becomes uninhabitable,
          a group of astronauts ventures beyond our solar system in search of a
          new home.
        </p>

        {/* CTA Buttons */}
        <div className="hero__actions" id="hero-actions">
          {/* Play Button */}
          <button className="hero__btn hero__btn--play" id="btn-play" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>

          {/* More Info Button */}
          <button className="hero__btn hero__btn--info" id="btn-more-info" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            More Info
          </button>
        </div>
      </div>

      {/* ── Bottom Vignette ── */}
      <div className="hero__vignette" aria-hidden="true" />
    </section>
  );
};

export default Hero;
