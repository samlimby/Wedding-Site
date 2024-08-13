"use client";

import Header from '../components/Header.jsx'; 
import './wedding_party.css';
import Image from 'next/image';

export default function WeddingParty() {
    return (
      <div>
        <Header />
        <div className="party-body">
            <div className="grid-block">
                <div className="member-card">
                    <Image
                        id="member-image1"
                        className="member-image"
                        src="/images/placeholder.png"
                        alt="Member Image 1"
                        width={240}  
                        height={200}  
                    />
                    <div className="card-text_container">
                        <div className="card-text_block">
                            <h3 className="card-subtitle_text">Bride</h3>
                            <h2 className="card-title_text">Meg</h2>
                        </div>
                        <div className="card-divider"></div>
                        <div className="card-text_block">
                            <h3 className="card-subtitle2_text">Fun Fact</h3>
                            <p className="card-body_text">
                                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="member-card">
                    <Image
                        id="member-image1"
                        className="member-image"
                        src="/images/placeholder.png"
                        alt="Member Image 1"
                        width={240}  
                        height={200}  
                    />
                    <div className="card-text_container">
                        <div className="card-text_block">
                            <h3 className="card-subtitle_text">Bride</h3>
                            <h2 className="card-title_text">Meg</h2>
                        </div>
                        <div className="card-divider"></div>
                        <div className="card-text_block">
                            <h3 className="card-subtitle2_text">Fun Fact</h3>
                            <p className="card-body_text">
                                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="member-card">
                    <Image
                        id="member-image1"
                        className="member-image"
                        src="/images/placeholder.png"
                        alt="Member Image 1"
                        width={240}  
                        height={200}  
                    />
                    <div className="card-text_container">
                        <div className="card-text_block">
                            <h3 className="card-subtitle_text">Bride</h3>
                            <h2 className="card-title_text">Meg</h2>
                        </div>
                        <div className="card-divider"></div>
                        <div className="card-text_block">
                            <h3 className="card-subtitle2_text">Fun Fact</h3>
                            <p className="card-body_text">
                                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="member-card">
                    <Image
                        id="member-image1"
                        className="member-image"
                        src="/images/placeholder.png"
                        alt="Member Image 1"
                        width={240}  
                        height={200}  
                    />
                    <div className="card-text_container">
                        <div className="card-text_block">
                            <h3 className="card-subtitle_text">Bride</h3>
                            <h2 className="card-title_text">Meg</h2>
                        </div>
                        <div className="card-divider"></div>
                        <div className="card-text_block">
                            <h3 className="card-subtitle2_text">Fun Fact</h3>
                            <p className="card-body_text">
                                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="member-card">
                    <Image
                        id="member-image1"
                        className="member-image"
                        src="/images/placeholder.png"
                        alt="Member Image 1"
                        width={240}  
                        height={200}  
                    />
                    <div className="card-text_container">
                        <div className="card-text_block">
                            <h3 className="card-subtitle_text">Bride</h3>
                            <h2 className="card-title_text">Meg</h2>
                        </div>
                        <div className="card-divider"></div>
                        <div className="card-text_block">
                            <h3 className="card-subtitle2_text">Fun Fact</h3>
                            <p className="card-body_text">
                                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  