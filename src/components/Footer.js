import React from "react";

function Footer() {
  return (
    <>
      <footer id="footer" style={{ backgroundColor: "#465052" }}>
        <h1
          style={{
            textTransform: "uppercase",
            color: "white",
            textAlign: "center",
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
        >
          저희와 만나고 싶으시다면
        </h1>
        <div
          className="container"
          style={{ paddingBottom: "3rem", backgroundColor: "#465052" }}
        >
          <div className="row">
            <div className="col">
              <img
                src="./img/icon/book.svg"
                className="rounded mx-auto d-block"
                alt="..."
                width="150px"
                style={{ backgroundColor: "black" }}
              />
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  paddingTop: "1rem",
                }}
              >
                <h3
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingTop: "1rem",
                  }}
                >
                  이메일 주소
                </h3>
                <p>hyu.cse.jaram@gmail.com</p>
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  paddingTop: "1rem",
                }}
              >
                <img
                  src="./img/icon/github.svg"
                  className="rounded mx-auto d-block"
                  alt="..."
                  width="150px"
                />
                <div
                  className="d-grid gap-2 d-md-block"
                  style={{ marginTop: "2rem" }}
                >
                  <a
                    className="btn btn-outline-primary"
                    href="https://github.com/Jaram"
                    rel="noopener"
                    target="_blank"
                    aria-label="Follow @Jaram on GitHub"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      className="octicon octicon-mark-github"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                    &nbsp;<span>Follow @Jaram</span>
                  </a>
                  <a
                    className="btn btn-outline-primary"
                    href="https://github.com/Jaram2019"
                    rel="noopener"
                    target="_blank"
                    aria-label="Follow @Jaram on GitHub"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      className="octicon octicon-mark-github"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                    &nbsp;<span>Follow @Jaram2019</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  paddingTop: "1rem",
                }}
              >
                학회방
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d561.0731714851948!2d126.83611145002736!3d37.29728684023052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6eed8d3da293%3A0xc7272b92252eb894!2z7JWI7IKw7IucIOyCrDPrj5kg7ZWc7JaR64yA7ZWZ6rWQIOygnDPqs7XtlZnqtIA!5e0!3m2!1sko!2skr!4v1627413152407!5m2!1sko!2skr"
                width="400"
                height="200"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
              <p
                style={{
                  textAlign: "center",
                  color: "white",
                  paddingTop: "1rem",
                }}
              >
                한양대학교 ERICA캠퍼스 제3공학관 지하107호
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
