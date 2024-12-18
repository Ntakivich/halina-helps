import React from "react";
import { Button } from "reactstrap";
import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.email && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="white"
          rel="noopener"
          aria-label="URL"
          href={socialLinks.email}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-envelope" />
          </span>
        </Button>
      )}
      {socialLinks.telegram && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="github"
          href={socialLinks.telegram}
          rel="noopener"
          aria-label="Telegram"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-telegram" />
          </span>
        </Button>
      )}
      {socialLinks.instagram && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="instagram"
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-instagram" />
          </span>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;
