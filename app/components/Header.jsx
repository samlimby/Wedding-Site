import Link from 'next/link';
import { useEffect } from 'react';

export default function Header() {

  return (
    <div className="header">
        <Link href="/" passHref>
          <h2 id="home-text" className="home_text">Meg & Sam</h2>
        </Link>
      <div className="header_right-aligned">
        <div className="header-tabset">
            <Link href="/" passHref>
                <h2 id="header-home_text" className="header-text_tabset">Home</h2>
            </Link>
            <div className="header-divider"></div>
            <Link href="/schedule" passHref>
                <h2 id="header-schedule_text" className="header-text_tabset">Schedule</h2>
            </Link>
            <div className="header-divider"></div>
            <Link href="/wedding_party" passHref>
                <h2 id="home-wedding-party_text" className="header-text_tabset">Wedding Party</h2>
            </Link>
            <div className="header-divider"></div>
            <Link href="/registry" passHref>
                <h2 id="home-registry_text" className="header-text_tabset">Registry</h2>
            </Link>
        </div>
        <Link href="/status" passHref> 
          <button id="primary_action-header" className="primary-action">Get Status</button>
        </Link>
      </div>
    </div>
  );
}