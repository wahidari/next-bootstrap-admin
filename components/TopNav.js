import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaUser, FaSearch } from "react-icons/fa"
import MobileNav from "./MobileNav";

export default function TopNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleCloseMobileNav = () => setShowMobileNav(false);
  const handleShowMobileNav = () => setShowMobileNav(true);

  useEffect(() => {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
      });
    }
  }, []);

  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* <!-- Navbar Brand--> */}
        <Link href="/">
          <a className="navbar-brand ps-3">Next Bootstrap Admin</a>
        </Link>
        {/* <!-- Sidebar Toggle on Large Screen--> */}
        {/* <!-- Hide on Medium Screen--> */}
        <button className="d-none d-lg-block btn btn-sm order-1 order-md-0 me-3 me-lg-0 pt-0" id="sidebarToggle" href="#!">
          <i><FaBars /></i>
        </button>
        {/* <!-- Sidebar Toggle on Small Screen--> */}
        {/* <!-- Hide on Large Screen--> */}
        <button className="d-lg-none btn btn-sm order-1 order-lg-0 me-3 me-lg-0 pt-0" href="#!" onClick={handleShowMobileNav}>
          <i><FaBars className="text-white"/></i>
        </button>

        <MobileNav show={showMobileNav} onHide={handleCloseMobileNav} onClose={handleCloseMobileNav}/>

        {/* <!-- Navbar Search--> */}
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
            <button className="btn btn-primary pt-0" id="btnNavbarSearch" type="button"><FaSearch /></button>
          </div>
        </form>
        {/* <!-- Navbar--> */}
        <ul className="navbar-nav ms-auto ms-md-0 me-lg-3">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle pt-1" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FaUser className="text-white" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#!">Settings</a></li>
              <li><a className="dropdown-item" href="#!">Activity Log</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#!">Logout</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}
