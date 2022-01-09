import Head from 'next/head'
import TopNav from "../components/TopNav"
import SideNav from "../components/SideNav"
import Footer from '../components/Footer'

export default function Forgot() {

  return (
    <>
      <style jsx>
        {`
          
        `}
      </style>

      <Head>
        <title>Forgot Password | Next Bootstrap Admin</title>
        <meta name="description" content="Next Bootstrap" />
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://next-bootstrapp.vercel.app/" />
        <meta property="og:title" content="Next Bootstrap" />
        <meta property="og:description" content="Next Bootstrap" />
        <meta property="og:image" content="https://next-bootstrapp.vercel.app/metalogo.png"></meta>
      </Head>

      <body className="sb-nav-fixed">

        <TopNav />

        <div id="layoutSidenav">

          <SideNav />

          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <h1 className="mt-4">Forgot Password</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>

                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="card shadow border-0 rounded-lg mb-4">
                      <div className="card-header"><h3 className="text-center font-weight-light my-2">Password Recovery</h3></div>
                      <div className="card-body">
                        <div className="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
                        <form>
                          <div className="form-floating mb-3">
                            <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                            <label htmlFor="inputEmail">Email address</label>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <a className="small" href="login.html">Return to login</a>
                            <a className="btn btn-primary" href="login.html">Reset Password</a>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center py-3">
                        <div className="small"><a href="#">Have an account? Go to login</a></div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </main>

            <Footer />

          </div>
        </div>

      </body>
    </>
  )
}
