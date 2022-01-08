export default function Footer() {
  return (
    <>
      <footer className="py-4 bg-light mt-auto">
        <div className="container-fluid px-4">
          <div className="d-flex align-items-center justify-content-between small">
            <div className="text-muted">Copyright &copy; Your Website 2021</div>
            <div>
              <a className="text-decoration-none me-2" href="#">Privacy Policy</a>
              &middot;
              <a className="text-decoration-none" href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
