import Link from "next/link";
import { useEffect } from "react";
import { FaBars, FaUserAlt, FaSearch } from "react-icons/fa"

export default function LightTopNav() {
  
  useEffect(() => {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      });
    }
  }, []);

  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-light bg-light">
        {/* <!-- Navbar Brand--> */}
        <Link href="/">
          <a className="navbar-brand ps-3">Next Bootstrap Admin</a>
        </Link>
        {/* <!-- Sidebar Toggle--> */}
        <button className="btn btn-sm order-1 order-lg-0 me-4 me-lg-0 pt-0" id="sidebarToggle" href="#!">
          <i><FaBars /></i>
        </button>
        {/* <!-- Navbar Search--> */}
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
            <button className="btn btn-primary pt-0" id="btnNavbarSearch" type="button"><FaSearch /></button>
          </div>
        </form>
        {/* <!-- Navbar--> */}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle pt-1" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FaUserAlt className="me-1" /></a>
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
