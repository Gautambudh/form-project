import PhoneInput from "./CountryCode";
function Form() {

  // var input = document.querySelector("#phone");
  // window.intlTelInput(input, {
  //     // show dial codes too
  //     separateDialCode: true,
  //     // If there are some countries you want to show on the top.
  //     // here we are promoting russia and singapore.
  //     preferredCountries: ["ru", "sg"],
  //     //Default country
  //     initialCountry:"sg",
  //     // show only these countres, remove all other
  //     onlyCountries: ["ru", "cn","pk", "sg", "my", "bd"],
  //     // If there are some countries you want to execlde.
  //     // here we are exluding india and israel.
  //     excludeCountries: ["in","il"]
  // });

    return (
      <>
        {/* <!-- form section -->  */}
          <section className="form-section col-12 col-sm-12 col-lg-5 mx-lg-auto">
            <h1 className="my-lg-4 px-lg-3 h3">Contact our Sales team</h1>
            <div className="row p-3 g-4 ">
                <div className="col-12 col-lg-6 px-3">
                    <label className="form-label">First Name<span className="required mx-1">*</span></label>
                    <input type="text" className="form-control" id="fname" name="fname" required />
                    {/* <!-- <div className="required-field-message">Required field</div> --> */}
                </div>
                <div className="col-12 col-lg-6 px-3">
                    <label className="form-label">Last Name<span className="required mx-1">*</span></label>
                    <input type="text" className="form-control" id="fname" name="fname" required />
                    {/* <!-- <div className="required-field-message">Required field</div> --> */}
                </div>
                
                <div className="col-12 col-lg-6 px-3">
                    <label className="form-label">Work Email<span className="required mx-1">*</span></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    {/* <!-- <div className="required-field-message">Required field</div> --> */}
                </div>
                <div className="col-12 col-lg-6 px-3">
                    <label className="form-label">Job Title</label>
                    <input type="text" className="form-control" id="fname" name="fname" />
                     {/* <div className="required-field-message">Required field</div>  */}
                </div>

                
                <label htmlFor="country-code-select">Phone Number</label>
                <PhoneInput />
                

                {/* <div className="col-12 col-lg-12">
                    <label className="form-label">Phone Number<span className="required mx-1">*</span></label>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" 
                        aria-expanded="false">Dropdown</button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                    <input className="form-control" name="phone" type="text" id="phone"/>
                    </div>
                  </div> */}
                
                  <div className="col-12 col-lg-6 px-3" >
                    <label className="form-label">Company name<span className="required mx-1">*</span></label>
                    <input type="email" className="form-control" />
                    {/* <!-- <div className="required-field-message">Required field</div> --> */}
                </div>
                <div className="col-12 col-lg-6 px-3">
                    <label className="form-label">Company size<span className="required mx-1">*</span></label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Please select</option>
                        <option value="1">1-19</option>
                        <option value="2">20-49</option>
                        <option value="3">50-99</option>
                        <option value="1">100-250</option>
                        <option value="2">251-1500</option>
                        <option value="3">1500+</option>
                      </select>
                    {/* <!-- <div className="required-field-message">Required field</div> --> */}
                </div>
                <div className="mb-3">
                    <label className="form-label">How can our team help you?</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" 
                    placeholder="Tell us more about your team and what work you'd like to manage with monday.com"></textarea>
                </div>
                <div className="privacy-poloicy text-center px-lg-5">
                    <p className="">By clicking submit, I acknowledge receipt of the monday.com <a href="#">privacy policy</a> </p>
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 rounded-pill my-lg-3">Submit</button>
                </div>
              </div>
            </section>
      </>
    );
  }
  
  export default Form;