import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    // 컴포넌트가 마운트된 후에 실행되는 부분
    if (videoRef.current) {
      videoRef.current.autoplay = true;
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;

      videoRef.current.play(); // 비디오 자동 재생
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:5000/posts");
    setPosts(response.data);
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     console.log(title);
  //     console.log(content);
  //     await axios
  //       .post("http://localhost:5000/posts", { title, content })
  //       .catch((error) => console.log(error));
  //     setTitle("");
  //     setContent("");
  //     fetchPosts();
  //   };

  const handleSubmit = async () => {
    try {
      const postData = {
        title: title, // 실제 데이터로 대체해야 합니다
        content: content, // 실제 데이터로 대체해야 합니다
      };
      fetch(`http://localhost:5000/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      setTitle("");
      setContent("");
      fetchPosts();
    } catch (error) {
      console.error("게시글 생성 요청 실패:", error);
      // 요청 실패 시 에러 처리
    }
  };

  // 게시글 삭제
  const deletePost = (postId) => {
    fetch(`http://localhost:5000/posts/${postId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        // 성공적으로 삭제된 후에 새로운 게시글 목록을 가져옵니다.
        fetch("/posts")
          .then((response) => response.json())
          .then(async () => await fetchPosts())
          .catch((error) =>
            console.error(
              "게시글을 다시 불러오는 중 오류가 발생했습니다: ",
              error
            )
          );
      })
      .catch((error) =>
        console.error("게시글 삭제 중 오류가 발생했습니다: ", error)
      );
  };

  //   const [likes, setLikes] = useState(0);

  //   const increaseLikes = () => {
  //     const updatedLikes = likes + 1;
  //     setLikes(updatedLikes);
  //   };

  return (
    <div>
      <header id="header">
        <a className="logo" href="index.html">
          BNK-AI-LAB
        </a>
        <nav>
          <a href="#menu">Menu</a>
        </nav>
      </header>
      {/* Nav */}
      <nav id="menu">
        <ul className="links">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="elements.html">Elements</a>
          </li>
          <li>
            <a href="generic.html">Generic</a>
          </li>
        </ul>
      </nav>
      {/* Banner */}
      <section id="banner">
        <div className="inner">
          <h1>BNK AI LAB</h1>
          <p>"AI will not replace you, A person using AI will"</p>
        </div>
        <video ref={videoRef} src="images/banner.mp4"></video>
      </section>
      {/* Highlights */}
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
      <section className="wrapper">
        <div className="inner text-center">
          <h2 style={{ textAlign: "center" }}>AI News</h2>

          {/* CTA */}

          <div className="tb1 container" style={{ height: "50rem" }}>
            <div className="inner">
              <div className="col-xs-12">
                <table
                  summary="This table shows how to create responsive tables using Datatables' extended functionality"
                  className="table table-bordered table-hover dt-responsive"
                >
                  <caption className="text-center">
                    최신 AI 기술이 반영된 세미나 자료를 소개하는 게시판입니다
                  </caption>
                  <caption style={{ textAlign: "right" }}>
                    <button className="button small">작성</button>
                  </caption>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>제목</th>
                      <th>등록자</th>
                      <th>등록일</th>
                      <th>조회수</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post) => (
                      <tr>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>41,803,125</td>
                        <td>31.3</td>
                        <td>
                          <button className="button small">수정</button>
                          <button
                            className="button small"
                            onClick={() => {
                              deletePost(post.id);
                            }}
                          >
                            삭제
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5" className="text-center">
                        Data retrieved from{" "}
                        <a
                          href="http://www.infoplease.com/ipa/A0855611.html"
                          target="_blank"
                        >
                          infoplease
                        </a>{" "}
                        and{" "}
                        <a
                          href="http://www.worldometers.info/world-population/population-by-country/"
                          target="_blank"
                        >
                          worldometers
                        </a>
                        .
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="내용"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit">게시글 작성</button>
          </form>

          <p className="p">Demo by 디지털금융개발부</p>
        </div>
      </section>
      {/* Footer */}
      <footer id="footer">
        <div className="inner">
          <div className="content">
            <section>
              <h3>Accumsan montes viverra</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
                accumsan varius montes viverra nibh in adipiscing. Lorem ipsum
                dolor vestibulum ante ipsum primis in faucibus vestibulum.
                Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed
                feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia
                ante nunc ac gravida.
              </p>
            </section>
            <section>
              <h4>Sem turpis amet semper</h4>
              <ul className="alt">
                <li>
                  <a href="#">Dolor pulvinar sed etiam.</a>
                </li>
                <li>
                  <a href="#">Etiam vel lorem sed amet.</a>
                </li>
                <li>
                  <a href="#">Felis enim feugiat viverra.</a>
                </li>
                <li>
                  <a href="#">Dolor pulvinar magna etiam.</a>
                </li>
              </ul>
            </section>
            <section>
              <h4>Magna sed ipsum</h4>
              <ul className="plain">
                <li>
                  <a href="#">
                    <i className="icon fa-twitter">&nbsp;</i>Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon fa-facebook">&nbsp;</i>Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon fa-instagram">&nbsp;</i>Instagram
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon fa-github">&nbsp;</i>Github
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </footer>
      <div id="copyright " className="copyright">
        Design by <a href="https://templated.co/">TEMPLATED</a>.
      </div>
    </div>
  );
}

export default App;
