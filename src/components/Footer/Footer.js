import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faGithub, faDribbble } from "@fortawesome/free-brands-svg-icons";

import React from "react";

const footerLinks = [
  {
    section: "Services",
    links: [
      "1on1 Coaching",
      "Company Review",
      "Accounts Review",
      "HR Consulting",
      "SEO Optimisation",
    ],
  },
  {
    section: "Company",
    links: ["About", "Meet the Team", "Accounts Review"],
  },
  {
    section: "Helpful Links",
    links: ["Contact", "FAQs", "Live Chat"],
  },
  {
    section: "Legal",
    links: ["Accessibility", "Returns Policy", "Refund Policy", "Hiring-3 Statistics"],
  },
  {
    section: "Downloads",
    links: ["Marketing Calendar", "SEO Infographics"],
  },
  {
    section: "Social Media",
    links: [
      { name: "Facebook", icon:  faFacebook , link: "/" },
      { name: "Instagram", icon: faInstagram, link: "/" },
      { name: "Twitter", icon:  faTwitter, link: "/" },
      { name: "GitHub", icon:  faGithub, link: "/" },
      { name: "Dribbble", icon: faDribbble, link: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6">
      <img className="mx-5" src="https://themazine.com/html/alquran/assets/images/logo.svg" alt="logo"/>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold mb-4">{section.section}</h3>
            <ul>
              {section.links.map((link, i) => (
                <li key={i} className="mb-2">
                  {link.name ? (
                    <a href={link.link} className="flex items-center space-x-2">
                       <FontAwesomeIcon icon={link.icon} />  
                      <span>{link.name}</span>
                    </a>
                  ) : (
                    <a href="/" className="text-gray-400 hover:text-white">
                      {link}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-6 text-sm text-gray-400">
        &copy; 2025 Your Fawzy Basuony. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
