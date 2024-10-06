import React from 'react';

export function Slide1() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <img src="https://via.placeholder.com/1200x500" alt="Welcome" className="w-full h-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-2">Welcome to the Presentation</h2>
            <p className="text-lg text-gray-300">This is the first slide. It introduces the topic.</p>
        </div>
    );
}

export function Slide2() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-4xl font-bold text-white mb-2">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-4">Our mission is to create amazing products that make life easier.</p>
            <img src="https://via.placeholder.com/1200x500" alt="Mission" className="w-full h-auto" />
        </div>
    );
}

export function Slide3() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-4xl font-bold text-white mb-2">Get in Touch</h2>
            <p className="text-lg text-gray-300 mb-4">Feel free to reach out to us at any time. We are here to help you.</p>
            <img src="https://via.placeholder.com/1200x500" alt="Contact" className="w-full h-auto" />
        </div>
    );
}
