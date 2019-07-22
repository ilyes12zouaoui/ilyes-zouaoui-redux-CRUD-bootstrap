import React from "react";
export default () => {
  return (
    <footer
      style={{
        backgroundColor: "#1c2331",
        position: "sticky",
        bottom: "0"
      }}
      class="page-footer font-small  mdb-color pt-4 mt-5 "
    >
      <div class="container text-center text-md-left">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-lg-8">
            <p class="text-center text-md-left text-secondary">
              © 2019 Copyright : made with 💖 by lass
            </p>
          </div>
          <div class="col-md-5 col-lg-4 ml-lg-0">
            <div class="text-center text-md-right">
              <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                  <a
                    href="https://www.facebook.com/ilyes.zouaoui11"
                    target="_blank"
                  >
                    <img src="/img/icons/facebook.png" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/ilyes-zouaoui"
                    target="_blank"
                  >
                    <img src="/img/icons/linkedin.png" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <img
                    src="/img/icons/google-plus.png"
                    data-toggle="modal"
                    data-target="#gmailAddress"
                  />
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://github.com/ilyes12zouaoui?tab=repositories"
                    target="_blank"
                  >
                    <img src="/img/icons/github.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="gmailAddress"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div
              class="modal-body"
              style={{ fontFamily: "sans serif", fontSize: "20px" }}
            >
              email address : ilyes.zouaoui@esprit.tn
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
