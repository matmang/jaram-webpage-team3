import React from 'react'

function Introduce() {
    return (
    <section id="introduce">
      <div class="p-3 mb-2 bg-primary bg-gradient text-white">
        <h1 style={{textAlign: 'center', marginTop:'5rem'}}>자람 스터디</h1>
        <div class="card-group" style={{marginTop: '5rem'}}>
          <div
            class="card bg-primary bg-gradient md-3"
            onclick="location.href='#'"
          >
            <img src="./img/icon/science.svg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">그룹 스터디</h5>
            </div>
          </div>
          <div
            class="card bg-primary bg-gradient"
            onclick="location.href='#'"
          >
            <img
              src="./img/icon/presentation.svg"
              class="card-img-top"
              alt="..."
            />

            <div class="card-body">
              <h5 class="card-title">세미나</h5>
            </div>
          </div>
          <div
            class="card bg-primary bg-gradient"
            onclick="location.href='#'"
          >
            <img src="./img/icon/pacman.svg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">워크샵</h5>
            </div>
          </div>
        </div>
        <h1 style={{textAlign: 'center', marginTop:'5rem'}}>자람 친목 활동</h1>
        <div class="card-group" style={{marginTop: '5rem', marginBottom: '5rem'}}>
          <div
            class="card bg-primary bg-gradient md-3"
            onclick="location.href='#'"
          >
            <img
              src="./img/icon/fireworks.svg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">신년회</h5>
            </div>
          </div>
          <div
            class="card bg-primary bg-gradient"
            onclick="location.href='#'"
          >
            <img
              src="./img/icon/olympic-games.svg"
              class="card-img-top"
              alt="..."
            />

            <div class="card-body">
              <h5 class="card-title">체육대회</h5>
            </div>
          </div>
          <div
            class="card bg-primary bg-gradient"
            onclick="location.href='#'"
          >
            <img src="./img/icon/campfire.svg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">엠티</h5>
            </div>
          </div>
        </div>
      </div>
    </section>    
    )
}

export default Introduce