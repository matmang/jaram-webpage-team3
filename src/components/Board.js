import React from "react";

function Board() {
  return (
    <div className = "container" style={{backgroundColor: "black"}}>
      <div class="top">
        <div>
          <div>
            <h1 class="mt-4 mb-4">그룹 스터디</h1>
            <h3 class="mb-2">
              그룹 스터디에서는 관심있는 사람끼리 모여 서로 연구하는 모임이다.
            </h3>
          </div>
          <div>
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
              id="slidepic"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="./img/test_image/IMG_1439.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="./img/test_image/image13.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="./img/test_image/image12.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <h1 class="mt-4 mb-4" style={{paddingTop: "5rem", textAlign: "center"}}>
              그룹 스터디 게시판
            </h1>
          </div>
        </div>
      </div>
      <ul class="nav justify-content-end" style={{marginTop: "5rem"}}>
        <li>
          <form class="d-flex mb-2 mt-2">
            <input
              class="form-control me-2"
              type="search"
              aria-label="Search"
              style={{
                  textAlign: "center",
                  width: "200px",
                  height: "40px",
                  letterSpacing: "-5px",
                }}
            />
            <button type="button" class="btn btn-outline-secondary">
              검색
            </button>
          </form>
        </li>
      </ul>

      <div class="card" style={{marginBottom: "5rem"}}>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>날짜</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <th>
                  <a href="#">안녕</a>
                </th>
                <th>뽀로로</th>
                <th>20201201</th>
                <th>112</th>
              </tr>
              <tr>
                <th scope="row">2</th>
                <th>
                  <a href="#">굿모닝</a>
                </th>
                <th>크롱</th>
                <th>20210201</th>
                <th>323</th>
              </tr>
              <tr>
                <th scope="row">3</th>
                <th>
                  <a href="#">잘자</a>
                </th>
                <th>루피</th>
                <th>20201231</th>
                <th>123</th>
              </tr>
            </tbody>
          </table>
          <ul class="nav justify-content-end">
            <li>
              <button type="button" class="btn btn-outline-secondary">
                작성
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Board;