import "bootstrap/dist/css/bootstrap.min.css";
import "./Navibar.css";

function Footer() {
  return (
    <footer className="container text-center text-lg-start bg-body-tertiary text-muted">
      <div className="row">
        <div className="col">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-2">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
                  <h6 className="text-uppercase fw-bold mb-2">
                    <i className="fas fa-gem me-3"></i>YourBook.com
                  </h6>
                  <p>
                    YourBook is the biggest store books in the world with more
                    than 1000 store around the globe
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
                  <h6 className="text-uppercase fw-bold mb-2">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Laravel
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
                  <h6 className="text-uppercase fw-bold mb-2"></h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
                  <h6 className="text-uppercase fw-bold mb-2">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-2" style={{ backgroundColor: "white" }}>
            © 2024 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
