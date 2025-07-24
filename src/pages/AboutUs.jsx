export default function AboutUs() {
  return (
    <main className="page-content">
      <div className="p-5 h-100 bg-tansparent d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="container-fluid py-5 text-white front-page-content">
            <h1 className="display-5 fw-bold mb-5">Contact Us</h1>
            <div className="row justify-content-center align-items-center g-2">
              <div className="col">
                <p className="col-md-8 fs-4">
                  Find us at our headquarters or reach out via email.
                </p>
              </div>
              <div className="col">
                <p className="col-md-8 fs-4">
                  <strong>Address:</strong> 123 ShopVerse Lane, Commerce City,
                  CA 90210
                </p>
              </div>
              <div className="col">
                <p className="col-md-8 fs-4">
                  <strong>contact@shopverse.com</strong>
                </p>
                <p className="col-md-8 fs-4">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://picsum.photos/1920/1080"
        alt="Background Image"
        className="background-image"
      />
    </main>
  );
}
