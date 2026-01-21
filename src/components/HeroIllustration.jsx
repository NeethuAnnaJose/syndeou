import React from 'react'
import './HeroIllustration.css'

function HeroIllustration() {
  return (
    <div className="hero-illustration">
      <svg viewBox="0 0 800 600" className="illustration-svg">
        {/* Background shapes */}
        <circle cx="100" cy="100" r="60" fill="rgba(167, 243, 208, 0.3)" className="bg-shape" />
        <circle cx="700" cy="150" r="80" fill="rgba(219, 234, 254, 0.3)" className="bg-shape" />
        <ellipse cx="650" cy="450" rx="70" ry="50" fill="rgba(251, 207, 232, 0.3)" className="bg-shape" />
        
        {/* Central Screen/Display */}
        <rect x="200" y="80" width="400" height="280" rx="15" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="3" />
        <rect x="220" y="100" width="360" height="240" rx="10" fill="#ffffff" />
        
        {/* Screen Content - Pie Chart */}
        <circle cx="280" cy="200" r="40" fill="none" stroke="#10b981" strokeWidth="3" />
        <path d="M 280 160 A 40 40 0 0 1 310 185 L 280 200 Z" fill="#10b981" />
        <path d="M 310 185 A 40 40 0 0 1 280 240 L 280 200 Z" fill="#3b82f6" />
        <path d="M 280 240 A 40 40 0 0 1 250 215 L 280 200 Z" fill="#fbbf24" />
        
        {/* Screen Content - Network Icon */}
        <circle cx="400" cy="200" r="30" fill="#3b82f6" opacity="0.2" />
        <circle cx="400" cy="200" r="20" fill="#3b82f6" />
        <line x1="400" y1="200" x2="370" y2="170" stroke="#3b82f6" strokeWidth="2" />
        <line x1="400" y1="200" x2="430" y2="170" stroke="#3b82f6" strokeWidth="2" />
        <line x1="400" y1="200" x2="370" y2="230" stroke="#3b82f6" strokeWidth="2" />
        <line x1="400" y1="200" x2="430" y2="230" stroke="#3b82f6" strokeWidth="2" />
        
        {/* Screen Content - Bar Chart */}
        <rect x="480" y="180" width="30" height="40" fill="#3b82f6" rx="3" />
        <rect x="520" y="160" width="30" height="60" fill="#fbbf24" rx="3" />
        <rect x="560" y="190" width="30" height="30" fill="#10b981" rx="3" />
        
        {/* Instructor/Mentor */}
        <g className="instructor">
          {/* Body */}
          <rect x="350" y="200" width="60" height="120" rx="5" fill="#14b8a6" />
          <rect x="360" y="210" width="40" height="50" rx="3" fill="#ffffff" />
          <rect x="370" y="320" width="20" height="60" rx="3" fill="#334155" />
          
          {/* Head */}
          <circle cx="380" cy="180" r="25" fill="#fbbf24" />
          <circle cx="375" cy="175" r="3" fill="#334155" />
          <circle cx="385" cy="175" r="3" fill="#334155" />
          <path d="M 370 185 Q 380 190 390 185" stroke="#334155" strokeWidth="2" fill="none" />
          
          {/* Hair */}
          <path d="M 355 165 Q 360 150 365 165 Q 370 150 375 165 Q 380 150 385 165" 
                fill="#334155" opacity="0.8" />
          
          {/* Tablet */}
          <rect x="320" y="250" width="30" height="40" rx="3" fill="#1e3a8a" />
          
          {/* Pointing Hand */}
          <path d="M 410 240 L 430 220 L 425 215 L 410 230 Z" fill="#fbbf24" />
        </g>
        
        {/* Student 1 - Left */}
        <g className="student-left">
          {/* Body */}
          <rect x="100" y="300" width="50" height="100" rx="5" fill="#3b82f6" />
          <rect x="110" y="310" width="30" height="40" rx="3" fill="#ffffff" />
          
          {/* Head */}
          <circle cx="125" cy="280" r="20" fill="#fbbf24" />
          <circle cx="120" cy="277" r="2" fill="#334155" />
          <circle cx="130" cy="277" r="2" fill="#334155" />
          <path d="M 118 285 Q 125 288 132 285" stroke="#334155" strokeWidth="1.5" fill="none" />
          
          {/* Headphones */}
          <ellipse cx="125" cy="280" rx="25" ry="15" fill="none" stroke="#fbbf24" strokeWidth="3" />
          <rect x="100" y="278" width="8" height="4" rx="2" fill="#fbbf24" />
          <rect x="142" y="278" width="8" height="4" rx="2" fill="#fbbf24" />
          
          {/* Laptop */}
          <rect x="80" y="380" width="90" height="60" rx="5" fill="#1e3a8a" />
          <rect x="85" y="385" width="80" height="50" rx="3" fill="#ffffff" />
          <line x1="85" y1="410" x2="165" y2="410" stroke="#334155" strokeWidth="1" />
          
          {/* Hands on keyboard */}
          <circle cx="110" cy="420" r="5" fill="#fbbf24" />
          <circle cx="150" cy="420" r="5" fill="#fbbf24" />
        </g>
        
        {/* Student 2 - Right */}
        <g className="student-right">
          {/* Body */}
          <rect x="650" y="300" width="50" height="100" rx="5" fill="#ffffff" />
          <rect x="660" y="310" width="30" height="40" rx="3" fill="#3b82f6" />
          
          {/* Head */}
          <circle cx="675" cy="280" r="20" fill="#fbbf24" />
          <circle cx="670" cy="277" r="2" fill="#334155" />
          <circle cx="680" cy="277" r="2" fill="#334155" />
          <path d="M 668 285 Q 675 290 682 285" stroke="#334155" strokeWidth="1.5" fill="none" />
          
          {/* Hair */}
          <path d="M 655 270 Q 660 255 665 270 Q 670 255 675 270 Q 680 255 685 270" 
                fill="#334155" opacity="0.8" />
          
          {/* Headband */}
          <rect x="655" y="275" width="40" height="8" rx="4" fill="#3b82f6" />
          
          {/* Notebook */}
          <rect x="680" y="350" width="40" height="50" rx="3" fill="#ffffff" stroke="#334155" strokeWidth="2" />
          <line x1="685" y1="365" x2="715" y2="365" stroke="#334155" strokeWidth="1" />
          <line x1="685" y1="375" x2="710" y2="375" stroke="#334155" strokeWidth="1" />
          
          {/* Pencil */}
          <line x1="720" y1="360" x2="730" y2="350" stroke="#fbbf24" strokeWidth="3" />
          <polygon points="730,350 735,345 732,348" fill="#ec4899" />
        </g>
        
        {/* Robot */}
        <g className="robot">
          {/* Body */}
          <rect x="720" y="400" width="50" height="80" rx="8" fill="#ffffff" stroke="#3b82f6" strokeWidth="3" />
          <rect x="730" y="410" width="30" height="20" rx="3" fill="#3b82f6" />
          
          {/* Head */}
          <rect x="725" y="360" width="40" height="50" rx="8" fill="#ffffff" stroke="#3b82f6" strokeWidth="3" />
          
          {/* Eyes */}
          <circle cx="735" cy="380" r="8" fill="#fbbf24" />
          <circle cx="755" cy="380" r="8" fill="#fbbf24" />
          <circle cx="735" cy="380" r="4" fill="#ffffff" />
          <circle cx="755" cy="380" r="4" fill="#ffffff" />
          
          {/* Mouth */}
          <path d="M 740 395 Q 745 400 750 395" stroke="#3b82f6" strokeWidth="2" fill="none" />
          
          {/* Books Stack */}
          <rect x="715" y="480" width="60" height="15" rx="2" fill="#fbbf24" />
          <rect x="718" y="495" width="54" height="15" rx="2" fill="#3b82f6" />
          <rect x="721" y="510" width="48" height="15" rx="2" fill="#ffffff" />
        </g>
        
        {/* Foreground Elements */}
        {/* Plant */}
        <ellipse cx="400" cy="450" rx="15" ry="20" fill="#10b981" />
        <rect x="395" y="450" width="10" height="30" fill="#8b5cf6" />
        
        {/* Phone */}
        <rect x="120" y="420" width="20" height="35" rx="3" fill="#334155" />
        <rect x="123" y="425" width="14" height="25" rx="2" fill="#ffffff" />
        
        {/* Eraser */}
        <rect x="150" y="425" width="15" height="10" rx="2" fill="#10b981" />
        
        {/* Icons */}
        {/* Lightbulb */}
        <circle cx="150" cy="250" r="15" fill="#fbbf24" opacity="0.8" />
        <rect x="147" y="250" width="6" height="8" fill="#334155" />
        
        {/* Speech Bubble */}
        <ellipse cx="180" cy="240" rx="20" ry="15" fill="#dbeafe" opacity="0.8" />
        <polygon points="175,250 170,260 180,255" fill="#dbeafe" opacity="0.8" />
        
        {/* Magnifying Glass */}
        <circle cx="750" cy="350" r="12" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.8" />
        <line x1="758" y1="358" x2="768" y2="368" stroke="#3b82f6" strokeWidth="2" opacity="0.8" />
      </svg>
    </div>
  )
}

export default HeroIllustration

