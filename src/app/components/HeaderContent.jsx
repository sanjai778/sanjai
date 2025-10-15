"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
var HeaderContent = function (_a) {
    var platformLinks = _a.platformLinks, platformSecondaryLinks = _a.platformSecondaryLinks, solutionsLinks = _a.solutionsLinks, solutionsSecondaryLinks = _a.solutionsSecondaryLinks;
    var _b = useState(false), isMenuOpen = _b[0], setIsMenuOpen = _b[1];
    var _c = useState(null), openDropdown = _c[0], setOpenDropdown = _c[1];
    var pathname = usePathname();
    var handleMenuToggle = function () {
        setIsMenuOpen(!isMenuOpen);
    };
    var handleDropdownToggle = function (dropdown) {
        if (window.innerWidth < 992) {
            setOpenDropdown(openDropdown === dropdown ? null : dropdown);
        }
    };
    useEffect(function () {
        setIsMenuOpen(false);
    }, [pathname]);
    useEffect(function () {
        var handleResize = function () {
            if (window.innerWidth >= 992) {
                setIsMenuOpen(false);
                setOpenDropdown(null);
            }
        };
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    return (<nav className={styles.top_main_header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <img src="/images/logos/onfra-logo.png" style={{ height: '55px' }} alt="Best Workplace Management Platform"/>
        </Link>
        <ul className={"".concat(styles.nav_menu, " ").concat(isMenuOpen ? styles.show : '')}>
          <li>
            <a href="#" onClick={function () { return handleDropdownToggle('platform'); }}>
              Platform <i className='bx bx-chevron-down'></i>
            </a>
            <div className={"".concat(styles.dropdown_menu, " ").concat(openDropdown === 'platform' ? styles.show : '')}>
              <div className={styles.dropdown_container}>
                <div className={styles.dropdown_section}>
                  <ul className={styles.dropdown_links}>
                    {platformLinks.map(function (link, index) { return (<li key={index}>
                        <Link href={link.href}>
                          {link.icon && <div className={styles.icon}>{link.icon}</div>}
                          <div>
                            <div className={styles.menu_title_o}>{link.title}</div>
                            <p>{link.description}</p>
                          </div>
                        </Link>
                      </li>); })}
                  </ul>
                </div>
                <div className={styles.dropdown_section_secondary}>
                  <ul className={styles.dropdown_links}>
                    {platformSecondaryLinks.map(function (link, index) { return (<li key={index}>
                        <Link href={link.href}>
                          {link.icon && <div className={styles.icon}>{link.icon}</div>}
                          <div>
                            <div className={styles.menu_title_o}>{link.title}</div>
                          </div>
                        </Link>
                      </li>); })}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#" onClick={function () { return handleDropdownToggle('solutions'); }}>
              Solutions <i className='bx bx-chevron-down'></i>
            </a>
            <div className={"".concat(styles.dropdown_menu, " ").concat(openDropdown === 'solutions' ? styles.show : '')}>
              <div className={styles.dropdown_container_solutions}>
                <div className={styles.dropdown_section_solutions}>
                  <ul className={styles.dropdown_links}>
                    {solutionsLinks.map(function (link, index) { return (<li key={index}>
                        <Link href={link.href}>
                          <div>
                            <div className={styles.menu_title_o}>{link.title}</div>
                            <p>{link.description}</p>
                          </div>
                        </Link>
                      </li>); })}
                  </ul>
                </div>
                <div className={styles.dropdown_section_secondary_solutions}>
                  <ul className={styles.dropdown_links}>
                    {solutionsSecondaryLinks.map(function (link, index) { return (<li key={index}>
                        <Link href={link.href}>
                          <div>
                            <div className={styles.menu_title_o}>{link.title}</div>
                            <p>{link.description}</p>
                          </div>
                        </Link>
                      </li>); })}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
          <li>
            <a href="https://app.onfra.io/signup" className="btn btn-primary-header">Signup Now</a>
          </li>
        </ul>
        <i className={"bx ".concat(isMenuOpen ? 'bx-x' : 'bx-menu', " ").concat(styles.toggle_navbar)} onClick={handleMenuToggle}></i>
      </div>
    </nav>);
};
export default HeaderContent;
