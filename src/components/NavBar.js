import React from "react";

function NavBar(props) {
  const onClickHandler = (event) => {
    event.push("/login");
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="./img/jaram_.ico" alt="" width="30" height="24" />
          JARAM
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" style={{ marginLeft: "2rem" }}>
              <a class="nav-link" aria-current="page" href="#introduce">
                자람에 대해...
              </a>
            </li>
            <li class="nav-item dropdown" style={{ marginLeft: "2rem" }}>
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                자람 스터디
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="/Jaram_Homepage/board.html">
                    그룹 스터디
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Jaram_Homepage/seminar.html">
                    세미나
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Jaram_Homepage/jak.html">
                    워크샵
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown" style={{ marginLeft: "2rem" }}>
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                자람 활동
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="/Jaram_Homepage/jak.html">
                    신년회
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Jaram_Homepage/jak.html">
                    체육대회
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Jaram_Homepage/jak.html">
                    엠티
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item" style={{ marginLeft: "2rem" }}>
              <a class="nav-link" href="#footer">
                연락
              </a>
            </li>
          </ul>
          <a class="btn btn-outline-success" href="/login" role="button">
            로그인
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
