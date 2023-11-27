import React, { useState, useEffect } from "react";
import axios from "axios";
import PostPosts from "./PostPosts";
import EditPosts from "./EditPosts";

const News = ({ openModal, closeModal }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  //API 요청

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:8000/posts");
    setPosts(response.data);
  };

  // 게시글 삭제
  const deletePost = (postId) => {
    axios
      .delete(`http://localhost:8000/posts/${postId}`)
      .then((response) => {
        // 성공적으로 삭제된 후에 새로운 게시글 목록을 가져옵니다.

        console.log(response);
      })
      .then(() => {
        fetchPosts();
      })
      .catch((error) => {
        console.error("게시글 삭제 요청 실패:", error);
        // 요청 실패 시 에러 처리
      });
  };

  return (
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
                style={{ textAlign: "center" }}
              >
                <caption className="text-center">
                  최신 AI 기술이 반영된 세미나 자료를 소개하는 게시판입니다
                </caption>
                <caption style={{ textAlign: "right" }}>
                  <div className="modal">
                    <button
                      onClick={() =>
                        openModal(
                          <PostPosts
                            closeModal={closeModal}
                            fetchPosts={fetchPosts}
                          />
                        )
                      }
                      className="button small"
                    >
                      작성
                    </button>
                  </div>
                </caption>
                <thead style={{ textAlign: "center" }}>
                  <tr>
                    <th>번호</th>
                    <th style={{ width: "60%" }}>제목</th>
                    <th>등록자</th>
                    <th>등록일</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.post_id}>
                      <td>{post.post_id}</td>
                      <td
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          openModal(
                            <div>
                              <h2>{post.title}</h2>
                              <p>{post.content}</p>
                              <button onClick={closeModal}>닫기</button>
                            </div>
                          )
                        }
                      >
                        {post.title}
                      </td>

                      <td>41,803,125</td>
                      <td>31.3</td>
                      <td>
                        <button
                          className="button small"
                          onClick={() =>
                            openModal(
                              <EditPosts
                                post={post}
                                closeModal={closeModal}
                                fetchPosts={fetchPosts}
                              />
                            )
                          }
                        >
                          수정
                        </button>
                        <button
                          className="button small"
                          onClick={() => {
                            deletePost(post.post_id);
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

        <p className="p">Demo by 디지털금융개발부</p>
      </div>
    </section>
  );
};
export default News;
