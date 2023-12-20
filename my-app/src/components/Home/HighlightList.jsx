import { Component } from "react";

const HighlightList = () => {
  const dataobjs = [
    {
      imgSrc: "images/ai1.jpg",
      headline: "바른-GPT",
      script: (
        <>
          GPT기반의 <br />
          생성형 AI기반의 채팅 서비스입니다.
        </>
      ),
      date: "2 days ago",
      likes: 0,
      sub: 0,
      reply: 0,
    },
    {
      imgSrc: "images/ai2.jpg",
      headline: "바른-CODE GPT",
      script: <>코드에 특화된 생성형 AI기반의 채팅 서비스입니다.</>,
      date: "2 days ago",
      likes: 0,
      sub: 0,
      reply: 0,
    },
    {
      imgSrc: "images/ai3.webp",
      headline: "바른 번역기",
      script: (
        <>
          다국어 지원 AI기반의 번역 서비스 <br /> 바른 번역기 입니다.
        </>
      ),
      date: "2 weeks ago",
      likes: 0,
      sub: 0,
      reply: 0,
    },
    {
      imgSrc: "images/ai1.jpg",
      headline: "바른-GPT",
      script: (
        <>
          GPT기반의 <br />
          생성형 AI기반의 채팅 서비스입니다.
        </>
      ),
      date: "2 days ago",
      likes: 0,
      sub: 0,
      reply: 0,
    },
    {
      imgSrc: "images/ai2.jpg",
      headline: "바른-CODE GPT",
      script: <>코드에 특화된 생성형 AI기반의 채팅 서비스입니다.</>,
      date: "2 days ago",
      likes: 0,
      sub: 0,
      reply: 0,
    },
    {
      imgSrc: "images/ai3.webp",
      headline: "바른 번역기",
      script: (
        <>
          다국어 지원 AI기반의 번역 서비스 <br /> 바른 번역기 입니다.
        </>
      ),
      date: "2 weeks ago",
      likes: 0,
      sub: 0,
      reply: 0,
    },
  ];
  return (
    <section className="wrapper">
      <div className="inner">
        <header className="special">
          <h2 className="ai-tit_h2" style={{ fontWeight: "bold" }}>AI Tech</h2>
          <p>BNK 사내 신기술 사례를 소개하는 공간입니다</p>
        </header>

        <div className="highlights">
          {dataobjs.map((dataobj, objIndex) => (
            <section key={objIndex}>
              <div className="content">
                <header>
                  <img className="image" src={dataobj.imgSrc} href="#"></img>
                </header>
                <div className="innerText">
                  <h3 className="ai-tit2" style={{ fontSize: " 26px " }}>{dataobj.headline}</h3>
                  <p className="ai-content2">{dataobj.script}</p>
                  <p className="ai-content2" style={{ color: " #888 " }}>{dataobj.date}</p>
                  <div className="">
                    <button
                      id="likeButton"
                      className="likesButton"
                      //onClick={increaseLikes}
                    >
                      <div className="ai-flex">
                        <div className="ai-ico like_1"></div>
                        <div id="likeCount">{dataobj.likes}</div>
                      </div>
                    </button>
                    <button
                      id="likeButton"
                      className="likesButton"
                      //onClick={increaseLikes}
                    >
                      <div className="ai-flex">
                        <div className="ai-ico like_2"></div>
                        <div id="likeCount">{dataobj.sub}</div>
                      </div>
                    </button>
                    <button
                      id="likeButton"
                      className="likesButton"
                      //onClick={increaseLikes}
                    >
                      <div className="ai-flex">
                        <div className="ai-ico like_3"></div>
                        <div id="likeCount">{dataobj.reply}</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ))}
          {/* <section>
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
          </section> */}
        </div>
      </div>
    </section>
  );
};

export default HighlightList;

class App extends Component {
  state = {
    focused: false
  }
  componentDidMount() {
    this.content.addEventListener('focus', this.focus);
    this.content.addEventListener('blur', this.focus);
  }
  focus = () => {
    this.setState((state) => ({ focused: !state.focused }))
  }
  render() {
    return (
      <div
        ref={content => this.content = content}
        className={['content', this.state.focused && 'content-focused'].join(' ')}
      >
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
    );
  }
}
