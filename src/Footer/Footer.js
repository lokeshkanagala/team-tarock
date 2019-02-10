import React from "react";
import "./Footer.scss";

export const FooterTemplate = ({ footerData }) => {
  const { logoImage, socialLinks } = footerData;

  return (
    <nav className="footer">
      <div className="footer-container  container">
        <div className="footer-top">
          <div className="footer-about">
            <h4 className="footer-aboutTitle">
              <img
                className="footer-aboutTitleImg"
                src={logoImage.url}
              />
            </h4>
            <p className="footer-aboutDescription">{logoImage.tagline}</p>
          </div>
          {socialLinks.length > 0 && (
            <ul className="footer-socialMenu">
              {socialLinks.map(socialLink => (
                <li key={socialLink.linkUrl} className="footer-socialMenuItem">
                  <a
                    className="footer-socialLink"
                    href={socialLink.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="footer-socialLinkIcon"
                      src={socialLink.image}
                    />
                    {socialLink.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

const Footer = (props) => {
  if (!props.footerData) {
    return null;
  }
  return <FooterTemplate footerData={props.footerData} />;
};

export default Footer;