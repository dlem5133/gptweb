import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HighlightDetail = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // 댓글 목록을 불러오는 API 호출 함수
    const fetchComments = async () => {
      try {
        const response = await axios.get('YOUR_COMMENT_API_ENDPOINT');
        setComments(response.data); // 댓글 목록을 상태에 설정
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    // 페이지 로드 시 댓글 목록을 불러옴
    fetchComments();
  }, []); // 빈 배열을 전달하여 페이지 로드 시 한 번만 호출되도록 설정

  return (
    <>
      <section id="wrapper">
        <div className="inner ai-innerwrap">
          <div className="ai-inline">
            <div className="ai-flex pdt50">
              <div className="ai-fgr1 ai-lab_container">
                <div className="ai-lab_img" src="images/ai1.jpg">
                  이미지영역
                </div>
              </div>

              <div className="ai-fgr2">
                <div className="ai-conten2">
                  <div className="ai-tit2 txt_left">Chat GPT</div>
                  <div>content</div>
                </div>
                <div className="ai-btnwrap2 ai-flexwrap mgt20">
                  <button type="submit" className="ai-btn_like">
                    좋아요
                    <p className="ai-like_ico"></p>
                    <p className="ai-like_count"></p>
                  </button>
                  <button type="submit" className="ai-btn_regist2">
                    댓글
                    <p className="ai-com_ico"></p>
                    <p className="ai-com_count"></p>
                  </button>
                </div>
                <div className="ai-comment-list">
                  {/* 댓글 목록을 표시하는 부분 */}
                  {comments.map((comment, index) => (
                    <div key={index} className="ai-comment">
                      {/* 댓글 내용 */}
                      <p>{comment.content}</p>
                      {/* 작성자, 작성일 등 댓글 관련 정보 추가 가능 */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HighlightDetail;
