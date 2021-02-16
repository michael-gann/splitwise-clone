import { useState, useEffect } from "react";

import "./Footer.css";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("mchlgnn@protonmail.com");
    setShow(!show);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <div className="footer">
      <div className="footer-blocks">
        <div className="social-profiles">
          <a
            href="https://github.com/michael-gann"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/michael-gann-1a2161201/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a onClick={handleClick} href="/">
            <div className={show ? "copied" : "copied hidden"}>
              Email copied!
            </div>
            <i class="far fa-envelope"></i>
          </a>
          <a
            href="https://angel.co/u/michael-gann-1"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-angellist"></i>
          </a>
        </div>
        <div className="me">
          <div>&copy; 2021 Michael Gann</div>
        </div>
        <div className="portfolio-site">
          <div>
            <a
              href="https://michael-gann.github.io/michael-gann.github.io/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
