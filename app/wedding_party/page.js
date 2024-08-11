"use client";

import Header from '../components/Header.jsx'; 
import Image from 'next/image';

export default function WeddingParty() {
    return (
      <div>
        <Header />
        <div className="grid-block">
            <div className="member-card">
                <Image
                    id="member-image1"
                    className="member-image"
                    src="/images/placeholder.png"
                    alt="Member Image 1"
                    width={240}  // Set to the actual width of your image
                    height={200}  // Set to the actual height of your image
                />
            </div>
        </div>
        <h1>Wedding Party</h1>
        <p>This is the Wedding Party page placeholder.</p>
      </div>
    );
  }
  