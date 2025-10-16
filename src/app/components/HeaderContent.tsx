"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

interface NavLink {
  href: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
}

interface HeaderContentProps {
  platformLinks: NavLink[];
  platformSecondaryLinks: NavLink[];
  solutionsLinks: NavLink[];
  solutionsSecondaryLinks: NavLink[];
}

const HeaderContent: React.FC<HeaderContentProps> = ({
  platformLinks,
  platformSecondaryLinks,
  solutionsLinks,
  solutionsSecondaryLinks,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (dropdown: string) => {
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

  return (
    <nav className={styles.top_main_header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <img src="/images/logos/onfra-logo.png" style={{ height: '55px' }} alt="Best Workplace Management Platform" />
        </Link>
        <ul className={`${styles.nav_menu} ${isMenuOpen ? styles.show : ''}`}>
          <li>
            <a href="#" onClick={() => handleDropdownToggle('platform')}>
              Platform <i className='bx bx-chevron-down'></i>
            </a>
            <div className={`${styles.dropdown_menu} ${openDropdown === 'platform' ? styles.show : ''}`}>
              <div className={styles.dropdown_container}>
                <div className={styles.dropdown_section}>
                  <ul className={styles.dropdown_links}>
                    {platformLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href}>
                          {link.icon && <div className={styles.icon}>{link.icon}</div>}
                          <div>
                            <div className={styles.menu_title_o}>{link.title}</div>
                            <p>{link.description}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.dropdown_section_secondary}>
                  <ul className={styles.dropdown_links}>
                    {platformSecondaryLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href}>
                          {link.icon && <div className={styles.icon}>{link.icon}</div>}
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
          <li>
            <a href="#" onClick={() => handleDropdownToggle('solutions')}>
              Solutions <i className='bx bx-chevron-down'></i>
            </a>
            <div className={`${styles.dropdown_menu} ${openDropdown === 'solutions' ? styles.show : ''}`}>
              <div className={styles.dropdown_container_solutions}>
                <div className={styles.dropdown_section_solutions}>
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
                <div className={styles.dropdown_section_secondary_solutions}>
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
            <a href="https://app.onfra.io/signup" className="btn btn-primary">Signup Now</a>
          </li>
        </ul>
        <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} ${styles.toggle_navbar}`} onClick={handleMenuToggle}></i>
      </div>
    </nav>
  );
};

export default HeaderContent;
