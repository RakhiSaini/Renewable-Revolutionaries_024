import React from "react";
import sec1img from '../assets/sec1img.jpg';
import checkmark from "../assets/checkmark.jpg";
import sec2img from '../assets/sec2img.webp';
import sec32img from '../assets/sec3-2.jpg';
import sec31img from '../assets/sec3-1img.jpg';
import blogimg from '../assets/blogimg.jpg';
import bad1 from '../assets/badge-2-1.svg';
import bad2 from '../assets/capterra.webp';
import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Section 1 */}
      <div className="container mx-auto py-10">
        <div id="sec1" className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          <div className="space-y-4">
            <p className="text-2xl font-bold">
              Online Presentation Maker for Engaging Presentations
            </p>
            <button
              onClick={() => { navigate("/signup") }}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Create Your Presentation
            </button>
          </div>
          <img src={sec1img} alt="Presentation Example" className="w-full lg:w-1/2" />
        </div>

        {/* Feature Highlights */}
        <div className="mt-10 space-y-4">
          {[
            "Online presentation maker with 900+ slide layouts.",
            "Millions of images, icons and graphics to choose from.",
            "Dozens of chart types to visualize data and numbers.",
          ].map((text, index) => (
            <p key={index} className="flex items-center">
              <img src={checkmark} alt="Checkmark" className="w-6 h-6 mr-2" />
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto space-y-12">
          {[
            {
              heading: "Beautiful presentation themes",
              description:
                "Choose from one of our presentation themes with hundreds of available slide layouts...",
              imgSrc: "https://www.visme.co/wp-content/uploads/2021/03/Presentation-maker-templates.jpg",
            },
            {
              heading: "Build your presentation",
              description:
                "With fully customizable slides, text blocks, data visualization tools, photos...",
              imgSrc: "https://www.visme.co/wp-content/uploads/2021/03/Presentation-maker-create.jpg",
            },
            {
              heading: "Customize every aspect of your presentation",
              description:
                "Choose from over a million images, thousands of icons, dozens of charts...",
              imgSrc: "https://www.visme.co/wp-content/uploads/2021/03/Presentation-maker-Customize.jpg",
            },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
              <img src={feature.imgSrc} alt={feature.heading} className="w-full lg:w-1/2" />
              <div className="space-y-4">
                <h2 className="text-xl font-bold">{feature.heading}</h2>
                <p>{feature.description}</p>
                <button
                  onClick={() => { navigate("/signup") }}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Create Your Presentation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <div className="container mx-auto py-10">
        <div id="sec2" className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0">
          <img src={sec2img} alt="Share Presentation" className="w-full lg:w-1/2" />
          <div>
            <p className="text-2xl font-bold">
              Share Your <span className="text-blue-600">Presentation</span>
            </p>
            <p>
              We make it easy to create and share presentations online. Our presentation software...
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-6">
          <div className="space-y-4">
            <img src={logo} alt="Logo" className="w-24" />
            <p>We’re empowering everyone to communicate visually.</p>
            <div className="flex space-x-4">
              <img src={bad1} alt="Badge 1" className="w-12" />
              <img src={bad2} alt="Badge 2" className="w-12" />
            </div>
          </div>
          {/* Additional sections */}
          <div>
            <h4 className="font-bold">Use Cases</h4>
            {["Marketing", "Sales", "HR", "Nonprofits", "Education"].map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div>
            <h4 className="font-bold">Resources</h4>
            {["Blog", "Webinars", "Templates", "Integrations"].map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div>
            <h4 className="font-bold">Company</h4>
            {["About", "Careers", "Pricing", "Community"].map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div>
            <h4 className="font-bold">Support</h4>
            {["Help Center", "Feature Requests", "Contact Us"].map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© 2024 Slide Master, Inc. All rights reserved.</p>
          <p>Terms of Service | Privacy | Site Map</p>
        </div>
      </div>
    </>
  );
};
