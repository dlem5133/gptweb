import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HighlightDetail = () => {
  const [comments, setComments] = useState([]);

  const [showComments, setShowComments] = useState(false);

  const Comment = ({ comment }) => {
  return (
    <div className="ai-comment">
      {comment.parent_comment_id ? <span>&rarr;</span> : null}
      <p>{comment.content}</p>
    </div>
  );
};

const toggleComments = () => {
  setShowComments(!showComments); // 상태 토글
};

  useEffect(() => {
    // 댓글 목록을 불러오는 API 호출 함수
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:8000/comments/');
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
                  <div>생성 인공지능(AI)이 '콘텐츠 조정자(moderator)'라는 새로운 직군을
                  만들어 내고 있다. '프롬포트 엔지니어'에 이어 등장한 이 직업은 생성
                  AI의 출력만을 전문적으로 검토하는 역할이다. 월스트리스저널과
                  CNBC는 최근 생성 AI의 등장으로 실직 위협이 늘어나는 가운데 반면
                  AI가 생성한 텍스트나 이미지의 적합성을 검토하는 일자리도 늘어나고
                  있다고 소개했다.<br/><br/>생성 인공지능(AI)이 '콘텐츠 조정자(moderator)'라는 새로운 직군을
                  만들어 내고 있다. '프롬포트 엔지니어'에 이어 등장한 이 직업은 생성
                  AI의 출력만을 전문적으로 검토하는 역할이다. 월스트리스저널과
                  CNBC는 최근 생성 AI의 등장으로 실직 위협이 늘어나는 가운데 반면
                  AI가 생성한 텍스트나 이미지의 적합성을 검토하는 일자리도 늘어나고
                  있다고 소개했다.</div>
                </div>
                <div className="ai-btnwrap2 ai-flexwrap mgt20">
                  <button type="submit" className="ai-btn_like">
                    좋아요
                    <p className="ai-like_ico"></p>
                    <p className="ai-like_count"></p>
                  </button>
                  <button type="submit" className="ai-btn_regist2" onClick={toggleComments}>
                    댓글
                    <p className="ai-com_ico"></p>
                    <p className="ai-com_count"></p>
                  </button>
                </div>
                {showComments && (
                <div className="ai-comment-list">
                  {/* 댓글 목록을 표시하는 부분 */}
                  {comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                  ))}
                </div>
                )}
              </div> 
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HighlightDetail;
