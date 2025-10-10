"use client";

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    if (window.innerWidth < 992) {
      setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    }
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Your navigation data (platformLinks, solutionsLinks, etc.) remains here...
  const platformLinks = [
    { href: "/platform/visitors/", icon: "icon-visitdesk_icons_0140", title: "Visitor", description: "Manage visitor check-ins and track data securely." },
    { href: "/platform/flexipass/", icon: "icon-visitdesk_icons_0125", title: "Flexipass", description: "Streamline contractor access and pass management." },
    { href: "/platform/employees/", icon: "icon-visitdesk_icons_0091", title: "Attendance & Time Tracking", description: "Track employee attendance effortlessly and securely." },
    { href: "/platform/queue-management/", icon: "icon-visitdesk_icons_0085", title: "Queue", description: "Enhance customer experience with efficient queues." },
    { href: "/platform/deliveries/", icon: "icon-visitdesk_icons_0045", title: "Deliveries", description: "Streamline package tracking and delivery notifications." },
    { href: "/platform/material-pass/", icon: "icon-visitdesk_icons_0148", title: "Material Pass", description: "Track all material movements with ease and accuracy." },
    { href: "/platform/rooms/", icon: "icon-visitdesk_icons_0106", title: "Rooms", description: "Simplify meeting room bookings for better collaboration." },
    { href: "/platform/desk/", icon: "icon-visitdesk_icons_0101", title: "Desks", description: "Manage desk reservations for a flexible workspace." },
    { href: "/platform/vehicles/", icon: "icon-visitdesk_icons_0112", title: "Vehicle Pass", description: "Control vehicle access with effective pass management." },
    { href: "#", icon: "icon-visitdesk_icons_0070", title: "Signage", description: "Use digital signage for real-time information sharing." },
  ];
  const platformSecondaryLinks = [
      { href: "/download-apps/", icon: "icon-visitdesk_icons_0065", title: "Download Apps" },
      { href: "/api/", icon: "icon-visitdesk_icons_0144", title: "Api" },
      { href: "/integrations/", icon: "icon-visitdesk_icons_0152", title: "Intergrations" },
  ];
  const solutionsLinks = [
    { href: "/solutions/hybrid-office-management/", title: "Hybrid Office Management", description: "Spanning the Gap Between Office and Remote Work" },
    { href: "/solutions/co-working-management/", title: "Co Working Management", description: "Simplify Operations, Enhance Experience" },
    { href: "/solutions/facility-management/", title: "Facility Management", description: "Transforming Spaces into Efficient Workplaces" },
    { href: "/solutions/tech-park-management/", title: "Tech Park Management", description: "The Future of Workplace Management" },
    { href: "/solutions/centralize-workplace-management/", title: "Centralize Workplace Management", description: "Streamline Your Operations Centralize Workplace Management" },
    { href: "/solutions/employee-tenant-and-visitor-experience/", title: "Employee, tenant and visitor experience", description: "Efficiently manage desk assignments" },
    { href: "/solutions/safety-security-and-compliance/", title: "Safety, security and compliance", description: "Track and resolve facility maintenance" },
    { href: "/solutions/workplace-utilization-and-insights/", title: "Workplace utilization and insights", description: "Optimize Your Workspace - Unlock Efficiency and Insights" },
    { href: "/solutions/workplaces-and-buildings/", title: "Workplaces and buildings", description: "Revolutionizing Workplace and Building Management" },
    { href: "/solutions/sustainable-workplace/", title: "Sustainable Workplace", description: "Building Sustainability into Every Corner" },
  ];
  const solutionsSecondaryLinks = [
    { href: "/solutions/commercial-real-estate-management/", title: "Commerical Real Estate Management", description: "Revolutionize Your Commercial Real Estate Operations" },
    { href: "/solutions/manufacturing-plant-management/", title: "Manufacturing Plant Management", description: "Transform Your Manufacturing Plant Management" },
    { href: "/solutions/industrial-security-management/", title: "Industrial Security Management", description: "Empowering Your Industry's Security" },
    { href: "/solutions/real-estate-digital-twin/", title: "Real estate digital twin", description: "Transform Your Properties into Interactive Digital Twins" },
    { href: "/solutions/proptech-solutions/", title: "Proptech Solutions", description: "Transform Your Property Management" },
  ];


  return (
    <>
      <Head>
        {/* --- ADD THIS LINE FOR ICONS --- */}
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
      </Head>
      
      <nav className={styles.top_main_header}>
        {/* ... The rest of your JSX remains the same ... */}
        {/* Make sure your logo path is correct, e.g., <img src="/onfra-logo.png" ... /> if the logo is in the `public` folder */}
        <div className={styles.container}>
          <Link href="/" className={styles.brand}>
            <img src="/images/logos/onfra-logo.png" style={{ height: '55px' }} alt="Best Workplace Management Platform" />
          </Link>
          <ul className={`${styles.nav_menu} ${isMenuOpen ? styles.show : ''}`}>
            
            {/* Platform Dropdown */}
            <li>
              <a href="#" onClick={() => handleDropdownToggle('platform')}>
                Platform <i className='bx bx-chevron-down'></i>
              </a>
              <div className={`${styles.dropdown_menu} ${openDropdown === 'platform' ? styles.show : ''}`}>
                <div className={styles.container}>
                  <div className={styles.right_section}>
                    <span className={styles.dropdown_close} onClick={() => handleDropdownToggle('platform')}><i className='bx bx-chevron-left'></i> Back</span>
                    <ul className={styles.dropdown_links}>
                      {platformLinks.map((link, index) => (
                        <li key={index}>
                          <Link href={link.href}>
                              <i className={`bx ${link.icon}`}></i>
                              <div>
                                <div className={styles.menu_title_o}>{link.title}</div>
                                <p>{link.description}</p>
                              </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.left_section}>
                    <ul className={styles.dropdown_links}>
                      {platformSecondaryLinks.map((link, index) => (
                        <li key={index}>
                           <Link href={link.href}>
                              <i className={`bx ${link.icon}`}></i>
                              <div>
                                <div className={styles.menu_title_o}>{link.title}</div>
                              </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Solutions Dropdown */}
            <li>
              <a href="#" onClick={() => handleDropdownToggle('solutions')}>
                Solutions <i className='bx bx-chevron-down'></i>
              </a>
              <div className={`${styles.dropdown_menu} ${openDropdown === 'solutions' ? styles.show : ''}`}>
                 <div className={styles.container}>
                    <div className={styles.right_section}>
                        <span className={styles.dropdown_close} onClick={() => handleDropdownToggle('solutions')}><i className='bx bx-chevron-left' ></i> Back</span>
                        <ul className={styles.dropdown_links}>
                            {solutionsLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href}>
                                        <div>
                                            <div className={styles.menu_title_o}>{link.title}</div>
                                            <p>{link.description}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.left_section} style={{background: '#fff !important'}}>
                        <ul className={styles.dropdown_links}>
                             {solutionsSecondaryLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href}>
                                        <div>
                                            <div className={styles.menu_title_o}>{link.title}</div>
                                            <p>{link.description}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
              </div>
            </li>

            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li>
              <a href="https://app.onfra.io/signup">Signup Now</a>
            </li>
          </ul>
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} ${styles.toggle_navbar}`} onClick={handleMenuToggle}></i>
        </div>
      </nav>
    </>
  );
};

export default Header;