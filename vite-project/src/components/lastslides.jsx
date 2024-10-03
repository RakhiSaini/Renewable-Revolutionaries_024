// src/components/Slides.jsx
import React from 'react';
import './slides.css'; // Import the CSS for slide styling
// import styles from './styles.module.css'

export function Slide1() {
    return (
        <div className="slide-content">
            <img src="https://via.placeholder.com/1200x500" alt="Welcome" className="slide-image" />
            <h2 className="slide-title">Welcome to the Presentation</h2>
            <p className="slide-text">This is the first slide. It introduces the topic.</p>
        </div>
    );
}

export function Slide2() {
    return (
        <div className="slide-content">
            <h2 className="slide-title">Our Mission</h2>
            <p className="slide-text">Our mission is to create amazing products that make life easier.</p>
            <img src="https://via.placeholder.com/1200x500" alt="Mission" className="slide-image" />
        </div>
    );
}

export function Slide3() {
    return (
        <div className="slide-content">
            <h2 className="slide-title">Get in Touch</h2>
            <p className="slide-text">Feel free to reach out to us at any time. We are here to help you.</p>
            <img src="https://via.placeholder.com/1200x500" alt="Contact" className="slide-image" />
        </div>
    );
}
