"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

// --- Data for Navigation (Extracted from your PHP for easy updates) ---
const menuData = {
  platform: {
    products: [
      { title: 'Visitor', description: 'Manage visitor check-ins and track data securely.', icon: 'icon-visitdesk_icons_0140', href: 'https://onfra.io/platform/visitors/' },
      { title: 'Flexipass', description: 'Streamline contractor access and pass management.', icon: 'icon-visitdesk_icons_0125', href: 'https://onfra.io/platform/flexipass/' },
      { title: 'Attendance & Time Tracking', description: 'Track employee attendance effortlessly and securely.', icon: 'icon-visitdesk_icons_0091', href: 'https://onfra.io/platform/employees/' },
      { title: 'Queue', description: 'Enhance customer experience with efficient queues.', icon: 'icon-visitdesk_icons_0085', href: 'https://onfra.io/platform/queue-management/' },
      { title: 'Deliveries', description: 'Streamline package tracking and delivery notifications.', icon: 'icon-visitdesk_icons_0045', href: 'https://onfra.io/platform/deliveries/' },
      { title: 'Material Pass', description: 'Track all material movements with ease and accuracy.', icon: 'icon-visitdesk_icons_0148', href: 'https://onfra.io/platform/material-pass/' },
      { title: 'Rooms', description: 'Simplify meeting room bookings for better collaboration.', icon: 'icon-visitdesk_icons_0106', href: 'https://onfra.io/platform/rooms/' },
      { title: 'Desks', description: 'Manage desk reservations for a flexible workspace.', icon: 'icon-visitdesk_icons_0101', href: 'https://onfra.io/platform/desk/' },
      { title: 'Vehicle Pass', description: 'Control vehicle access with effective pass management.', icon: 'icon-visitdesk_icons_0112', href: 'https://onfra.io/platform/vehicles/' },
      { title: 'Signage', description: 'Use digital signage for real-time information sharing.', icon: 'icon-visitdesk_icons_0070', href: '#' },
    ],
    resources: [
      { title: 'Download Apps', icon: 'icon-visitdesk_icons_0065', href: 'https://onfra.io/download-apps/' },
      { title: 'API', icon: 'icon-visitdesk_icons_0144', href: 'https://onfra.io/api/' },
      { title: 'Integrations', icon: 'icon-visitdesk_icons_0152', href: 'https://onfra.io/integrations/' },
    ]
  },
  solutions: {
    main: [
      { title: 'Hybrid Office Management', description: 'Spanning the Gap Between Office and Remote Work', href: 'https://onfra.io/solutions/hybrid-office-management/' },
      { title: 'Co Working Management', description: 'Simplify Operations, Enhance Experience', href: 'https://onfra.io/solutions/co-working-management/' },
      { title: 'Facility Management', description: 'Transforming Spaces into Efficient Workplaces', href: 'https://onfra.io/solutions/facility-management/' },
      { title: 'Tech Park Management', description: 'The Future of Workplace Management', href: 'https://onfra.io/solutions/tech-park-management/' },
      { title: 'Centralize Workplace Management', description: 'Streamline Your Operations Centralize Workplace Management', href: 'https://onfra.io/solutions/centralize-workplace-management/' },
      { title: 'Employee, tenant and visitor experience', description: 'Efficiently manage desk assignments', href: 'https://onfra.io/solutions/employee-tenant-and-visitor-experience/' },
      { title: 'Safety, security and compliance', description: 'Track and resolve facility maintenance', href: 'https://onfra.io/solutions/safety-security-and-compliance/' },
      { title: 'Workplace utilization and insights', description: 'Optimize Your Workspace - Unlock Efficiency and Insights', href: 'https://onfra.io/solutions/workplace-utilization-and-insights/' },
      { title: 'Workplaces and buildings', description: 'Revolutionizing Workplace and Building Management', href: 'https://onfra.io/solutions/workplaces-and-buildings/' },
      { title: 'Sustainable Workplace', description: 'Building Sustainability into Every Corner', href: 'https://onfra.io/solutions/sustainable-workplace/' },
    ],
    secondary: [
      { title: 'Commercial Real Estate Management', description: 'Revolutionize Your Commercial Real Estate Operations', href: 'https://onfra.io/solutions/commercial-real-estate-management/' },
      { title: 'Manufacturing Plant Management', description: 'Transform Your Manufacturing Plant Management', href: 'https://onfra.io/solutions/manufacturing-plant-management/' },
      { title: 'Industrial Security Management', description: 'Empowering Your Industry\'s Security', href: 'https://onfra.io/solutions/industrial-security-management/' },
      { title: 'Real estate digital twin', description: 'Transform Your Properties into Interactive Digital Twins', href: 'https://onfra.io/solutions/real-estate-digital-twin/' },
      { title: 'Proptech Solutions', description: 'Transform Your Property Management', href: 'https://onfra.io/solutions/proptech-solutions/' },
    ]
  }
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');

  // Toggles the main mobile menu
  const handleToggle = () => setIsMenuOpen(!isMenuOpen);

  // Opens a specific dropdown on mobile
  const handleDropdown = (menuName) => {
    if (window.innerWidth < 992) {
      setOpenDropdown(menuName);
    }
  };
  
  // Closes any open dropdown on mobile
  const closeDropdown = () => setOpenDropdown('');

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="https://onfra.io/" className={styles.brand}>
          <Image src="https://onfra.io/wp-content/uploads/2024/05/onfra-logo.png" alt="Onfra Logo" width={130} height={40} priority />
        </Link>

        <nav className={`${styles.navMenu} ${isMenuOpen ? styles.show : ''}`}>
          <ul className={styles.navList}>
            
            {/* --- Platform Mega Menu --- */}
            <li className={styles.hasDropdown}>
              <a onClick={() => handleDropdown('platform')}>
                Platform <i className='bx bx-chevron-down'></i>
              </a>
              <div className={`${styles.dropdownMenu} ${openDropdown === 'platform' ? styles.show : ''}`}>
                <div className="container">
                  <span className={styles.dropdownClose} onClick={closeDropdown}><i className='bx bx-chevron-left'></i> Back</span>
                  <div className={styles.dropdownGrid}>
                    <div className={styles.rightSection}>
                       <ul className={styles.dropdownLinks}>
                        {menuData.platform.products.map(item => (
                          <li key={item.title}>
                            <Link href={item.href}>
                              <i className={`bx ${item.icon}`}></i>
                              <div className={styles.subDiv}>
                                <div className={styles.menuTitle}>{item.title}</div>
                                <p>{item.description}</p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.leftSection}>
                      <ul className={styles.dropdownLinks}>
                        {menuData.platform.resources.map(item => (
                          <li key={item.title}>
                            <Link href={item.href}>
                              <i className={`bx ${item.icon}`}></i>
                              <div className={styles.subDiv}>
                                <div className={styles.menuTitle}>{item.title}</div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* --- Solutions Mega Menu --- */}
            <li className={styles.hasDropdown}>
              <a onClick={() => handleDropdown('solutions')}>
                Solutions <i className='bx bx-chevron-down'></i>
              </a>
              <div className={`${styles.dropdownMenu} ${openDropdown === 'solutions' ? styles.show : ''}`}>
                 <div className="container">
                  <span className={styles.dropdownClose} onClick={closeDropdown}><i className='bx bx-chevron-left'></i> Back</span>
                  <div className={styles.dropdownGrid}>
                    <div className={styles.rightSection}>
                       <ul className={styles.dropdownLinks}>
                        {menuData.solutions.main.map(item => (
                          <li key={item.title}>
                            <Link href={item.href}>
                              <div className={styles.subDiv}>
                                <div className={styles.menuTitle}>{item.title}</div>
                                <p>{item.description}</p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.leftSection}>
                      <ul className={styles.dropdownLinks}>
                        {menuData.solutions.secondary.map(item => (
                          <li key={item.title}>
                            <Link href={item.href}>
                              <div className={styles.subDiv}>
                                <div className={styles.menuTitle}>{item.title}</div>
                                <p>{item.description}</p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            
            <li><Link href="https://onfra.io/blogs/">Blogs</Link></li>
            <li><Link href="https://onfra.io/contact-us/">Contact Us</Link></li>
            <li className={styles.ctaItem}>
              <Link href="https://app.onfra.io/signup" className={styles.signupButton}>Signup Now</Link>
            </li>
          </ul>
        </nav>

        <button className={styles.toggleNavbar} onClick={handleToggle} aria-label="Toggle Navigation">
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </button>
      </div>
    </header>
  );
}