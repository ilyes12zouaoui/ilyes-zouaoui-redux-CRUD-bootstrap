import React from "react";
import facebookIcon from "./icons/facebook.png";
import githubIcon from "./icons/github.png";
import linkedInIcon from "./icons/linkedin.png";
import googlePlusIcon from "./icons/google-plus.png";
export default () => {
  return (
    <>
      <div
        className="modal fade"
        id="gmailAddress"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div
              className="modal-body"
              style={{ fontFamily: "sans serif", fontSize: "20px" }}
            >
              email address : ilyes.zouaoui@esprit.tn
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer
        style={{ backgroundColor: "#1c2331", position: "sticky", bottom: 0 }}
        className="page-footer font-small mdb-color pt-4 mt-5"
      >
        <div className="container text-center text-md-left">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left text-secondary">
                © 2019 Copyright : made with 💖 by lass
              </p>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/ilyes.zouaoui11"
                      target="_blank"
                    >
                      <img src={facebookIcon} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/ilyes-zouaoui"
                      target="_blank"
                    >
                      <img src={linkedInIcon} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <img
                      src={googlePlusIcon}
                      data-toggle="modal"
                      data-target="#gmailAddress"
                    />
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/ilyes12zouaoui?tab=repositories"
                      target="_blank"
                    >
                      <img src={githubIcon} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
