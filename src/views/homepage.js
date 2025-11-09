import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './homepage.css'

const Homepage = (props) => {
  return (
    <div className="homepage-container1">
      <Helmet>
        <title>Hungry Frank Lyrebird</title>
        <meta property="og:title" content="Hungry Frank Lyrebird" />
      </Helmet>
      <Navigation></Navigation>
      <div className="homepage-container2">
        <div className="homepage-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.hero-video, .contact-video {
  animation: none;
}
.hero-text-wrapper, .feature-card {
  animation: none;
  opacity: 1;
  transform: none;
}
.about-decorative-element {
  animation: none;
}
.scroll-line {
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section id="hero-section" className="untitled-hero-section">
        <div className="hero-video-container">
          <video
            src="https://videos.pexels.com/video-files/7234121/7234121-hd_1920_1080_30fps.mp4"
            loop="true"
            muted="true"
            autoPlay="true"
            playsInline="true"
            className="hero-video"
          ></video>
          <div className="hero-overlay"></div>
        </div>
        <div className="untitled-hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title untitled-hero-title">
              {' '}
              Digital peace of mind for your mental health practice
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <p className="hero-subtitle untitled-hero-subtitle">
              {' '}
              Websites for therapists, made peacefully. No tech stress, just
              calm, professional design that connects with your clients.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <a href="mailto:thomasandrewssunshine@gmail.com?subject=">
              <div className="hero-cta-link">
                <span className="cta-text">Start Your Journey</span>
                <span className="cta-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>
      <section id="features-section" className="untitled-features-section">
        <div className="untitled-features-container">
          <div className="features-header">
            <h2 className="section-title">Why therapists choose us</h2>
            <p className="section-subtitle">
              {' '}
              We understand the unique needs of mental health professionals. Our
              approach combines technical expertise with deep empathy for your
              practice.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="untitled-features-grid">
            <div className="untitled-feature-card">
              <div className="feature-image-wrapper">
                <img
                  alt="A woman relaxes, massaging her temples among indoor plants in a bright, sunlit room"
                  src="https://images.pexels.com/photos/4153229/pexels-photo-4153229.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div className="feature-image-overlay"></div>
              </div>
              <div className="untitled-feature-content">
                <div className="untitled-feature-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
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
                <h3 className="untitled-feature-title">
                  Calm &amp; Professional Design
                </h3>
                <p className="untitled-feature-description">
                  {' '}
                  Websites that mirror the peaceful, welcoming environment you
                  create in your practice. Every element designed to build trust
                  and comfort.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="untitled-feature-card">
              <div className="feature-image-wrapper">
                <img
                  alt="A sleek minimalist office space featuring a table with a laptop and a potted indoor plant beside a wooden chair"
                  src="https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div className="feature-image-overlay"></div>
              </div>
              <div className="untitled-feature-content">
                <div className="untitled-feature-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
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
                <h3 className="untitled-feature-title">
                  HIPAA-Conscious Solutions
                </h3>
                <p className="untitled-feature-description">
                  {' '}
                  Built with privacy and security in mind. We understand the
                  importance of protecting your clients&apos; confidentiality at
                  every touchpoint.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="untitled-feature-card">
              <div className="feature-image-wrapper">
                <img
                  alt="A clean and bright minimalist workspace featuring a laptop, eyeglasses, and a plant"
                  src="https://images.pexels.com/photos/8101039/pexels-photo-8101039.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div className="feature-image-overlay"></div>
              </div>
              <div className="untitled-feature-content">
                <div className="untitled-feature-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                      <circle r="2" cx="4" cy="20"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="untitled-feature-title">Zero Tech Stress</h3>
                <p className="untitled-feature-description">
                  {' '}
                  Focus on your clients, not on website maintenance. We handle
                  everything with care, clarity, and ongoing support that puts
                  your mind at ease.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="untitled-feature-card">
              <div className="feature-image-wrapper">
                <img
                  alt="A peaceful forest path with sunlight filtering through trees, perfect for nature and relaxation themes"
                  src="https://images.pexels.com/photos/33322288/pexels-photo-33322288.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div className="feature-image-overlay"></div>
              </div>
              <div className="untitled-feature-content">
                <div className="untitled-feature-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="untitled-feature-title">Grow Naturally</h3>
                <p className="untitled-feature-description">
                  {' '}
                  Your website evolves with your practice. From simple landing
                  pages to full booking systems, we grow alongside you — one
                  peaceful step at a time.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-section" className="about-section">
        <div className="about-container">
          <div className="about-content-wrapper">
            <div className="about-text-column">
              <h2 className="section-title">
                Building digital spaces that heal
              </h2>
              <div className="about-text-content">
                <p className="section-content">
                  {' '}
                  At Peaceful Pixel Solutions, we believe your online presence
                  should reflect the care and compassion you bring to every
                  session. We&apos;re not just designers — we&apos;re partners
                  in your mission to create safe, welcoming spaces for healing.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="section-content">
                  {' '}
                  With years of experience working with mental health
                  professionals, we understand what makes a therapy practice
                  website effective: clarity, warmth, and accessibility. We
                  craft every pixel with intention, ensuring your site becomes a
                  natural extension of your practice.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="about-highlight">
                  <div className="highlight-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle r="4" cx="12" cy="7"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="highlight-text">
                    <h4 className="highlight-title">Our Approach</h4>
                    <p className="highlight-description">
                      {' '}
                      Human-centered design that prioritizes your clients&apos;
                      emotional journey from first click to first appointment.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <a href="mailto:thomasandrewssunshine@gmail.com?subject=">
                  <div className="about-cta-link">
                    <span>Let&apos;s create something peaceful together</span>
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="about-image-column">
              <div className="about-image-stack">
                <div className="about-image-card about-image-primary">
                  <img
                    alt="A serene interior with sunlight streaming through sheer curtains, soft shadows cast"
                    src="https://images.pexels.com/photos/29623050/pexels-photo-29623050.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                  />
                </div>
                <div className="about-image-card about-image-secondary">
                  <img
                    alt="Stylish indoor decor featuring a potted plant on a wooden table, ideal for modern interior design themes"
                    src="https://images.pexels.com/photos/2350427/pexels-photo-2350427.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                  />
                </div>
                <div className="about-decorative-element"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-section" className="contact-section">
        <div className="contact-video-background">
          <video
            src="https://videos.pexels.com/video-files/10034315/10034315-hd_720_1366_25fps.mp4"
            loop="true"
            muted="true"
            autoPlay="true"
            playsInline="true"
            className="contact-video"
          ></video>
          <div className="contact-overlay"></div>
        </div>
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-header">
              <h2 className="section-title">Ready to get started?</h2>
              <p className="section-subtitle">
                {' '}
                Let&apos;s have a conversation about your practice, your vision,
                and how we can create a website that truly represents the care
                you provide.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-card-inner">
                <div className="contact-icon-wrapper">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                </div>
                <h3 className="contact-card-title">Let&apos;s talk</h3>
                <p className="contact-card-description">
                  {' '}
                  Reach out today and we&apos;ll respond within 24 hours. No
                  pressure, just a friendly conversation about your needs.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="mailto:thomasandrewssunshine@gmail.com?subject=">
                  <div className="contact-email-link">
                    <span>
                      {' '}
                      thomasandrewssunshine@gmail.com
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <div className="contact-benefits">
                  <div className="benefit-item">
                    <span className="benefit-check">
                      <svg
                        fill="none"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="benefit-text">
                      Free initial consultation
                    </span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-check">
                      <svg
                        fill="none"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="benefit-text">
                      Tailored to your practice
                    </span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-check">
                      <svg
                        fill="none"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="benefit-text">
                      Ongoing support included
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="homepage-container4">
        <div className="homepage-container5">
          <Script
            html={`<style>
        @keyframes videoFadeIn {to {opacity: 1;}}@keyframes heroContentFadeIn {to {opacity: 1;
transform: translateY(0);}}@keyframes scrollPulse {0%,100% {opacity: 0.3;
transform: translateY(-10px);}
50% {opacity: 1;
transform: translateY(10px);}}@keyframes featureCardFadeIn {to {opacity: 1;
transform: translateY(0);}}@keyframes floatOrganic {0%,100% {transform: translate(-50%, -50%) rotate(0deg);
border-radius: 50% 30% 50% 30%;}
50% {transform: translate(-50%, -45%) rotate(180deg);
border-radius: 30% 50% 30% 50%;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="homepage-container6">
        <div className="homepage-container7">
          <Script
            html={`<script defer data-name="peaceful-pixel-solutions">
(function(){
  // Intersection Observer for scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const fadeInElements = document.querySelectorAll(
    ".feature-card, .about-image-card"
  )

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  fadeInElements.forEach((el) => {
    fadeInObserver.observe(el)
  })

  // Parallax effect for hero section
  const heroSection = document.getElementById("hero-section")
  const heroContent = document.querySelector(".hero-content")

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroHeight = heroSection.offsetHeight

    if (scrolled < heroHeight) {
      heroContent.style.transform = \`translateY(\${scrolled * 0.3}px)\`
      heroContent.style.opacity = 1 - (scrolled / heroHeight) * 0.8
    }
  })

  // Smooth reveal for about images
  const aboutImages = document.querySelectorAll(".about-image-card")
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 200)
      }
    })
  }, observerOptions)

  aboutImages.forEach((img) => {
    img.style.opacity = "0"
    img.style.transform = "translateY(30px)"
    img.style.transition = "all 0.8s ease-out"
    aboutObserver.observe(img)
  })

  // Email link tracking (optional for analytics)
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]')
  emailLinks.forEach((link) => {
    link.addEventListener("click", () => {
      console.log("Email contact initiated")
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="homepage-container8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="homepage-icon44"
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
          <span className="homepage-text3">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Homepage
