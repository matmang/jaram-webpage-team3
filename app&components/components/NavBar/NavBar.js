import React from 'react'

function NavBar(props) {
    const onClickHandler = (event) => {
        event.push("/login")
    }
return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/Jaram_Homepage/index.html">
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
            <li class="nav-item" style={{marginLeft: '2rem'}}>
              <a
                class="nav-link"
                aria-current="page"
                href="#"
                >자람에 대해...</a
              >
            </li>
            <li class="nav-item dropdown" style={{marginLeft: '2rem'}}>
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
                  <a class="dropdown-item" onClick={onClickHandler}
                    >그룹 스터디</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >세미나</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >워크샵</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown" style={{marginLeft: '2rem'}}>
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
                  <a class="dropdown-item" href="#"
                    >신년회</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >체육대회</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >엠티</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item" style={{marginLeft: '2rem'}}>
              <a class="nav-link" href="#">연락</a>
            </li>
          </ul>
          <form class="d-flex">
            <button
              class="btn"
              onclick="location.href='/user/login'"
            >
              로그인
            </button>
            <button
              class="btn"
              onclick="location.href='#'"
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
    </nav>
    
    )
}

export default NavBar
    
    