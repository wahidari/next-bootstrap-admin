import Head from 'next/head'
import TopNav from "../components/TopNav"
import SideNav from "../components/SideNav"
import Footer from '../components/Footer'
import Image from 'next/image'

export default function NotFound() {

  return (
    <>
      <style jsx>
        {`
          
        `}
      </style>

      <Head>
        <title>404 | Next Bootstrap Admin</title>
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

      <main className="sb-nav-fixed">

        <TopNav />

        <div id="layoutSidenav">

          <SideNav />

          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <h1 className="mt-4">Not Found</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>

                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="text-center mt-2">
                      <Image src="/error-404-monochrome.svg" alt="image" width={300} height={300} />
                      <p className="lead">This requested URL was not found on this server.</p>
                      <a href="#">
                        <i className="fas fa-arrow-left me-1"></i>
                        Return to Dashboard
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </main>

            <Footer />

          </div>
        </div>

      </main>
    </>
  )
}
