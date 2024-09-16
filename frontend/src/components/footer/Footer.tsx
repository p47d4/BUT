import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "10vh",
          maxHeight: "30vh",
          marginTop: 60,
          // display: "flex",
          // justifyContent: "center",
        }}
      >
         <img
          src="bazelogo.png"
          alt="baze"
          width={"100px"}
          height={"100px"}
          className="image-inverted-logo"
        />
        <p style={{ fontSize: "20px", textAlign: "center", padding: "10px" }}>
          Built by Ammar Baba-Ahmed for
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://bazeuniversity.edu.ng"}
            >
              BAZE University
            </Link>
          </span>
          🙌
        </p>
      </div>
    </footer>
  );
};

export default Footer;
