import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HighlightDetail = () => {
  const [comments, setComments] = useState([]);

  const [showComments, setShowComments] = useState(false);

  let [inputCount, setInputCount] = useState(0);

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true); // 수정 버튼을 클릭하면 isEditing 값을 true로 변경합니다.
  };

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  }; 
// 중괄호 안, ? 뒤가 대댓글 구역
// <p>{comment.content}</p> 댓글구역
  const Comment = ({ comment }) => {
  return (
    <div className="ai-comment">
      <div className='ai-com_wrap'>
        <div className='user_wrap mgb10'>
        <div
            id="likeButton"
            className="likesButton"
            //onClick={increaseLikes}
          >
          </div>
          <div className="ai-flex mgb10">
            <div className="ai-ico user"></div>
            <div id="likeCount"></div>
            <div>
              <div className='user_name'>익명</div>
              <div className='date'>2days ago</div>
            </div>
          </div>
          <p className='ai-content3'>{comment.content}</p>
          <div className="ai-btnwrap" style={{ justifyContent: "right" }}>
        <button className="ai-btn none">답글</button>
        <button className="ai-btn none" onClick={handleEditClick}>
          수정
        </button>
      </div>
        </div>
      </div> 

      <div className='ai-recom_wrap'>
        <div className='user_wrap mgb10'>
        <div
            id="likeButton"
            className="likesButton"
            //onClick={increaseLikes}
          >
          </div>
          <div className="ai-flex mgb10">
            <div className='recom_arr'></div>
            <div className="ai-ico user"></div>
            <div id="likeCount"></div>
            <div>
              <div className='user_name'>익명</div>
              <div className='date'>2days ago</div>
            </div>
          </div>
          <p className='ai-content3'>{comment.parent_comment_id ? <></>: null}</p>
          <div className="ai-btnwrap" style={{ justifyContent: "right" }}>
            <button className="ai-btn none">답글</button>
            <button className="ai-btn none">수정</button>
          </div>
        </div>
      </div>
      <div className='ai-input_wrap'>
        <div className="ai-flex">
          <textarea className='ai-input_content'
            placeholder="입력해주세요"
          />
          <div className="txt_right">
            <button className="ai-btn_close none2"></button>
          </div>
        </div>
        <div className='ai-flex' style={{ justifyContent: "space-between" }}>
          <div onChange={onInputHandler} maxLength={2000}>
            <p>
              <span>{inputCount}</span>
              /<span>{2000}</span>
            </p>
          </div>
          <div className="ai-btnwrap" style={{ justifyContent: "right" }}>
            <button className="ai-btn none">등록</button>
          </div>    
        </div>
      </div>        
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
            <div className="ai-flex pdt50" style={{ minHeight: "50rem" }}>
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
                  <button type="submit" className="ai-flex ai-btn_like">
                    <div className="ai-ico like_1" style={{ margin: "0px 10px 0 13px" }}></div>
                    <div id="likeCount">12</div>
                  </button>
                  <button type="submit" className="ai-flex ai-btn_regist2 pd16" onClick={toggleComments}>
                    <div className='ai-flex'>
                      <div className="ai-ico like_3 w" style={{ margin: "2px" }}></div>
                      <div>댓글</div>
                      <div id="likeCount">12</div>
                    </div>
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
