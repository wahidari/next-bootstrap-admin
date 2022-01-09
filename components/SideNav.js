import Link from "next/link"
import { FaTachometerAlt, FaAngleDown, FaColumns, FaBookOpen, FaChartArea, FaTable } from "react-icons/fa"
import ActiveLink from "./ActiveLink"

export default function SideNav() {
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav className="sb-sidenav sb-sidenav-dark">
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <ActiveLink activeClassName="active" href="/">
                <a className="nav-link">
                  <FaTachometerAlt className="me-2" />
                  Dashboard
                </a>
              </ActiveLink>
              <div className="sb-sidenav-menu-heading">Interface</div>
              <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                <FaColumns className="me-2" />
                Layouts
                <div className="sb-sidenav-collapse-arrow"><FaAngleDown /></div>
              </a>
              <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav">
                  <ActiveLink activeClassName="active" href="/light-sidenav">
                    <a className="nav-link">
                      Light Theme
                    </a>
                  </ActiveLink>
                </nav>
              </div>
              <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                <FaBookOpen className="me-2" />
                Pages
                <div className="sb-sidenav-collapse-arrow"><FaAngleDown /></div>
              </a>
              <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                  <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                    Authentication
                    <div className="sb-sidenav-collapse-arrow"><FaAngleDown /></div>
                  </a>
                  <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                    <nav className="sb-sidenav-menu-nested nav">
                      <ActiveLink activeClassName="active" href="/login">
                        <a className="nav-link">
                          Login
                        </a>
                      </ActiveLink>
                      <ActiveLink activeClassName="active" href="/register">
                        <a className="nav-link">
                          Register
                        </a>
                      </ActiveLink>
                      <ActiveLink activeClassName="active" href="/forgot">
                        <a className="nav-link">
                          Forgot Password
                        </a>
                      </ActiveLink>
                    </nav>
                  </div>
                  <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                    Error
                    <div className="sb-sidenav-collapse-arrow"><FaAngleDown /></div>
                  </a>
                  <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                    <nav className="sb-sidenav-menu-nested nav">
                      <ActiveLink activeClassName="active" href="/404">
                        <a className="nav-link">
                          404 Page
                        </a>
                      </ActiveLink>
                      <ActiveLink activeClassName="active" href="/500">
                        <a className="nav-link">
                          500 Page
                        </a>
                      </ActiveLink>
                    </nav>
                  </div>
                </nav>
              </div>
              <div className="sb-sidenav-menu-heading">Addons</div>
              <ActiveLink activeClassName="active" href="/chart">
                <a className="nav-link">
                  <FaChartArea className="me-2" />
                  Charts
                </a>
              </ActiveLink>
              <ActiveLink activeClassName="active" href="/table">
                <a className="nav-link">
                  <FaTable className="me-2" />
                  Tables
                </a>
              </ActiveLink>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Start Bootstrap
          </div>
        </nav>
      </div>
    </>
  )
}
