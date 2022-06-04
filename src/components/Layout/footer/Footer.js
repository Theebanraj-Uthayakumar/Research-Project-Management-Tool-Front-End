import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <h3 style={{ color: "#fff" }}>
            Massachusetts Institute of Technology (MIT)
          </h3>
          <p>
            While MIT is perhaps best known for its programs in engineering and
            the physical sciences, other areas—notably economics, political
            science, urban studies, linguistics, and philosophy—are also strong.
            Admission is extremely competitive, and undergraduate students are
            often able to pursue their own original research.
          </p>
        </div>
        <div className="footer-bottom">
          <p>
            copyright &copy;{" "}
            <a href="#">Massachusetts Institute Of Technology (MIT)</a>{" "}
          </p>
          <div className="footer-menu">
            <ul className="f-menu">
              {/* <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li> */}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
