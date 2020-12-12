import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                Vshare is a simple solution for the teachers and students of VIT
                to come near. With simple steps teacher can upload notes and
                students can use it.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Tech Stack </h6>
              <ul class="footer-links">
                <li>Express.js</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>MongoDB</li>
                <li>Bootstrap</li>
              </ul>
            </div>            
          </div>
          <hr />
        </div>
      </footer>
    </React.Fragment>
  );
}
