import React from "react";

function Introduce() {
  return (
    <>
      <section id="introduce">
        <h1 class="introtitle">안녕하세요!</h1>
        <p class="introsubtitle">
          자람은 한양대학교 ERICA 캠퍼스 소프트웨어융합대학 전공 학회로 1984년에
          시작해 올해로 35주년을 맞이하였습니다.
        </p>
      </section>
      <section id="list" class="">
        <div class="bgcolors">
          <h1
            style={{
              textAlign: "center",
              paddingTop: "5rem",
              paddingBottom: "5rem",
              color: "white",
              fontSize: "30px",
            }}
          >
            자람은 기초부터 전문 능력까지 기를 수 있는 학회입니다.
          </h1>
          <p
            style={{
            textAlign: "center",
            color: "white",
            fontSize: "20px",
            paddingBottom: "5rem",
            lineHeight: "2",
          }}
          >
            대학교에 진학할때부터 관심분야를 정확히 정하고 오거나 잘하는 사람은
            많지 않습니다.
            <br />
            자람은 세미나를 통해 다양한 분야를 접할 수 있도록 하여 관심분야를
            정하는데 도움을 주고,
            <br />
            관심분야가 정해진 친구들은 스터디를 꾸려 그 분야를 더 깊게 공부할 수
            있도록 체계가 이루어져 있습니다.
            <br />
            또한 매 학기 방학 워크샵을 개최해 한가지 주제에 대해 함께, 그리고
            깊이 공부하며
            <br />
            프로그래밍 능력과 전공분야에 대한 소양을 기릅니다.
            <br />
          </p>
          <div class="card mb-3" style={{maxWidth : "50%"}} id="cardss">
            <div class="row g-0">
              <a
                class="col-md-4"
                href="/board"
              >
                <img
                  src="./img/icon/science.svg"
                  class="img-fluid rounded-start"
                  alt="..."
                  id="cardimg"
                />
              </a>
              <div class="col-md-8" id="piccard">
                <div class="card-body">
                  <h5 class="card-title">그룹 스터디</h5>
                  <p class="card-textr">관심있는 주제에 대해 그룹별로 진행</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="card mb-3"
            style={{maxWidth: "50%", marginTop: "3rem", marginLeft: "47%"}}
            id="cardss"
          >
            <div class="row g-0">
              <div class="col-md-8" id="piccard">
                <div class="card-body">
                  <h5 class="card-title">세미나</h5>
                  <p class="card-textr">주 1회 진행</p>
                </div>
              </div>
              <div
                class="col-md-4"
                onclick="location.href='/Jaram_Homepage/seminar.html'"
              >
                <img
                  src="./img/icon/presentation.svg"
                  class="img-fluid rounded-start"
                  alt="..."
                  id="cardimg"
                />
              </div>
            </div>
          </div>

          <div
            class="card mb-3"
            style={{maxWidth: "50%", marginTop: "3rem"}}
            id="cardss"
          >
            <div class="row g-10">
              <div
                class="col-md-4"
                onclick="location.href='/Jaram_Homepage/jak.html'"
              >
                <img
                  src="./img/icon/pacman.svg"
                  class="img-fluid rounded-start"
                  alt="..."
                  id="cardimg"
                />
              </div>
              <div class="col-md-8" id="piccard">
                <div class="card-body">
                  <h5 class="card-title">워크샵</h5>
                  <p class="card-textr">연중 2회 진행</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bgcolors2">
          <h1
            style={{
            textAlign: "center",
            paddingTop: "5rem",
            paddingBottom: "5rem",
            color: "white",
            fontSize: "30px"
          }}
          >
            자람은 관계를 중요시하는 학회입니다.
          </h1>
          <p
            style={{
            textAlign: "center",
            color: "white",
            fontSize: "20px",
            paddingBottom: "5rem",
          }}
          >
            자람은 선배와 후배 구분 없이 모든 학회원들이 가깝게 지낼 수 있도록
            하기 위해 여러가지 활동을 하고 있습니다.
            <br />
            학기 초에는 엠티를 통해 새로 가입한 학회원과 재학생 사이의 어색함을
            덜고
            <br />
            체육대회를 통해서 학회원들이 같이 땀을 흘리면서 모두가 친해질 수
            있도록 노력하고 있습니다.
            <br />
            또한 매년 신년회를 통해서 이미 졸업한 선배와 후배가 소통할 수 있는
            공간을 마련하여
            <br />
            자람 가족의 관계가 계속될 수 있도록 하고 있습니다
          </p>
          <div class="card mb-3" style={{maxWidth: "50%"}} id="cardss">
            <div class="row g-0">
              <div
                class="col-md-4"
                onclick="location.href='/Jaram_Homepage/jak.html'"
              >
                <img
                  src="./img/icon/fireworks.svg"
                  class="img-fluid rounded-start"
                  alt="..."
                  id="cardimg"
                />
              </div>
              <div class="col-md-8" id="piccard">
                <div class="card-body">
                  <h5 class="card-title">신년회</h5>
                  <p class="card-textr">매년 1학기 개강 전에 진행</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="card mb-3"
            style={{maxWidth: "50%", marginTop: "3rem", marginLeft: "47%"}}
            id="cardss"
          >
            <div class="row g-0">
              <div class="col-md-8" id="piccard">
                <div class="card-body">
                  <h5 class="card-title">체육대회</h5>
                  <p class="card-textr">여름 또는 가을에 진행</p>
                </div>
              </div>
              <div
                class="col-md-4"
                onclick="location.href='/Jaram_Homepage/jak.html'"
              >
                <img
                  src="./img/icon/olympic-games.svg"
                  class="img-fluid rounded-start"
                  alt="..."
                  id="cardimg"
                />
              </div>
            </div>
          </div>

          <div
            class="card mb-3"
            style={{maxWidth: "50%", marginTop: "3rem"}}
            id="cardss"
          >
            <div class="row g-0">
              <div
                class="col-md-4"
                onclick="location.href='/Jaram_Homepage/jak.html'"
              >
                <img
                  src="./img/icon/campfire.svg"
                  class="img-fluid rounded-start"
                  alt="..."
                  id="cardimg"
                />
              </div>
              <div class="col-md-8" id="piccard">
                <div class="card-body">
                  <h5 class="card-title">엠티</h5>
                  <p class="card-textr">연중 2회 진행</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Introduce;
