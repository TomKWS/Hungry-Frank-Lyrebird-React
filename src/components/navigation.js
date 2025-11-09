import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation, .navigation__link, .navigation__logo, .navigation__toggle, .navigation__mobile, .navigation__mobile-link {
  transition: none;
}
.navigation__decoration {
  animation: none;
}
.navigation__logo:hover .navigation__logo-icon svg {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav
        id="nav-main"
        role="navigation"
        aria-label="Main navigation"
        className="navigation"
      >
        <div className="navigation__container">
          <a href="/">
            <div
              aria-label="Peaceful Pixel Solutions - Home"
              className="navigation__logo"
            >
              <span aria-hidden="true" className="navigation__logo-icon">
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
              </span>
              <span className="navigation__logo-text">Peaceful Pixel</span>
            </div>
          </a>
          <div className="navigation__links">
            <a href="#services">
              <div className="navigation__link">
                <span>Services</span>
              </div>
            </a>
            <a href="#about">
              <div className="navigation__link">
                <span>About</span>
              </div>
            </a>
            <a href="#portfolio">
              <div className="navigation__link">
                <span>Portfolio</span>
              </div>
            </a>
            <a href="#process">
              <div className="navigation__link">
                <span>Process</span>
              </div>
            </a>
            <a href="#testimonials">
              <div className="navigation__link">
                <span>Testimonials</span>
              </div>
            </a>
            <a href="#contact">
              <div className="navigation__link">
                <span>Contact</span>
              </div>
            </a>
          </div>
          <div className="navigation__cta">
            <a href="#contact">
              <div className="btn-sm btn btn-primary">
                <span>Start Your Project</span>
              </div>
            </a>
          </div>
          <button
            id="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-controls="nav-mobile"
            aria-expanded="false"
            className="navigation__toggle"
          >
            <span className="navigation-navigationtoggle-icon1">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <span className="navigation-navigationtoggle-icon2">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="m18 6l-12 12m0-12l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div id="nav-mobile" aria-hidden="true" className="navigation__mobile">
          <div className="navigation__mobile-inner">
            <a href="#services">
              <div className="navigation__mobile-link">
                <span>Services</span>
              </div>
            </a>
            <a href="#about">
              <div className="navigation__mobile-link">
                <span>About</span>
              </div>
            </a>
            <a href="#portfolio">
              <div className="navigation__mobile-link">
                <span>Portfolio</span>
              </div>
            </a>
            <a href="#process">
              <div className="navigation__mobile-link">
                <span>Process</span>
              </div>
            </a>
            <a href="#testimonials">
              <div className="navigation__mobile-link">
                <span>Testimonials</span>
              </div>
            </a>
            <a href="#contact">
              <div className="navigation__mobile-link">
                <span>Contact</span>
              </div>
            </a>
            <div className="navigation__mobile-cta">
              <a href="#contact">
                <div className="btn btn-primary">
                  <span>Start Your Project</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="navigation__decoration"></div>
      </nav>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes navigationFloat {0%,100% {transform: translate(0, 0) rotate(0deg);
border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;}
33% {transform: translate(10px, -10px) rotate(5deg);
border-radius: 50% 60% 40% 50% / 70% 50% 60% 40%;}
66% {transform: translate(-10px, 5px) rotate(-5deg);
border-radius: 40% 50% 60% 40% / 50% 60% 40% 70%;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  // Navigation Toggle Handler
  const navToggle = document.getElementById("nav-toggle")
  const navMobile = document.getElementById("nav-mobile")
  const navMain = document.getElementById("nav-main")

  if (navToggle && navMobile) {
    navToggle.addEventListener("click", function () {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true"

      navToggle.setAttribute("aria-expanded", !isExpanded)
      navMobile.setAttribute("aria-hidden", isExpanded)

      // Prevent body scroll when mobile menu is open
      if (!isExpanded) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
    })

    // Close mobile menu when clicking on a link
    const mobileLinks = navMobile.querySelectorAll(
      ".navigation__mobile-link, .navigation__mobile-cta a"
    )
    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false")
        navMobile.setAttribute("aria-hidden", "true")
        document.body.style.overflow = ""
      })
    })

    // Close mobile menu on escape key
    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" &&
        navToggle.getAttribute("aria-expanded") === "true"
      ) {
        navToggle.setAttribute("aria-expanded", "false")
        navMobile.setAttribute("aria-hidden", "true")
        document.body.style.overflow = ""
        navToggle.focus()
      }
    })
  }

  // Scroll Enhancement - Add shadow on scroll
  let lastScrollTop = 0

  window.addEventListener(
    "scroll",
    function () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (scrollTop > 50) {
        navMain.classList.add("navigation--scrolled")
      } else {
        navMain.classList.remove("navigation--scrolled")
      }

      lastScrollTop = scrollTop
    },
    { passive: true }
  )
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
