import Head from 'next/head'
import TopNav from "../components/TopNav"
import SideNav from "../components/SideNav";
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Chart() {

  return (
    <>
      <style jsx>
        {`
          
        `}
      </style>

      <Head>
        <title>Chart | Next Bootstrap Admin</title>
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
                <h1 className="mt-4">Charts</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a className="text-decoration-none">Dashboard</a>
                    </Link>  
                  </li>
                  <li className="breadcrumb-item active">Charts</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-body">
                    Chart.js is a third party plugin that is used to generate the charts in this template. The charts below have been customized - for further customization options, please visit the official
                    <a target="_blank" rel="noreferrer" href="https://www.chartjs.org/docs/latest/" className="text-decoration-none"> Chart.js documentation</a>
                    .
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-area me-1"></i>
                    Area Chart Example
                  </div>
                  <div className="card-body"><canvas id="myAreaChart" width="100%" height="30"></canvas></div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card mb-4">
                      <div className="card-header">
                        <i className="fas fa-chart-bar me-1"></i>
                        Bar Chart Example
                      </div>
                      <div className="card-body"><canvas id="myBarChart" width="100%" height="50"></canvas></div>
                      <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card mb-4">
                      <div className="card-header">
                        <i className="fas fa-chart-pie me-1"></i>
                        Pie Chart Example
                      </div>
                      <div className="card-body"><canvas id="myPieChart" width="100%" height="50"></canvas></div>
                      <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
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
