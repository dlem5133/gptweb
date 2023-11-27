const Highlight = () => {
  return (
    <section className="wrapper">
      <div className="inner">
        <header className="special">
          <h2 style={{ fontWeight: "bold" }}>AI Tech</h2>
          <p>BNK 사내 신기술 사례를 소개하는 공간입니다</p>
        </header>
        <div className="highlights">
          <section>
            <div className="content">
              <header>
                <img className="image" src="images/ai1.jpg" href="#"></img>
              </header>
              <div className="innerText">
                <h3>바른-GPT</h3>
                <p>
                  GPT기반의 <br />
                  생성형 AI기반의 채팅 서비스입니다.
                </p>
                <p>2 days ago</p>
                <button
                  id="likeButton"
                  className="likesButton"
                  //onClick={increaseLikes}
                >
                  Likes <span id="likeCount">0</span>
                </button>
                <button
                  id="likeButton"
                  className="likesButton"
                  //onClick={increaseLikes}
                >
                  Sub <span id="likeCount">0</span>
                </button>
                <button
                  id="likeButton"
                  className="likesButton"
                  //onClick={increaseLikes}
                >
                  reply <span id="likeCount">0</span>
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className="content">
              <header>
                <img className="image" src="images/ai2.jpg" href="#"></img>
              </header>
              <div className="innerText">
                <h3>바른-Code GPT</h3>
                <p>코드에 특화된 생성형 AI기반의 채팅 서비스입니다.</p>
                <p>2 days ago</p>
                <button
                  id="likeButton"
                  className="likesButton"
                  //onClick={increaseLikes}
                >
                  Likes <span id="likeCount">0</span>
                </button>
                <button
                  id="likeButton"
                  className="likesButton"
                  //onClick={increaseLikes}
                >
                  Sub <span id="likeCount">0</span>
                </button>
                <button
                  id="likeButton"
                  className="likesButton"
                  //onClick={increaseLikes}
                >
                  reply <span id="likeCount">0</span>
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className="content">
              <header>
                <img className="image" src="images/ai3.webp" href="#"></img>
              </header>
              <div className="innerText">
                <h3>바른 번역기</h3>
                <p>
                  다국어 지원 AI기반의 번역 서비스 <br /> 바른 번역기 입니다
                </p>
                <p>2 weeks ago</p>
                <button
                  id="likeButton"
                  className="likesButton"
                  //onClick={increaseLikes}
                >
                  Likes <span id="likeCount">0</span>
                </button>
                <button
                  id="likeButton"
                  className="likesButton"
                  //onClick={increaseLikes}
                >
                  Sub <span id="likeCount">0</span>
                </button>
                <button
                  id="likeButton"
                  className="likesButton"
                  //onClick={increaseLikes}
                >
                  reply <span id="likeCount">0</span>
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className="content">
              <header>
                <a href="#" className="icon fa-line-chart">
                  <span className="label">Icon</span>
                </a>
                <h3>Interdum gravida</h3>
              </header>
              <p>
                Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing
                gravida odio porttitor sem non mi integer non faucibus.
              </p>
            </div>
          </section>
          <section>
            <div className="content">
              <header>
                <a href="#" className="icon fa-paper-plane-o">
                  <span className="label">Icon</span>
                </a>
                <h3>Faucibus consequat</h3>
              </header>
              <p>
                Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing
                gravida odio porttitor sem non mi integer non faucibus.
              </p>
            </div>
          </section>
          <section>
            <div className="content">
              <header>
                <a href="#" className="icon fa-qrcode">
                  <span className="label">Icon</span>
                </a>
                <h3>Accumsan viverra</h3>
              </header>
              <p>
                Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing
                gravida odio porttitor sem non mi integer non faucibus.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
