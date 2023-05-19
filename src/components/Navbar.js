import { useState, useRef } from 'react';
import useOnClickOutside from '../useOnClickOutside';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  useOnClickOutside(dropdown, ref, () => setDropdown(false));
  return (
    <nav>
      <ul className="nav-ul">
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          <button type="button" className="contact-btn" onClick={() => setDropdown((prev) => !prev)}>
            Contact Us
            <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul className="nav-ul2">
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
