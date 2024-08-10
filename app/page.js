"use client";

import Header from './components/Header.jsx'; 
import AccordionBlock from './components/AccordionBlock.jsx'
import FAQ from './components/FAQ.jsx';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <div className="body-home">
        <div className="hero-block">
          <Image className="hero-image" src="/images/hero-image.png" />
          <div className="hero-container">
            <div className="hero-header">
              <h4 className="hero-header_subtitle">Wedding of</h4>
              <h2 className="hero-header_title">Meg & Sam</h2>
            </div>
            <div className="hero-container_divider"></div>
            <h3 className="hero-header_title2">June 7th, 2025</h3>
            <button className="hero-header_button">RSVP</button>
          </div>
        </div>
        <div className="page-divider"></div>
        <div className="about-block">
          <div className="about-left_aligned">
            <Image id="about-image1" className="about-image" src="/images/placeholder.png" alt="About Image 1" />
            <Image id="about-image2" className="about-image" src="/images/placeholder.png" alt="About Image 2" />
          </div>
          <div className="about-right_aligned">
            <h2 className="about-title_text">About Us</h2>
            <p className="about-body_text">
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, 
              ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, 
              ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
              Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
              Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            </p>
            <p className="about-body_text">
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, 
              ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, 
              ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
              Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
              Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            </p>
          </div>
        </div>
        <div className="page-divider"></div>
        <div className="accomendation-block">
          <div className="accomendation-container">
            <div className="accomendation-title_block">
              <h2 className="accomendation-title_text">Accomendation</h2>
              <p className="accomendation-subtitle_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            <div className="blocked-hotel_container">
              <div className="blocked-hotel-title_container">
                <h3 className="blocked-hotel_title-text">Blocked Hotel Spaces ($$)</h3>
                <p className="blocked-hotel_body-text">
                  Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
              </div>
              <a className="blocked-hotel_link" href="url">Link to Hotel Website <img src="/icons/arrow-icon.png" alt="Arrow Icon" /></a>
            </div>
            <div className="alternative_hotel-container">
              <h2 className="alternative_hotel-title">Alternative Hotels</h2>
              <div className="alternative_hotel-nested_container">
                <div className="alternative_hotel-block">
                  <div className="alternative_hotel-title_block">
                    <h2 className="alternative_hotel-block_title">Hotel #1 ($)</h2>
                    <p className="alternative_hotel-block_text">Jorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <a className="blocked-hotel_link" href="url">Link to Hotel Website <img src="/icons/arrow-icon.png" alt="Arrow Icon" /></a>
                </div>
                <div className="alternative_hotel-block">
                  <div className="alternative_hotel-title_block">
                    <h2 className="alternative_hotel-block_title">Hotel #1 ($)</h2>
                    <p className="alternative_hotel-block_text">Jorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <a className="blocked-hotel_link" href="url">Link to Hotel Website <img src="/icons/arrow-icon.png" alt="Arrow Icon" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-divider"></div>
        <div className="FAQ-block">
          <div className="FAQ-container">
            <div className="FAQ-title_row">
              <h2 className="FAQ-title_text">FAQs</h2>
              <div className="FAQ-title_right-aligned">
                <p className="FAQ-subtitle_text">Still have questions</p>
                <a className="FAQ-subtitle_link" href="url">Reach Out to Us</a>
              </div>
            </div>
            <FAQ />
          </div>
        </div>
      </div>
    </>
  );
}
