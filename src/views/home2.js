import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home2.css'

const Home2 = (props) => {
  return (
    <div className="home2-container1">
      <Helmet>
        <title>Home2 - Hungry Frank Lyrebird</title>
        <meta property="og:title" content="Home2 - Hungry Frank Lyrebird" />
      </Helmet>
      <Navigation></Navigation>
      <div className="home2-container2">
        <div className="home2-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
.hero-content, .feature-card, .process-step, .pricing-card, .pricing-addons {
  opacity: 1;
  transform: none;
}
.hero-image {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section
        id="hero"
        role="banner"
        aria-labelledby="hero-headline"
        className="hero-section"
      >
        <div className="hero-container">
          <div className="hero-content">
            <h1 id="hero-headline" className="hero-title home-hero-title">
              {' '}
              Websites for Therapists, Made Peacefully.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <p className="hero-description">
              {' '}
              Calm, patient-centered sites that build trust, simplify
              scheduling, and reflect your practice&apos;s natural care. We
              design warm, accessible websites with soft photography, gentle
              motion, and thoughtful layouts that help clients feel seen before
              they even walk in.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="credentials-strip">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="credential-icon"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>HIPAA-Aware</span>
              <span className="credential-divider">•</span>
              <span>Therapy-Focused</span>
              <span className="credential-divider">•</span>
              <span>Accessible Design</span>
            </div>
            <a href="#cta-section">
              <div
                aria-label="Start a project with Peaceful Pixel Solutions"
                className="btn btn-primary btn-lg hero-cta"
              >
                <span>
                  {' '}
                  Start a Project
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </a>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <img
                alt="Peaceful office interior with sunlight flowing through sheer curtains, creating a calming atmosphere"
                src="https://images.pexels.com/photos/29623054/pexels-photo-29623054.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="eager"
                className="hero-image"
              />
              <div className="hero-image-overlay"></div>
              <div className="hero-image-texture"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features-section"
        role="region"
        aria-labelledby="features-intro"
        className="features-section"
      >
        <div className="features-container">
          <div className="featured-panel">
            <h2 id="features-intro" className="section-title">
              {' '}
              Thoughtful Design for Caring Practices
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="section-subtitle">
              {' '}
              We blend clinical clarity with natural aesthetics to create
              websites that feel professional, warm, and welcoming—sites that
              reflect the care you provide.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <a href="#cta-section">
              <div
                aria-label="Explore our therapy-focused services"
                className="btn btn-primary"
              >
                <span>
                  {' '}
                  Explore Services
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </a>
          </div>
          <div className="features-grid">
            <article
              role="article"
              aria-labelledby="feature-1-title"
              className="feature-card"
            >
              <div className="feature-icon-wrapper">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="feature-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <div className="feature-content">
                <h3 id="feature-1-title" className="feature-title">
                  {' '}
                  Calm Design Process
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="feature-description">
                  {' '}
                  Thoughtful, low-stress collaboration that centers your
                  practice and your clients. We guide you through clear
                  milestones, gentle reviews, and mindful design choices so your
                  site feels both professional and peaceful.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </article>
            <article
              role="article"
              aria-labelledby="feature-2-title"
              className="feature-card"
            >
              <div className="feature-icon-wrapper">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="feature-icon"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="feature-content">
                <h3 id="feature-2-title" className="feature-title">
                  {' '}
                  Therapist-Friendly Tech
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="feature-description">
                  {' '}
                  Patient-focused features without the complexity: secure
                  contact forms, HIPAA-aware guidance, simple online booking
                  integrations, and accessible layouts that welcome every
                  visitor.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </article>
            <article
              role="article"
              aria-labelledby="feature-3-title"
              className="feature-card"
            >
              <div className="feature-icon-wrapper">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="feature-icon"
                >
                  <path
                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="feature-content">
                <h3 id="feature-3-title" className="feature-title">
                  Speed with Care
                </h3>
                <p className="feature-description">
                  {' '}
                  Fast turnarounds that don&apos;t rush the craft. Dedicated
                  sprints deliver a polished, patient-ready site in weeks—with
                  time built in for feedback and refinement.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </article>
            <article
              role="article"
              aria-labelledby="feature-4-title"
              className="feature-card"
            >
              <div className="feature-icon-wrapper">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="feature-icon"
                >
                  <path
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="feature-content">
                <h3 id="feature-4-title" className="feature-title">
                  {' '}
                  Ongoing Support &amp; Growth
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="feature-description">
                  {' '}
                  Responsive maintenance, gentle optimizations, and content
                  guidance that keep your site current, accessible, and aligned
                  with your evolving practice.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section
        id="process-section"
        role="region"
        aria-labelledby="process-headline"
        className="process-section"
      >
        <div className="process-container">
          <div className="process-intro">
            <h2 id="process-headline" className="section-title">
              {' '}
              Our Process — Calm, Clear, Collaborative
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="process-lead">
              {' '}
              A humane workflow that reduces tech anxiety, centers patient
              trust, and yields a sustainable website that reflects your
              practice&apos;s warmth and professionalism.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <ol className="process-steps">
            <li className="process-step">
              <div className="step-icon-container">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="step-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">Gentle Discovery</h3>
                <p className="step-description">
                  {' '}
                  We begin with a relaxed conversation to understand your
                  practice, patients, and values. We listen to your workflows,
                  accessibility needs, and sustainability goals so the site
                  supports care without extra effort.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </li>
            <li className="process-step">
              <div className="step-icon-container">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="step-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">Thoughtful Strategy</h3>
                <p className="step-description">
                  {' '}
                  We translate your goals into a clear site map and
                  patient-first pathways. Prioritizing trust signals, simple
                  appointment flows, and accessible content, we design for calm
                  navigation and measurable outcomes.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </li>
            <li className="process-step">
              <div className="step-icon-container">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="step-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                    <circle
                      r=".5"
                      cx="13.5"
                      cy="6.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      r=".5"
                      cx="17.5"
                      cy="10.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      r=".5"
                      cx="6.5"
                      cy="12.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      r=".5"
                      cx="8.5"
                      cy="7.5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">Crafted Design</h3>
                <p className="step-description">
                  {' '}
                  Using warm neutrals, soothing blues, and soft imagery, we
                  create a visual language that feels like a quiet waiting room.
                  Each page is designed for readability, screen accessibility,
                  and gentle motion—welcome animations that guide, never
                  distract.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </li>
            <li className="process-step">
              <div className="step-icon-container">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="step-icon"
                >
                  <g
                    fill="none\\"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path>
                    <circle r="3" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">Collaborative Review</h3>
                <p className="step-description">
                  {' '}
                  We share living prototypes and invite feedback in easy,
                  focused rounds. Your approval checkpoints are paced kindly so
                  decisions never feel rushed and revisions stay purposeful.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </li>
            <li className="process-step">
              <div className="step-icon-container">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="step-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </g>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">Seamless Launch &amp; Support</h3>
                <p className="step-description">
                  {' '}
                  We handle technical setup, secure hosting recommendations, and
                  accessibility checks. After launch we offer calm, ongoing
                  support for updates, telehealth links, and appointment tools
                  so your site remains a steady resource for patients.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section
        id="pricing-section"
        role="region"
        aria-labelledby="pricing-headline"
        className="pricing-section"
      >
        <div className="pricing-container">
          <div className="pricing-intro">
            <h2 id="pricing-headline" className="section-title">
              {' '}
              Transparent, Calming Pricing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="section-subtitle">
              {' '}
              Simple packages designed to launch a professional therapy website
              without tech stress.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="pricing-grid">
            <article
              role="article"
              aria-labelledby="price-starter"
              className="pricing-card"
            >
              <div className="pricing-card-header">
                <h3 id="price-starter" className="pricing-title">
                  Peaceful Presence
                </h3>
                <div className="pricing-badge">
                  <span>Starter</span>
                </div>
              </div>
              <div className="pricing-amount">
                <span className="price-value">$1,800</span>
                <span className="price-term">one-time</span>
              </div>
              <p className="pricing-ideal">Ideal for solo therapists</p>
              <ul className="pricing-features">
                <li className="pricing-feature">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    className="feature-check"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Custom one-page site</span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    className="feature-check"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Mobile-first, accessible layout</span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    className="feature-check"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Appointment link integration</span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    className="feature-check"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Secure contact form and basic SEO</span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    className="feature-check"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Two rounds of revisions</span>
                </li>
              </ul>
              <a href="#cta-section">
                <div
                  aria-label="Choose Peaceful Presence package"
                  className="btn-outline btn"
                >
                  <span>
                    {' '}
                    Get Started
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </article>
            <article
              role="article"
              aria-labelledby="price-growth"
              className="pricing-card-featured pricing-card"
            >
              <div className="pricing-card-header">
                <h3 id="price-growth" className="pricing-title">
                  Practice Bloom
                </h3>
                <div className="pricing-badge-featured pricing-badge">
                  <span>Growth</span>
                </div>
              </div>
              <div className="pricing-amount">
                <span className="price-value">$4,200</span>
                <span className="price-term">one-time</span>
              </div>
              <p className="pricing-ideal">Ideal for small practices</p>
              <ul className="pricing-features">
                <li className="pricing-feature">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    className="feature-check"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Multi-page site with Team &amp; Services</span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    className="feature-check"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Staff profiles and service pages</span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    className="feature-check"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Appointment scheduling integration</span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    className="feature-check"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Patient intake form and blog setup</span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    className="feature-check"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Three months maintenance &amp; analytics</span>
                </li>
              </ul>
              <a href="#cta-section">
                <div
                  aria-label="Choose Practice Bloom package"
                  className="btn btn-primary"
                >
                  <span>
                    {' '}
                    Get Started
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </article>
            <article
              role="article"
              aria-labelledby="price-premium"
              className="pricing-card"
            >
              <div className="pricing-card-header">
                <h3 id="price-premium" className="pricing-title">
                  Whole-Clinic Harmony
                </h3>
                <div className="pricing-badge">
                  <span>Premium</span>
                </div>
              </div>
              <div className="pricing-amount">
                <span className="price-value">$8,500</span>
                <span className="price-term">one-time</span>
              </div>
              <p className="pricing-ideal">Ideal for clinics</p>
              <ul className="pricing-features">
                <li className="pricing-feature">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    className="feature-check"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Custom design with brand palette</span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    className="feature-check"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Multi-provider profiles with workflows</span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    className="feature-check"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Telehealth integration guidance</span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    className="feature-check"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Accessibility audit &amp; advanced SEO</span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    className="feature-check"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Six months priority support</span>
                </li>
              </ul>
              <a href="#cta-section">
                <div
                  aria-label="Choose Whole-Clinic Harmony package"
                  className="btn-outline btn"
                >
                  <span>
                    {' '}
                    Get Started
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </article>
            <aside
              role="complementary"
              aria-labelledby="addons-title"
              className="pricing-addons"
            >
              <h3 id="addons-title" className="addons-title">
                Add-ons &amp; Care Plans
              </h3>
              <ul className="addons-list">
                <li className="addon-item">
                  <span>
                    {' '}
                    Monthly Care from
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <strong>$150/month</strong>
                </li>
                <li className="addon-item">
                  <span>Telehealth setup &amp; onboarding</span>
                </li>
                <li className="addon-item">
                  <span>Content refresh packages</span>
                </li>
                <li className="addon-item">
                  <span>Ongoing SEO optimization</span>
                </li>
              </ul>
              <p className="addons-note">
                {' '}
                Keep your site secure, accessible, and aligned with your
                practice&apos;s growth.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </aside>
          </div>
        </div>
      </section>
      <section
        id="cta-section"
        role="region"
        aria-labelledby="cta-headline"
        className="cta-section"
      >
        <div className="cta-container">
          <div className="cta-panel">
            <div className="cta-primary">
              <h2 id="cta-headline" className="cta-title">
                {' '}
                Ready to Start — Calmly and Confidently
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="cta-subtitle">
                {' '}
                Book a project consultation to design a compassionate,
                patient-focused website that reflects your practice&apos;s
                values and eases tech stress.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href="#">
                <div
                  aria-label="Schedule a 30-minute consultation with Peaceful Pixel Solutions"
                  className="btn-xl btn cta-button btn-primary"
                >
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    className="btn-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Schedule a 30-Minute Consult
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
            <div className="cta-secondary">
              <h3 className="cta-secondary-title">Explore Our Work</h3>
              <ul className="cta-links">
                <li className="cta-link-item">
                  <a href="#features-section">
                    <div className="cta-link">
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                        className="cta-link-icon"
                      >
                        <path
                          d="m5 12l7-7l7 7m-7 7V5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>
                        {' '}
                        Therapy-Focused Services
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="cta-link-item">
                  <a href="#process-section">
                    <div className="cta-link">
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                        className="cta-link-icon"
                      >
                        <path
                          d="m5 12l7-7l7 7m-7 7V5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>
                        {' '}
                        Our Calm Process
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="cta-link-item">
                  <a href="#pricing-section">
                    <div className="cta-link">
                      <svg
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                        className="cta-link-icon"
                      >
                        <path
                          d="m5 12l7-7l7 7m-7 7V5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>
                        {' '}
                        Transparent Pricing
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="cta-testimonial">
              <blockquote className="testimonial-quote">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="home2-quote-icon"
                >
                  <path
                    d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="home2-testimonial-text">
                  {' '}
                  &quot;Working with Peaceful Pixel was a truly calming
                  experience. They understood our practice&apos;s values and
                  created a site that feels warm and professional.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <footer className="home2-testimonial-author">
                  <span className="author-name">Dr. Sarah Mitchell</span>
                  <span className="author-role">Clinical Psychologist</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <div className="home2-container4">
        <div className="home2-container5">
          <Script
            html={`<style>
        @keyframes heroFadeIn {to {opacity: 1;
transform: translateY(0);}}@keyframes heroImageParallax {from {transform: scale(1.05) translateY(8px);}
to {transform: scale(1) translateY(0);}}@keyframes featuresFadeIn {to {opacity: 1;
transform: translateY(0);}}@keyframes cardFadeIn {to {opacity: 1;
transform: translateY(0);}}@keyframes stepFadeIn {to {opacity: 1;
transform: translateY(0);}}@keyframes pricingFadeIn {to {opacity: 1;
transform: translateY(0);}}@keyframes addonsFadeIn {to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home2-container6">
        <div className="home2-container7">
          <Script
            html={`<script defer data-name="homepage-interactions">
(function(){
  // Intersection Observer for scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
      }
    })
  }, observerOptions)

  // Observe all animated sections
  const animatedElements = document.querySelectorAll(
    ".feature-card, .process-step, .pricing-card, .pricing-addons"
  )

  animatedElements.forEach((el) => animateOnScroll.observe(el))

  // Smooth parallax effect for hero image
  let ticking = false
  const heroImage = document.querySelector(".hero-image")

  if (
    heroImage &&
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches
  ) {
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset
          const parallaxValue = Math.min(scrolled * 0.15, 8)

          if (heroImage) {
            heroImage.style.transform = \`translateY(\${parallaxValue}px)\`
          }

          ticking = false
        })

        ticking = true
      }
    })
  }

  // Add hover effect enhancement for feature cards
  const featureCards = document.querySelectorAll(".feature-card")
  featureCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-6px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Pricing card interaction
  const pricingCards = document.querySelectorAll(".pricing-card")
  pricingCards.forEach((card) => {
    card.addEventListener("focus", function () {
      this.style.transform = "translateY(-2px)"
      this.style.boxShadow = "var(--shadow-level-2)"
    })

    card.addEventListener("blur", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "var(--shadow-level-1)"
    })
  })

  // Smooth scroll for internal links
  const ctaLinks = document.querySelectorAll('a[href^="#"]')
  ctaLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetSection = document.querySelector(targetId)
      if (targetSection) {
        e.preventDefault()
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home2-container8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home2-icon58"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home2-text45">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home2
