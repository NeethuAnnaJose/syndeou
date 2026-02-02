import React, { useEffect, useRef, useState } from 'react'
import '../App.css'

function Homepage() {
  const narrativeSectionRef = useRef(null)
  const fullscreenImageSectionRef = useRef(null)
  const heroSectionRef = useRef(null)
  const howWeDoItSectionRef = useRef(null)
  const educationRealitySectionRef = useRef(null)
  const testimonialsSectionRef = useRef(null)
  const ourStorySectionRef = useRef(null)
  const ourSystemSectionRef = useRef(null)
  const ourTeamSectionRef = useRef(null)
  const howWeWorkSectionRef = useRef(null)
  const howWeMakeMoneySectionRef = useRef(null)
  const investorFaqSectionRef = useRef(null)
  const contactSectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isImageVisible, setIsImageVisible] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [isHowWeDoItVisible, setIsHowWeDoItVisible] = useState(false)
  const [isEducationRealityVisible, setIsEducationRealityVisible] = useState(false)
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false)
  const [isOurStoryVisible, setIsOurStoryVisible] = useState(false)
  const [isOurSystemVisible, setIsOurSystemVisible] = useState(false)
  const [isOurTeamVisible, setIsOurTeamVisible] = useState(false)
  const [isHowWeWorkVisible, setIsHowWeWorkVisible] = useState(false)
  const [isHowWeMakeMoneyVisible, setIsHowWeMakeMoneyVisible] = useState(false)
  const [isInvestorFaqVisible, setIsInvestorFaqVisible] = useState(false)
  const [isContactVisible, setIsContactVisible] = useState(false)
  const [selectedTeamMember, setSelectedTeamMember] = useState(0)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '' })
  const [contactSubmitStatus, setContactSubmitStatus] = useState(null)
  const [showSuccessToast, setShowSuccessToast] = useState(false)

  const teamMembers = [
    {
      name: "Yana Litza Antoniadis",
      role: "Founder & System Architect",
      bio: "Responsible for system architecture, learning framework design, institutional partnerships, and governance-led delivery.",
      carouselImage: "/images/profile_dp.png",
      mainImage: "/images/profile.png"
    },
    {
      name: "Adam John Harcourt",
      role: "Co-Founder & R&D Lead",
      bio: "Leading research and development initiatives to advance learning system innovation and technological integration.",
      carouselImage: "/images/profile_dp2.png",
      mainImage: "/images/profile2.png"
    },
    {
      name: "Fawaz ALAliwat",
      role: "Creative Director & System Designer",
      bio: "Leading creative direction and system design to ensure intuitive, engaging, and effective learning experiences.",
      carouselImage: "/images/profile_dp3.png",
      mainImage: "/images/profile3.png"
    },
    {
      name: "Jennifer Daniels",
      role: "System Operations Developer",
      bio: "Managing system operations and infrastructure to ensure reliable, scalable, and efficient learning platform performance.",
      carouselImage: "/images/profile_dp5.png",
      mainImage: "/images/profile5.png"
    },
    {
      name: "Santhosh Thaliyil",
      role: "Systems Architect",
      bio: "Designing and architecting scalable system solutions to support robust learning platform infrastructure and integration.",
      carouselImage: "/images/profile_dp4.png",
      mainImage: "/images/profile4.png"
    },
    {
      name: "Bilal El Manja",
      role: "AI/ML Developer",
      bio: "Developing artificial intelligence and machine learning solutions to enhance learning insights and personalized educational experiences.",
      carouselImage: "/images/profile_dp6.png",
      mainImage: "/images/profile6.png"
    },
    {
      name: "Kayla Strydom",
      role: "EDU Programme Developer",
      bio: "Developing and implementing educational programmes that align with learning objectives and institutional requirements.",
      carouselImage: "/images/profile_dp7.png",
      mainImage: "/images/profile7.png"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (narrativeSectionRef.current) {
      observer.observe(narrativeSectionRef.current)
    }

    return () => {
      if (narrativeSectionRef.current) {
        observer.unobserve(narrativeSectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImageVisible(true)
          } else {
            setIsImageVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (fullscreenImageSectionRef.current) {
      imageObserver.observe(fullscreenImageSectionRef.current)
    }

    return () => {
      if (fullscreenImageSectionRef.current) {
        imageObserver.unobserve(fullscreenImageSectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!contactModalOpen) return
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeContactModal()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [contactModalOpen])

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeroVisible(true)
          } else {
            setIsHeroVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (heroSectionRef.current) {
      heroObserver.observe(heroSectionRef.current)
    }

    return () => {
      if (heroSectionRef.current) {
        heroObserver.unobserve(heroSectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const howWeDoItObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHowWeDoItVisible(true)
          } else {
            setIsHowWeDoItVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (howWeDoItSectionRef.current) {
      howWeDoItObserver.observe(howWeDoItSectionRef.current)
    }

    return () => {
      if (howWeDoItSectionRef.current) {
        howWeDoItObserver.unobserve(howWeDoItSectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const testimonialsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTestimonialsVisible(true)
          } else {
            setIsTestimonialsVisible(false)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (testimonialsSectionRef.current) {
      testimonialsObserver.observe(testimonialsSectionRef.current)
    }

    return () => {
      if (testimonialsSectionRef.current) {
        testimonialsObserver.unobserve(testimonialsSectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const educationRealityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsEducationRealityVisible(true)
          } else {
            setIsEducationRealityVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (educationRealitySectionRef.current) {
      educationRealityObserver.observe(educationRealitySectionRef.current)
    }

    return () => {
      if (educationRealitySectionRef.current) {
        educationRealityObserver.unobserve(educationRealitySectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const ourStoryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsOurStoryVisible(true)
          } else {
            setIsOurStoryVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (ourStorySectionRef.current) {
      ourStoryObserver.observe(ourStorySectionRef.current)
    }

    return () => {
      if (ourStorySectionRef.current) {
        ourStoryObserver.unobserve(ourStorySectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const ourSystemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsOurSystemVisible(true)
          } else {
            setIsOurSystemVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (ourSystemSectionRef.current) {
      ourSystemObserver.observe(ourSystemSectionRef.current)
    }

    return () => {
      if (ourSystemSectionRef.current) {
        ourSystemObserver.unobserve(ourSystemSectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const ourTeamObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsOurTeamVisible(true)
          } else {
            setIsOurTeamVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (ourTeamSectionRef.current) {
      ourTeamObserver.observe(ourTeamSectionRef.current)
    }

    return () => {
      if (ourTeamSectionRef.current) {
        ourTeamObserver.unobserve(ourTeamSectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const howWeWorkObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHowWeWorkVisible(true)
          } else {
            setIsHowWeWorkVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (howWeWorkSectionRef.current) {
      howWeWorkObserver.observe(howWeWorkSectionRef.current)
    }

    return () => {
      if (howWeWorkSectionRef.current) {
        howWeWorkObserver.unobserve(howWeWorkSectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const howWeMakeMoneyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHowWeMakeMoneyVisible(true)
          } else {
            setIsHowWeMakeMoneyVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (howWeMakeMoneySectionRef.current) {
      howWeMakeMoneyObserver.observe(howWeMakeMoneySectionRef.current)
    }

    return () => {
      if (howWeMakeMoneySectionRef.current) {
        howWeMakeMoneyObserver.unobserve(howWeMakeMoneySectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const investorFaqObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInvestorFaqVisible(true)
          } else {
            setIsInvestorFaqVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (investorFaqSectionRef.current) {
      investorFaqObserver.observe(investorFaqSectionRef.current)
    }

    return () => {
      if (investorFaqSectionRef.current) {
        investorFaqObserver.unobserve(investorFaqSectionRef.current)
      }
    }
  }, [])

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openContactModal = () => setContactModalOpen(true)
  const closeContactModal = () => {
    setContactModalOpen(false)
    setContactForm({ name: '', email: '', phone: '' })
    setContactSubmitStatus(null)
  }

  const handleContactInputChange = (e) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    if (!contactForm.name.trim() || !contactForm.email.trim()) {
      setContactSubmitStatus('error')
      return
    }
    closeContactModal()
    setContactForm({ name: '', email: '', phone: '' })
    setContactSubmitStatus(null)
    setShowSuccessToast(true)
    setTimeout(() => setShowSuccessToast(false), 4000)
  }

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section id="home" className="hero-section" ref={heroSectionRef}>
        <div className="hero-content-left">
          <h1 className="hero-headline">
            Build <span className="highlight-purple">future ready learners</span><br />
            a way other schools cannot
          </h1>
          <p className="hero-description">
            Human-Led, AI Personalised, Learning Systems for Schools<br />
            Making children's academic learning personalised and soft-skill development measurable
          </p>
          <div className="hero-cta-section">
            <button type="button" className="button-primary-hero" onClick={openContactModal}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Us Modal */}
      {contactModalOpen && (
        <div className="contact-modal-overlay" onClick={closeContactModal} role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="contact-modal-close" onClick={closeContactModal} aria-label="Close">×</button>
            <h2 id="contact-modal-title" className="contact-modal-title">Contact Us</h2>
            <form className="contact-modal-form" onSubmit={handleContactSubmit}>
              <label htmlFor="contact-name">Name <span className="required">*</span></label>
              <input id="contact-name" type="text" name="name" value={contactForm.name} onChange={handleContactInputChange} placeholder="Your name" required autoComplete="name" />
              <label htmlFor="contact-email">Email <span className="required">*</span></label>
              <input id="contact-email" type="email" name="email" value={contactForm.email} onChange={handleContactInputChange} placeholder="your@email.com" required autoComplete="email" />
              <label htmlFor="contact-phone">Phone <span className="optional">(optional)</span></label>
              <input id="contact-phone" type="tel" name="phone" value={contactForm.phone} onChange={handleContactInputChange} placeholder="Your phone number" autoComplete="tel" />
              {contactSubmitStatus === 'error' && <p className="contact-form-error">Please fill in name and email.</p>}
              <button type="submit" className="contact-modal-submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showSuccessToast && (
        <div className="success-toast" role="status" aria-live="polite">
          <span className="success-toast-icon" aria-hidden="true">✓</span>
          <span className="success-toast-message">Thank you! Your details have been submitted.</span>
        </div>
      )}

      {/* How We Do It */}
      <section id="how-we-do-it" className="how-we-do-it-section" ref={howWeDoItSectionRef}>
        <div className={`how-we-do-it-content ${isHowWeDoItVisible ? 'visible' : ''}`}>
          <h2 className="how-we-do-it-title">How we do it</h2>
          <p className="how-we-do-it-intro">
            We combine human-led design with integrated technology to deliver learning systems that work at scale. Here is our approach.
          </p>
          <div className="how-we-do-it-grid">
            <div className="how-we-do-it-item">
              <span className="how-we-do-it-number">1</span>
              <h3 className="how-we-do-it-item-title">Understand the learner</h3>
              <p className="how-we-do-it-item-desc">We start with a holistic view of each learner — strengths, needs, and context — before placement or personalisation.</p>
            </div>
            <div className="how-we-do-it-item">
              <span className="how-we-do-it-number">2</span>
              <h3 className="how-we-do-it-item-title">Design the system</h3>
              <p className="how-we-do-it-item-desc">We build one integrated operating system: curriculum, platform, insight layer, and governance — not separate tools.</p>
            </div>
            <div className="how-we-do-it-item">
              <span className="how-we-do-it-number">3</span>
              <h3 className="how-we-do-it-item-title">Support the institution</h3>
              <p className="how-we-do-it-item-desc">We train Guides, certify delivery, and provide ongoing support so schools can sustain the system long term.</p>
            </div>
            <div className="how-we-do-it-item">
              <span className="how-we-do-it-number">4</span>
              <h3 className="how-we-do-it-item-title">Measure what matters</h3>
              <p className="how-we-do-it-item-desc">We use AI for insight and visibility — not to replace judgement — so outcomes are measurable and human-led.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Reality - 3 sections */}
      <section id="education-reality" className="education-reality-section" ref={educationRealitySectionRef}>
        <div className={`education-reality-content ${isEducationRealityVisible ? 'visible' : ''}`}>
        <div className="education-reality-header-wrap">
          {/* <span className="education-reality-label">The reality</span> */}
          <h2 className="education-reality-header">Education systems are failing to adapt to the realities of the modern world</h2>
        </div>
        <div className="education-reality-grid">
          <div className="education-reality-item">
            <span className="education-reality-number" aria-hidden="true">01</span>
            <div className="education-reality-item-inner">
              <h3 className="education-reality-heading">Forced Standardisation</h3>
              <p className="education-reality-text">Students move by age, not by mastery</p>
            </div>
          </div>
          <div className="education-reality-item">
            <span className="education-reality-number" aria-hidden="true">02</span>
            <div className="education-reality-item-inner">
              <h3 className="education-reality-heading">The &quot;Soft-Skill&quot; Gap</h3>
              <p className="education-reality-text">Emotional intelligence is treated as incidental, not essential.</p>
            </div>
          </div>
          <div className="education-reality-item">
            <span className="education-reality-number" aria-hidden="true">03</span>
            <div className="education-reality-item-inner">
              <h3 className="education-reality-heading">Low ROI</h3>
              <p className="education-reality-text">High grades no longer guarantee adaptability or problem solving skills</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={`testimonials-section ${isTestimonialsVisible ? 'visible' : ''}`} ref={testimonialsSectionRef}>
        <h2 className="testimonials-title">Testimonials</h2>
        <div className={`testimonials-list ${isTestimonialsVisible ? 'visible' : ''}`}>
          <div className="testimonial-card">
            <blockquote className="testimonial-quote">"I just wanted to say a big thank you for everything you do. Your hard work helps do many people, and it honestly makes me really happy and helps me a lot. You're truly amazing!"</blockquote>
            <cite className="testimonial-name">BANCA I.</cite>
          </div>
          <div className="testimonial-card">
            <blockquote className="testimonial-quote">"I wanted to tell you how much it calms me when everything is falling apart, and you explain exactly what is happening, the current period. I'm sending you my best wishes to keep going strong and, above all, good health."</blockquote>
            <cite className="testimonial-name">NIKOS S.</cite>
          </div>
          <div className="testimonial-card">
            <blockquote className="testimonial-quote">"Thank you for your time and inside into the market, you are the best I apreciate your hard work! The companies you choose are great, I'm just trying to figure out if I should buy the dip in both plays, want to minimize risk."</blockquote>
            <cite className="testimonial-name">EFTHIMIOS V.</cite>
          </div>
        </div>
      </section>

      {/* Opening Narrative - 6 Box Layout */}
      <section className="narrative-section" ref={narrativeSectionRef}>
        <div className={`narrative-content ${isVisible ? 'visible' : ''}`}>
          <div className={`narrative-boxes-grid ${isVisible ? 'visible' : ''}`}>
          <div className="narrative-box">
            <h3 className="narrative-box-title">The Problem</h3>
            <p className="narrative-box-details">Institutions are expected to personalise learning, support wellbeing, and demonstrate outcomes while operating within rigid curricula, regulatory requirements, and organisational constraints. Most respond by layering platforms, assessments, consultants, and initiatives over time resulting in fragmentation, inconsistency, and operational fatigue.</p>
          </div>
          <div className="narrative-box">
            <h3 className="narrative-box-title">The Opportunity</h3>
            <p className="narrative-box-details">Education needs operating systems, not more software. There is a widening gap between institutional expectations and the systems available to deliver them effectively.</p>
          </div>

          <div className="narrative-box">
            <h3 className="narrative-box-title">The Solution – A Learning Operating System</h3>
            <p className="narrative-box-details">Syndeou licenses an integrated learning operating system that defines how learning is understood, delivered, supported, and governed at an institutional level. Learning remains human-led. Technology supports insight and coordination.</p>
          </div>
          
          <div className="narrative-box">
            <h3 className="narrative-box-title">Business Model</h3>
            <p className="narrative-box-details">Institutional licensing through one-time system implementation and recurring annual licences.</p>
          </div>
          
          <div className="narrative-box">
            <h3 className="narrative-box-title">Why This Team</h3>
            <p className="narrative-box-details">A multidisciplinary team with experience in learning science, education systems, and institutional delivery has built Syndeou.</p>
          </div>
          <div
            className="narrative-box cta-box"
            role="button"
            tabIndex={0}
            onClick={scrollToContact}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                scrollToContact()
              }
            }}
          >
            <h3 className="narrative-box-title">Call to Action</h3>
            <p className="narrative-box-details">Investor enquiries — request the deck or start a conversation.</p>
          </div>
          </div>
        </div>
      </section>

      {/* Third Page - Full Screen Image */}
      <section className="fullscreen-image-section" ref={fullscreenImageSectionRef}>
        <img src="/images/therd_page.jpg" alt="Third Page" className="fullscreen-image" />
        <div className={`fullscreen-image-content ${isImageVisible ? 'visible' : ''}`}>
          <h2 className="fullscreen-image-title">What the System Includes</h2>
          <div className="fullscreen-image-list">
            <div className="fullscreen-image-item">
              <div className="fullscreen-image-number">1</div>
              <div className="fullscreen-image-text">
                <h3 className="fullscreen-image-item-title">UTL™ – Understanding the Learner</h3>
                <p className="fullscreen-image-item-desc">A human-led learner understanding framework that builds a holistic view of each learner before placement or personalisation.</p>
              </div>
            </div>
            <div className="fullscreen-image-item">
              <div className="fullscreen-image-number">2</div>
              <div className="fullscreen-image-text">
                <h3 className="fullscreen-image-item-title">Academic Guide™ Training & Certification</h3>
                <p className="fullscreen-image-item-desc">A personalised curriculum framework aligned with the British Curriculum, enabling flexibility while maintaining academic rigour.</p>
              </div>
            </div>
            <div className="fullscreen-image-item">
              <div className="fullscreen-image-number">3</div>
              <div className="fullscreen-image-text">
                <h3 className="fullscreen-image-item-title">ALS™ Curriculum Framework</h3>
                <p className="fullscreen-image-item-desc">A personalised curriculum framework aligned with the British Curriculum, enabling flexibility while maintaining academic rigour.</p>
              </div>
            </div>
            <div className="fullscreen-image-item">
              <div className="fullscreen-image-number">4</div>
              <div className="fullscreen-image-text">
                <h3 className="fullscreen-image-item-title">MLS™ Platform – Meta Learning System</h3>
                <p className="fullscreen-image-item-desc">A secure, web-based platform supporting learning coordination, visibility, and institutional oversight.</p>
              </div>
            </div>
            <div className="fullscreen-image-item">
              <div className="fullscreen-image-number">5</div>
              <div className="fullscreen-image-text">
                <h3 className="fullscreen-image-item-title">MLS™ AI Insight Layer</h3>
                <p className="fullscreen-image-item-desc">An embedded insight layer supporting pattern recognition and early visibility without replacing human judgement.</p>
              </div>
            </div>
            <div className="fullscreen-image-item">
              <div className="fullscreen-image-number">6</div>
              <div className="fullscreen-image-text">
                <h3 className="fullscreen-image-item-title">MLS™ Strap – Optional Extension</h3>
                <p className="fullscreen-image-item-desc">An opt-in wearable extension supporting insight into physical and emotional states that influence learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Page - What We Do */}
      <section id="what-we-do" className="what-we-do-section">
        <div className="what-we-do-content">
          <div className="what-we-do-left">
            <img src="/images/ai_man.png" alt="AI Man" className="what-we-do-image" />
          </div>
          <div className="what-we-do-right">
            <h2 className="what-we-do-title">What We Do</h2>
            <p className="what-we-do-details">
              Syndeou designs and licenses integrated learning operating systems for real institutions.<br />
              Our systems support learner understanding, educator consistency, curriculum orchestration, and wellbeing within existing governance and regulatory structures.
            </p>
          </div>
        </div>
      </section>

      {/* Fifth Page - Our Story (Combined) */}
      <section id="our-story" className="our-story-section" ref={ourStorySectionRef}>
        <div className={`our-story-content ${isOurStoryVisible ? 'visible' : ''}`}>
          <div className="our-story-item">
            <h2 className="our-story-title">Our Story</h2>
            <p className="our-story-details">
              Syndeou emerged from years of engagement with learners, families, and educators — observing how environments shape curiosity, resilience, and learning.<br />
              These insights evolved into structured systems designed for institutional adoption, governance, and long-term sustainability.
            </p>
          </div>
          <div className="our-story-item">
            <h2 className="our-story-title">Our Approach</h2>
            <p className="our-story-details">
              We take a systems-led approach to learning design, focusing on how learning is understood, delivered, supported, and sustained.<br />
              Technology enables visibility; learning remains human-led.
            </p>
          </div>
          <div className="our-story-item">
            <h2 className="our-story-title">Governance & Integrity</h2>
            <p className="our-story-details">
              We maintain clear intellectual property ownership, transparent commercial models, conservative financial planning, and external professional oversight.
            </p>
          </div>
        </div>
      </section>

      {/* Sixth Page - Our System */}
      <section id="our-system" className="our-system-section" ref={ourSystemSectionRef}>
        <div className={`our-system-content ${isOurSystemVisible ? 'visible' : ''}`}>
          <h2 className="our-system-title">OUR SYSTEM</h2>
          <div className="our-system-grid">
            <div className="our-system-item">
              <h3 className="our-system-item-title">A Single Integrated Operating System</h3>
              <p className="our-system-item-desc">Syndeou's learning operating system is composed of six proprietary, trademarked components designed to operate together as one governed system.</p>
            </div>
            <div className="our-system-item">
              <h3 className="our-system-item-title">UTL™ – Understanding the Learner</h3>
              <p className="our-system-item-desc">A human-led learner understanding framework forming the foundation for accurate placement, early support identification, and personalised pathways.</p>
            </div>
            <div className="our-system-item">
              <h3 className="our-system-item-title">Academic Guide™ Training & Certification</h3>
              <p className="our-system-item-desc">A professional training and accreditation pathway ensuring consistent, ethical delivery across institutions.</p>
            </div>
            <div className="our-system-item">
              <h3 className="our-system-item-title">ALS™ Curriculum Framework</h3>
              <p className="our-system-item-desc">A personalised curriculum framework aligned with the British Curriculum, balancing academic rigour with flexibility.</p>
            </div>
            <div className="our-system-item">
              <h3 className="our-system-item-title">MLS™ Platform – Meta Learning System</h3>
              <p className="our-system-item-desc">A secure, web-based platform coordinating learning delivery, visibility, and institutional oversight.</p>
            </div>
            <div className="our-system-item">
              <h3 className="our-system-item-title">MLS™ AI Insight Layer</h3>
              <p className="our-system-item-desc">An embedded insight layer supporting reporting and early visibility for Guides and leadership teams.</p>
            </div>
            <div className="our-system-item">
              <h3 className="our-system-item-title">MLS™ Strap – Optional Extension</h3>
              <p className="our-system-item-desc">An opt-in wearable extension supporting insight into physical and emotional states, governed by strict safeguarding and data ethics standards.</p>
            </div>
            <div className="our-system-item">
              <h3 className="our-system-item-title">System Integrity</h3>
              <p className="our-system-item-desc">All components operate together as a single institutional system and are not sold independently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seventh Page - Our Team */}
      <section id="our-team" className="our-team-section" ref={ourTeamSectionRef}>
        <div className={`our-team-content ${isOurTeamVisible ? 'visible' : ''}`}>
          <h2 className="our-team-title">Our Team</h2>
          <p className="our-team-subtitle">Syndeou is a team-led organisation built by people who understand learning systems and institutions.</p>
          
          {/* Main Profile Section */}
          <div className="our-team-main-profile">
            <div className="our-team-profile-left">
              <h3 className="our-team-profile-name">{teamMembers[selectedTeamMember].name}</h3>
              <p className="our-team-profile-role">{teamMembers[selectedTeamMember].role}</p>
              <p className="our-team-profile-bio">{teamMembers[selectedTeamMember].bio}</p>
            </div>
            <div className="our-team-profile-right">
              <div className="our-team-profile-image">
                <img src={teamMembers[selectedTeamMember].mainImage} alt={teamMembers[selectedTeamMember].name} className="our-team-profile-img" />
              </div>
            </div>
          </div>

          {/* Team Carousel Section - Full Width Overlay */}
          <div className="our-team-carousel">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`our-team-carousel-item ${selectedTeamMember === index ? 'active' : ''}`}
                onClick={() => setSelectedTeamMember(index)}
                onMouseEnter={() => setSelectedTeamMember(index)}
              >
                <div className="our-team-carousel-image">
                  <img src={member.carouselImage} alt={member.name} className="our-team-carousel-img" />
                </div>
                <p className="our-team-carousel-name">{member.name}</p>
                <p className="our-team-carousel-title">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eighth Page - How We Work */}
      <section id="how-we-work" className="how-we-work-section" ref={howWeWorkSectionRef}>
        <div className={`how-we-work-content ${isHowWeWorkVisible ? 'visible' : ''}`}>
          <h2 className="how-we-work-main-title">
            <span className="how-we-work-title-part1">How We Work</span>
          </h2>
          <div className="how-we-work-content-grid">
            <div className="how-we-work-left-column">
            <h3 className="how-we-work-subtitle">How We Work With Institutions</h3>
            <div className="how-we-work-list">
              <div className="how-we-work-item">
                <div className="how-we-work-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="how-we-work-item-content">
                  <h3 className="how-we-work-item-title">Alignment and scoping</h3>
                  <p className="how-we-work-item-desc">Establish clear expectations and define the scope of implementation to ensure alignment with institutional goals.</p>
                </div>
              </div>
              <div className="how-we-work-item">
                <div className="how-we-work-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="how-we-work-item-content">
                  <h3 className="how-we-work-item-title">System deployment</h3>
                  <p className="how-we-work-item-desc">Implement the learning operating system through a controlled, phased approach tailored to your institution.</p>
                </div>
              </div>
              <div className="how-we-work-item">
                <div className="how-we-work-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 10V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 10H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 14H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 18L14 15L18 19L22 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="how-we-work-item-content">
                  <h3 className="how-we-work-item-title">Training and accreditation</h3>
                  <p className="how-we-work-item-desc">Comprehensive training programs and certification pathways to ensure consistent, high-quality delivery across your team.</p>
                </div>
              </div>
              <div className="how-we-work-item">
                <div className="how-we-work-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="how-we-work-item-content">
                  <h3 className="how-we-work-item-title">Quality assurance and iteration</h3>
                  <p className="how-we-work-item-desc">Ongoing monitoring, review, and iterative improvements to maintain excellence and adapt to evolving needs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="how-we-work-right-column">
            <h3 className="how-we-work-subtitle">Who We Work With</h3>
            <div className="how-we-work-list">
              <div className="how-we-work-item">
                <div className="how-we-work-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9 16.1 17 15 17H5C3.9 17 3 17.9 3 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 21V19C20.9993 18.1137 20.7044 17.2528 20.1614 16.5523C19.6184 15.8519 18.8581 15.3516 18 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="how-we-work-item-content">
                  <h3 className="how-we-work-item-title">Schools</h3>
                  <p className="how-we-work-item-desc">Independent and private schools seeking coherent learning systems and sustainable educational frameworks.</p>
                </div>
              </div>
              <div className="how-we-work-item">
                <div className="how-we-work-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="how-we-work-item-content">
                  <h3 className="how-we-work-item-title">Education operators</h3>
                  <p className="how-we-work-item-desc">Organizations managing multiple educational institutions and seeking consistency across their operations.</p>
                </div>
              </div>
              <div className="how-we-work-item">
                <div className="how-we-work-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21H7C5.9 21 5 20.1 5 19V5C5 3.9 5.9 3 7 3H17C18.1 3 19 3.9 19 5V19C19 20.1 18.1 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="how-we-work-item-content">
                  <h3 className="how-we-work-item-title">Education groups committed to high-integrity</h3>
                  <p className="how-we-work-item-desc">Educational networks and groups dedicated to maintaining the highest standards of learning quality and governance.</p>
                </div>
              </div>
              <div className="how-we-work-item">
                <div className="how-we-work-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="how-we-work-item-content">
                  <h3 className="how-we-work-item-title">Sustainable learning environments</h3>
                  <p className="how-we-work-item-desc">Institutions focused on creating long-term, sustainable learning systems that adapt and evolve over time.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Ninth Page - How We Make Money */}
      <section id="how-we-make-money" className="how-we-make-money-section" ref={howWeMakeMoneySectionRef}>
        <div className={`how-we-make-money-content ${isHowWeMakeMoneyVisible ? 'visible' : ''}`}>
          <h2 className="how-we-make-money-title">HOW WE MAKE MONEY</h2>
          
          <div className="how-we-make-money-grid">
            <div className="how-we-make-money-item">
              <h3 className="how-we-make-money-item-title">Commercial Model</h3>
              <p className="how-we-make-money-item-desc">Syndeou operates an institutional licensing model.</p>
            </div>
            <div className="how-we-make-money-item">
              <h3 className="how-we-make-money-item-title">Who Pays</h3>
              <p className="how-we-make-money-item-desc">Institutions, not individual students or consumers.</p>
            </div>
            <div className="how-we-make-money-item">
              <h3 className="how-we-make-money-item-title">What They Pay For</h3>
              <p className="how-we-make-money-item-desc">System implementation, accreditation, and ongoing system access and support.</p>
            </div>
            <div className="how-we-make-money-item">
              <h3 className="how-we-make-money-item-title">Why This Model Works</h3>
              <p className="how-we-make-money-item-desc">Predictable revenue, high switching costs, capital efficiency, and governance-aligned growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tenth Page - Investor FAQ */}
      <section id="investor-faq" className="investor-faq-section" ref={investorFaqSectionRef}>
        <div className={`investor-faq-content ${isInvestorFaqVisible ? 'visible' : ''}`}>
          <h2 className="investor-faq-title">INVESTOR FAQ</h2>
          
          <div className="investor-faq-grid">
            <div className="investor-faq-item">
              <h3 className="investor-faq-item-title">What problem does Syndeou solve?</h3>
              <p className="investor-faq-item-answer">Fragmentation and inconsistency in institutional learning delivery.</p>
            </div>
            <div className="investor-faq-item">
              <h3 className="investor-faq-item-title">Why not just another EdTech platform?</h3>
              <p className="investor-faq-item-answer">Syndeou is a learning operating system, not a standalone tool.</p>
            </div>
            <div className="investor-faq-item">
              <h3 className="investor-faq-item-title">Who is the customer?</h3>
              <p className="investor-faq-item-answer">Institutions — not students or parents</p>
            </div>
            <div className="investor-faq-item">
              <h3 className="investor-faq-item-title">What is the moat?</h3>
              <p className="investor-faq-item-answer">Proprietary systems, accreditation pathways, and deep institutional integration.</p>
            </div>
            <div className="investor-faq-item">
              <h3 className="investor-faq-item-title">How does this scale?</h3>
              <p className="investor-faq-item-answer">Through systemisation, training, and controlled rollout.</p>
            </div>
            <div className="investor-faq-item">
              <h3 className="investor-faq-item-title">What stage are you at?</h3>
              <p className="investor-faq-item-answer">Early validation and pre-seed, focused on institutional readiness.</p>
            </div>
            <div className="investor-faq-item">
              <h3 className="investor-faq-item-title">What risks exist?</h3>
              <p className="investor-faq-item-answer">Adoption speed, delivery quality, and regulatory variation — mitigated through conservative execution.</p>
            </div>
            <div className="investor-faq-item">
              <h3 className="investor-faq-item-title">Who are you raising from?</h3>
              <p className="investor-faq-item-answer">Angel and pre-seed investors aligned with long-term, governance-led growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eleventh Page - Contact Us */}
      <section id="contact" className="contact-section" ref={contactSectionRef}>
        <div className={`contact-content ${isContactVisible ? 'visible' : ''}`}>
          <h2 className="contact-title">CONTACT US</h2>
          <p className="contact-subtitle">For institutional partnerships or investor enquiries, reach out to our team.</p>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="contact-card-title">Email</h3>
              <p className="contact-card-text"><a href="mailto:info@syndeou.com">info@syndeou.com</a></p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22C15.221 21.742 10.7415 19.558 7.39396 16.106C4.02046 12.7585 1.83596 8.279 1.57996 3.5C1.57996 2.96957 1.79064 2.46086 2.16571 2.08579C2.54078 1.71071 3.04949 1.5 3.57996 1.5H6.65996C6.89717 1.49978 7.13062 1.55744 7.3388 1.66752C7.54697 1.77761 7.72256 1.9366 7.84996 2.129L9.56996 4.779C9.70665 4.98631 9.78405 5.22616 9.7942 5.47374C9.80435 5.72132 9.74691 5.96658 9.62796 6.18L8.35796 8.46C9.57054 10.9246 11.4853 12.8393 13.95 14.052L16.23 12.782C16.4434 12.6631 16.6887 12.6057 16.9363 12.6158C17.1838 12.6259 17.4237 12.7033 17.631 12.84L20.281 14.56C20.4734 14.6874 20.6324 14.863 20.7425 15.0712C20.8525 15.2794 20.9102 15.5128 20.91 15.75V16.92H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="contact-card-title">Phone</h3>
              <p className="contact-card-text">+973 17005357</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C12 22 20 16 20 10C19.9943 8.14329 19.2569 6.36256 17.9496 5.05035C16.6423 3.73814 14.8567 3.00001 13 3C11.1433 3.00001 9.35774 3.73814 8.05043 5.05035C6.74312 6.36256 6.00571 8.14329 6 10C6 16 14 22 14 22H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="contact-card-title">Office</h3>
              <p className="contact-card-text">Mandarin Tower, Office 101, Al Seef, Kingdom Of Bahrain.</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47714 2 2 6.47715 2 12C2 17.5228 6.47714 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="contact-card-title">Work Day</h3>
              <p className="contact-card-text">Sun - Thu: 08:00 - 17:00</p>
            </div>
          </div>

          <div className="contact-footer">
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="footer-divider">|</span>
              <a href="#our-story">Our Story</a>
              <span className="footer-divider">|</span>
              <a href="#what-we-do">What We Do</a>
            </div>
            <p className="footer-copy">©Copyright Syndeou 2026. Design by Syndeou</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage

