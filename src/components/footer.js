import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-organic-shape, .footer-heart-icon {
  animation: none;
}
.footer-nav-link:hover, .footer-social-link:hover, .footer-contact-item:hover .footer-contact-icon {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <footer id="footer-main" className="footer-container">
        <div className="footer-organic-bg">
          <img
            alt="Calm office workspace with natural light"
            src="https://images.pexels.com/photos/821357/pexels-photo-821357.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
            className="footer-bg-image"
          />
          <div className="footer-overlay"></div>
        </div>
        <div className="footer-content-wrapper">
          <div className="footer-grid">
            <div className="footer-brand-section">
              <div className="footer-logo-wrapper">
                <div className="footer-logo-icon">
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
                <h3 className="footer-brand-name">Peaceful Pixel Solutions</h3>
              </div>
              <p className="footer-brand-tagline">
                {' '}
                Websites for Therapists, Made Peacefully.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <p className="footer-brand-description">
                {' '}
                Creating calm, professional digital experiences for mental
                health professionals — without the tech stress.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="footer-nav-section">
              <h4 className="footer-section-title">Quick Links</h4>
              <nav aria-label="Footer navigation" className="footer-nav-list">
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Homepage</span>
                  </div>
                </a>
                <a href="#services">
                  <div className="footer-nav-link">
                    <span>Services</span>
                  </div>
                </a>
                <a href="#portfolio">
                  <div className="footer-nav-link">
                    <span>Portfolio</span>
                  </div>
                </a>
                <a href="#about">
                  <div className="footer-nav-link">
                    <span>About Us</span>
                  </div>
                </a>
                <a href="#contact">
                  <div className="footer-nav-link">
                    <span>Contact</span>
                  </div>
                </a>
                <a href="#resources">
                  <div className="footer-nav-link">
                    <span>Resources</span>
                  </div>
                </a>
              </nav>
            </div>
            <div className="footer-services-section">
              <h4 className="footer-section-title">Our Services</h4>
              <nav aria-label="Services navigation" className="footer-nav-list">
                <a href="#website-design">
                  <div className="footer-nav-link">
                    <span>Website Design</span>
                  </div>
                </a>
                <a href="#consultation">
                  <div className="footer-nav-link">
                    <span>
                      {' '}
                      Digital Consultation
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <a href="#branding">
                  <div className="footer-nav-link">
                    <span>Brand Identity</span>
                  </div>
                </a>
                <a href="#maintenance">
                  <div className="footer-nav-link">
                    <span>Site Maintenance</span>
                  </div>
                </a>
                <a href="#training">
                  <div className="footer-nav-link">
                    <span>Tech Training</span>
                  </div>
                </a>
                <a href="#support">
                  <div className="footer-nav-link">
                    <span>Ongoing Support</span>
                  </div>
                </a>
              </nav>
            </div>
            <div className="footer-contact-section">
              <h4 className="footer-section-title">Get In Touch</h4>
              <div className="footer-contact-list">
                <a href="mailto:hello@peacefulpixel.com?subject=">
                  <div className="footer-contact-item">
                    <span className="footer-contact-icon">
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
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                    </span>
                    <span className="footer-contact-text">
                      hello@peacefulpixel.com
                    </span>
                  </div>
                </a>
                <a href="tel:+15551234567">
                  <div className="footer-contact-item">
                    <span className="footer-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span className="footer-contact-text">(555) 123-4567</span>
                  </div>
                </a>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span className="footer-contact-text">
                    Portland, OR 97201
                  </span>
                </div>
              </div>
              <div className="footer-social-wrapper">
                <h5 className="footer-social-title">Connect With Us</h5>
                <div className="footer-social-links">
                  <a href="#facebook">
                    <div
                      aria-label="Visit our Facebook page"
                      className="footer-social-link"
                    >
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#twitter">
                    <div
                      aria-label="Visit our Twitter page"
                      className="footer-social-link"
                    >
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#linkedin">
                    <div
                      aria-label="Visit our LinkedIn page"
                      className="footer-social-link"
                    >
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
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle r="2" cx="4" cy="4"></circle>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#instagram">
                    <div
                      aria-label="Visit our Instagram page"
                      className="footer-social-link"
                    >
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
                          <rect
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                            width="20"
                            height="20"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-divider-wrapper">
            <div className="footer-divider-line"></div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              {' '}
              © 2025 Peaceful Pixel Solutions. All rights reserved.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="footer-legal-links">
              <a href="#privacy">
                <div className="footer-legal-link">
                  <span>Privacy Policy</span>
                </div>
              </a>
              <span className="footer-legal-separator">|</span>
              <a href="#terms">
                <div className="footer-legal-link">
                  <span>Terms of Service</span>
                </div>
              </a>
              <span className="footer-legal-separator">|</span>
              <a href="#accessibility">
                <div className="footer-legal-link">
                  <span>Accessibility</span>
                </div>
              </a>
            </div>
            <p className="footer-credits">
              <span>Made with</span>
              <span className="footer-footer-heart-icon">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
              </span>
              <span>for mental health professionals</span>
            </p>
          </div>
        </div>
        <div className="footer-shape-1 footer-organic-shape"></div>
        <div className="footer-shape-2 footer-organic-shape"></div>
      </footer>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<style>
        @keyframes footer-float-1 {0%,100% {transform: translate(0, 0) rotate(0deg);
border-radius: 50% 45% 48% 52% / 52% 48% 52% 48%;}
33% {transform: translate(20px, -30px) rotate(120deg);
border-radius: 48% 52% 45% 55% / 50% 55% 45% 50%;}
66% {transform: translate(-15px, 20px) rotate(240deg);
border-radius: 52% 48% 52% 48% / 48% 52% 48% 52%;}}@keyframes footer-float-2 {0%,100% {transform: translate(0, 0) rotate(0deg);
border-radius: 48% 52% 50% 50% / 50% 50% 52% 48%;}
33% {transform: translate(-25px, 20px) rotate(-120deg);
border-radius: 52% 48% 48% 52% / 52% 48% 52% 48%;}
66% {transform: translate(18px, -15px) rotate(-240deg);
border-radius: 50% 50% 52% 48% / 48% 52% 48% 52%;}}@keyframes footer-heartbeat {0%,100% {transform: scale(1);}
10% {transform: scale(1.15);}
20% {transform: scale(1);}
30% {transform: scale(1.15);}
40%,100% {transform: scale(1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container6">
        <div className="footer-container7">
          <Script
            html={`<script defer data-name="footer">
(function(){
  const footerLogoIcon = document.querySelector(".footer-logo-icon")
  const footerSocialLinks = document.querySelectorAll(".footer-social-link")

  if (footerLogoIcon) {
    let rotationAngle = 0

    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px",
    }

    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footerLogoIcon.style.animation =
            "footer-logo-reveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
        }
      })
    }, observerOptions)

    footerObserver.observe(footerLogoIcon)

    footerLogoIcon.addEventListener("mouseenter", () => {
      rotationAngle += 360
      footerLogoIcon.style.transition =
        "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
      footerLogoIcon.style.transform = \`rotate(\${rotationAngle}deg)\`
    })
  }

  if (footerSocialLinks.length > 0) {
    footerSocialLinks.forEach((link, index) => {
      link.style.opacity = "0"
      link.style.transform = "translateY(20px)"

      const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px",
      }

      const linkObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              link.style.transition =
                "opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
              link.style.opacity = "1"
              link.style.transform = "translateY(0)"
            }, index * 80)

            linkObserver.unobserve(link)
          }
        })
      }, observerOptions)

      linkObserver.observe(link)
    })
  }

  const footerNavLinks = document.querySelectorAll(".footer-nav-link")
  if (footerNavLinks.length > 0) {
    footerNavLinks.forEach((link) => {
      link.addEventListener("mouseenter", function () {
        this.style.transition = "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
      })
    })
  }

  const footerContactItems = document.querySelectorAll(".footer-contact-item")
  if (footerContactItems.length > 0) {
    footerContactItems.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        const icon = this.querySelector(".footer-contact-icon")
        if (icon) {
          icon.style.transition = "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      })
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
