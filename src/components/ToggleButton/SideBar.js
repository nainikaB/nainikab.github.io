import React from "react";

import { Link } from "react-scroll";

const SideBar = (props) => (
  <nav className="sidebar">
    <ul>
      <li>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="projects-page"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="footer"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);
export default SideBar;
