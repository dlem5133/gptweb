import React, { useState, useEffect } from "react";
import PostPosts from "./PostPosts";
import EditPosts from "./EditPosts";
import ViewPosts from "./ViewPosts";
import { deleteNews, getNews } from "./apis";
import Pagination from "./Pagination";

const News = ({ openModal, closeModal }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // 페이지 당 아이템 수 설정




  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  // 게시글 불러오기
  const fetchPosts = async () => {
    const response = await getNews();
    setPosts(response.data);
  };

  // 게시글 삭제
  const deletePost = (post_id) => {
    deleteNews(post_id).then(fetchPosts());
  };

  // 현재 페이지의 게시물 데이터
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = posts.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 번호 변경
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <section className="wrapper">
      <div className="inner text-center">
        <h2 className="ai-tit_h2">AI News</h2>

        {/* CTA */}

        <div className="tb1 container" style={{ height: "35rem" }}>
          <div className="inner">
            <div className="col-xs-12">
              <table
                summary="This table shows how to create responsive tables using Datatables' extended functionality"
                className="table table-bordered table-hover dt-responsive"
                style={{ textAlign: "center" }}
              >
                <caption className="text-center">
                  최신 기술이 반영된 세미나 자료를 소개하는 AI뉴스 게시판 입니다.
                </caption>
                <caption style={{ textAlign: "right", margin: "10px 0"}}>
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
                      className="ai-btn_regist"
                    >
                      작성
                    </button>
                  </div>
                </caption>
                <thead className="ai-thead bord-no">
                  <tr>
                    <th style={{ padding: "17px 15px" }}>번호</th>
                    <th style={{ width: "50%" }}>제목</th>
                    <th>등록자</th>
                    <th>등록일</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts.map((post) => (
                    <tr className="ai-tr bord-no" key={post.post_id}>
                      <td>{post.post_id}</td>
                      <td
                        className="ai-td_tit"
                        onClick={() =>
                          openModal(
                            // <div>
                            //   <h2>{post.title}</h2>
                            //   <p>{post.content}</p>
                            //   <button onClick={closeModal}>닫기</button>
                            // </div>
                            <ViewPosts closeModal={closeModal} post={post}></ViewPosts>
                          )
                        }
                      >
                        {post.title}
                      </td>

                      <td>41,803,125</td>
                      <td>23.12.18</td>
                      <td>123</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="5" className="text-center">
                    <Pagination
                      itemsPerPage={itemsPerPage}
                      totalItems={posts.length}
                      paginate={paginate}
                    />
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
