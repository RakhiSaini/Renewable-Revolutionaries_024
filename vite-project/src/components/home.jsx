import React from "react";
import sec1img from '../assets/sec1img.jpg'
import checkmark from "../assets/checkmark.jpg"
import sec2img from '../assets/sec2img.webp'
import sec32img from '../assets/sec3-2.jpg'
import sec31img from '../assets/sec3-1img.jpg'
import blogimg from '../assets/blogimg.jpg'
import bad1 from '../assets/badge-2-1.svg'
import bad2 from '../assets/capterra.webp'
import logo from '../assets/logo.jpg'
import { useNavigate } from 'react-router-dom';
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="containerpp">
      <div id="sec1">
        <div>
          <div>
            <p>Online Presentation Maker for Engaging Presentations</p>
            <button onClick={()=>{navigate("/signup")}}>Create Your Presentation</button>
          </div>
          <div>
            <img src={sec1img} alt="" />
          </div>
        </div>
        <div className="container">
          <p>
            <span>
              <img src={checkmark} alt="f" />
            </span>
            Online presentation maker with 900+ slide layouts.
          </p>
          <p>
            <span>
              <img src={checkmark} alt="f" />
            </span>
            Millions of images, icons and graphics to choose from.
          </p>
          <p>
            <span>
              <img src={checkmark} alt="f" />
            </span>
            Dozens of chart types to visualize data and numbers.
          </p>
        </div>
      </div>
      </div>
    <div className="homepage">
      <div className="rs">
        <h1>
          Features of the <span>Presentation</span> Maker
        </h1>
        <p className="headp">
          Slide Master’s free online presentation maker was built by designers for
          non-designers to help you create presentations that your audience will
          love, without needing an eye for design.
        </p>
        <div className="container1">
          <div>
            <img
              src="https://www.visme.co/wp-content/uploads/2021/03/Presentation-maker-templates.jpg"
              alt=""
            />
          </div>
          <div>
            <h2>Beautiful presentation themes</h2>
            <p>
              Choose from one of our presentation themes with hundreds of
              available slide layouts for you to pick from and build a beautiful
              presentation. Find slide layouts to fit any type of information
              you need to communicate within your presentation and customize
              them to perfectly fit your brand or topic.
            </p>
            <button onClick={()=>{navigate("/signup")}}>Create Your Presentation</button>
          </div>
        </div>
      </div>
      <div className="rs">
        <div className="container1">
          <div>
            <h2>Build your presentation</h2>
            <p>
              With fully customizable slides, text blocks, data visualization
              tools, photos and icons to help tell your story, you can easily
              build creative and cool presentations as quickly as you need.
              Build the perfect slides with Visme’s easy-to-use presentation
              editor.
            </p>
            <button onClick={()=>{navigate("/signup")}}>Create Your Presentation</button>
          </div>
          <div>
            <img
              src="https://www.visme.co/wp-content/uploads/2021/03/Presentation-maker-create.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="rs">
        <div className="container1">
          <div>
            <img
              src="https://www.visme.co/wp-content/uploads/2021/03/Presentation-maker-Customize.jpg"
              alt=""
            />
          </div>
          <div>
            <h2>
              Customize every aspect of your presentation with your own images
              and text
            </h2>
            <p>
              Choose from over a million images, thousands of icons, dozens of
              charts and data widgets to visualize information in an engaging
              way. Apply a color scheme to all your slides with one click. Add
              animation effects, transitions, interactivity, pop-ups, rollovers
              and third-party content such as live websites and social media
              feeds.
            </p>
            <button onClick={()=>{navigate("/signup")}}>Create Your Presentation</button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div id="sec2" >
        <div>
          <img src={sec2img} alt="" />
          
        </div>
        <div>
          <p>
            Share Your <span className="bluehiglight">Presentation</span>
          </p>
          <p>
            We makes it easy to create and share presentations online. Our
            presentation software allows you to present online by generating a
            link to access your presentation, share privately by sending a
            password protected link to friends and colleagues, or even turn your
            presentation into a lead generation tool by requiring email sign-in
            before viewing.
          </p>
        </div>
      </div>
      </div>
      
      <div id="sec3part">
        <div className="container">
        <div id="sec3">
          <div>
            <div>
              <p>
                <span className="bluehiglight">HOW IT WORKS</span>
              </p>
              <p>
                Make <span className="bluehiglight">Presentations</span> in 5
                Steps
              </p>
              <p>
                Whether you’re creating a presentation to pitch your business,
                to inform your industry or to update your team or supervisors,
                you want your slideshow to be equal parts beautiful and
                informative. Visme makes it easy with our powerful presentation
                maker.
              </p>
              <p>
                <i>
                  Mix and match template styles and slide ideas, customize with
                  your own ideas, insert design elements from our asset library,
                  present online with presenter notes and more.
                </i>
              </p>
            </div>
            <div>
              <img src={sec31img} alt="" />
            </div>
          </div>
          <div>
            <div>
              <img src={sec32img} alt="thrthrtherthrthrhrthrth" id="sec32img" />
            </div>
            <div>
              <p>
                Sign up for free or log into your Visme account and create a new
                project.
              </p>
              <p>
                Choose one of our beautiful themes under the Presentations
                content category or select a pre-designed presentation template.
              </p>
              <p>
                Add new slides from our theme library to help guide your
                presentation design.
              </p>
              <p>
                Customize text boxes, fonts, colors, photos, icons, charts, data
                visualization tools and so much more within your slides.
              </p>
              <p>
                Quickly and easily share or present your slideshow by clicking
                Share in the top navigation bar and viewing our share options.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div id="sec4">
        <div className="container">
          <p>
            Your <span className="bluehiglight">presentations</span> deserve to
            be <span className="bluehiglight">beautiful</span> and so does the
            rest of your content
          </p>
          <p>
            Create visual brand experiences whether you are a seasoned designer
            or a total novice.
          </p>
          <button onClick={()=>{navigate("/signup")}}>SignUp Free</button>
        </div>
      </div>
      <div id="footerpp">
        <div className="containerpp">
        <footer>
          <div id="fp1">
            <div>
              <div>
                <img src={logo} alt="k" />
              </div>
              <div>
                <p>We’re empowering everyone to communicate visually.</p>
              </div>
              <div>
                <img src={bad1} alt="r"/>
                <img src={bad2} alt="r"/>
              </div>
            </div>
            <div>
              <h4>Use Cases</h4>
              <p>Marketing</p>
              <p>Sales</p>
              <p>Human Resources</p>
              <p>Training & Development</p>
              <p>Nonprofits</p>
              <p>Education</p>
              <p>Enterprise</p>
              <p>Schedule a Demo</p>
            </div>
            <div>
              <h4>Resources</h4>
              <p>Blog</p>
              <p>Webinars</p>
              <p>Video Tutorials</p>
              <p>eBooks</p>
              <p>Online Courses</p>
              <p>Templates</p>
              <p>Design Gallery</p>
              <p>Integrations</p>
            </div>
            <div>
              <h4>Company</h4>
              <p>About</p>
              <p>Pricing</p>
              <p>Careers</p>
              <p>Download</p>
              <p>What's New</p>
              <p>Customer Reviews</p>
              <p>Community</p>
              <p>Affiliate Program</p>
            </div>
            <div>
              <h4>Support</h4>
              <p>Help Center</p>
              <p>Feature Requests</p>
              <p>Contact Us</p>
            </div>
            <div>
              <h4>Recent Features & Articles</h4>
              <a href="https://visme.co/blog/recruitment-strategies/">
                <img src={blogimg} alt="lo" />
                <p>How IBM Uses Infographics to Attract Top Talent</p>
              </a>
            </div>
          </div>
        
        <div>
          <p>Copyright 2024 Hard WebContent, Inc.</p>
          <p>All rights reserved. Proudly made in Dholakpur.</p>
          <p>Terms of Service</p>
          <p>Privacy</p>
          <p>Site Map</p>
        </div>
      </footer>
        </div>
      
      </div>

    </>
    
  );
};
