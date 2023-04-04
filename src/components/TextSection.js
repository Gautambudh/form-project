function TextSection() {
    return (
      <>
        <section class="text-section col-12 col-sm-12 col-lg-6 mx-auto px-lg-3">
            <h1 class="fw-bold h2 text-body-emphasis lh-2 my-lg-4">Align, collaborate and gain visibility into your work in one connected space</h1>
            <div class="d-flex g-lg-1 align-items-center justify-content-space-between mx-lg-3">
                <icon class="m-3 icon text-center">
                    <img src="../images/countries_icon.png" alt="icon" />
                    <p class="fw-light">Across <span class="fw-bold">200+ </span>countries</p>
                </icon>
                <p class="lh-base fw-light px-lg-5">Meet with a product consultant to see how monday.com can fit your exact business needs</p>
            </div>
            <div class="d-flex g-lg-1 align-items-center mx-lg-3">
                <icon class="m-3 icon text-center">
                    <img src="../images/customers_icon.png" alt="icon" />
                    <p class="fw-light"><span class="fw-bold">180K+</span> paying customers</p>
                </icon>
                <p class="lh-base fw-light px-lg-5">Explore our tailored pricing plans based on your goals and priorities</p>
            </div>
            <div class="d-flex g-lg-1 align-items-center mx-lg-3">
                <icon class="m-3 icon text-center">
                    <img src="../images/industries_icon.png" alt="icon" />
                    <p class="fw-light">Serving <span class="fw-bold">200+</span> industries</p>
                </icon>
                <p class="lh-base fw-light px-lg-5">Boost productivity from day one by building your team's ideal workflow</p>
            </div>
            <p class="fw-light">For general questions visit our <a href="#">Help Center</a></p>
            <div class="light-text p-lg-4 my-lg-2">
                <p class="fw-normal h5 lh-base">“monday.com Work OS saves us about 1,850 hrs of staff time and somewhere in the range of $50,000 a month.”</p>
                <p class="fw-normal fs-6 my-lg-4">Stefana Muller | Senior Director, CTO Product and Program Office | Oscar</p>
            </div>

            <logosection className="logo-sec mx-lg-2 my-lg-5 d-flex align-items-center justify-content-between">
                <img src="../images/wix.png" alt="wix" />
                <img src="../images/genpact.png" alt="genpact" />
                <img src="../images/mars_wrigley.png" alt="mars_wrigley" />
                <img src="../images/canva.png" alt="canva" />
                <img src="../images/coca_cola.png" alt="coca_cola" />
            </logosection>
          </section>
      </>
    );
  }
  
  export default TextSection;
  