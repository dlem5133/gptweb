import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HighlightDetail = () => {
  const [comments, setComments] = useState([]);

  const [showComments, setShowComments] = useState(false);

  let [inputCount, setInputCount] = useState(0);

  

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  }; 
// 중괄호 안, ? 뒤가 대댓글 구역
// <p>{comment.content}</p> 댓글구역
  const Comment = ({ comment }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(comment.content); // 수정된 내용을 저장할 상태

    const handleEditClick = () => {
      setIsEditing(!isEditing); // 수정 버튼을 클릭하면 isEditing 값을 true로 변경합니다.
    };

    const handleInputChange = (e) => {
      setEditedContent(e.target.value); // 입력된 내용을 상태에 반영합니다.
    };

    const handleSave = () => {
      // 수정된 내용을 서버에 저장하는 등의 로직을 추가해야 합니다.
      // 이 예시에서는 수정된 내용을 콘솔에 출력하는 예시를 보여줍니다.
      console.log('수정된 내용:', editedContent);

      // 저장 후 수정 상태를 종료합니다.
      setIsEditing(false);
    };
    return (
      <div className="ai-comment">
        {/* <div className='ai-com_wrap'>
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
                {isEditing ? '취소' : '수정'}
              </button>

            </div>
          </div>
        </div>  */}

        <div className='ai-recom_wrap'>
          <div className='user_wrap mgb10'>
          <div
              id="likeButton"
              className="likesButton"
              //onClick={increaseLikes}
            >
            </div>
            <div className="ai-flex mgb10">
            {comment.parent_comment_id ? <div className='recom_arr'></div>: null}
              
              <div className="ai-ico user"></div>
              <div id="likeCount"></div>
              <div>
                <div className='user_name'>익명</div>
                <div className='date'>2days ago</div>
              </div>
            </div>
            <p className='ai-content3'></p>
            <div className="ai-btnwrap" style={{ justifyContent: "right" }}>
              <button className="ai-btn none">답글</button>
              <button className="ai-btn none" onClick={handleEditClick}>
            {isEditing ? '취소' : '수정'}
          </button>
            </div>
            <p className='ai-content3'>
          {isEditing ? (
            <textarea
              className='ai-input_content'
              value={editedContent}
              onChange={handleInputChange}
              placeholder="수정할 내용을 입력해주세요"
            />
          ) : (
            comment.content
          )}
        </p>

        {isEditing && (
          // 수정 모드가 활성화되면 수정할 내용과 등록 버튼을 보여줍니다.
          <div className='ai-btnwrap' style={{ justifyContent: "right" }}>
          
          </div>
        )}
          </div>
        </div>
        {isEditing && (
        <div className='ai-input_wrap'>
          <div className="ai-flex">
            <textarea className='ai-input_content'
              placeholder="입력해주세요"
            />
            <div className="txt_right">
              <button className="ai-btn_close none2" onClick={handleEditClick}></button>
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
              <button className="ai-btn none" onClick={handleSave}>수정</button>
            </div>    
          </div>
        </div>  
        )}      
      </div>
    );
  };

const toggleComments = () => {
  setShowComments(!showComments); // 상태 토글
};
const [editedContent, setEditedContent] = useState(); // 수정된 내용을 저장할 상태

const [isEditing, setIsEditing] = useState(false);
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
   
  const handleSave = async () => {
    try {
      console.log(editedContent)
      // 수정된 내용을 서버에 저장하는 POST 요청을 보냅니다.
      const response = await axios.post('http://localhost:8000/comments/', {
        "user_id": 1,
        "post_id": 1,
        "content": editedContent,
        "parent_comment_id": 2
        
      });
  
      console.log('댓글이 성공적으로 저장되었습니다:', response.data);
  
      // 저장 후 수정 상태를 종료합니다.
      setIsEditing(false);
    } catch (error) {
      console.error('댓글 저장 중 오류 발생:', error);
      // 저장에 실패한 경우에 대한 처리를 추가할 수 있습니다.
    }
  };
  
  const handleInputChange = (e) => {
    setEditedContent(e.target.value); // 입력된 내용을 상태에 반영합니다.
  };
  return (
    <>
      <section id="wrapper" className='ai-bf4 p-60'>
        <div className="inner ai-innerwrap">
          <div className="ai-inline">
            <div className="ai-flex pdt50" style={{ minHeight: "50rem" }}>
              <div className="ai-fgr1 ai-lab_container">
              <iframe
                className='ai-ext'
                title="ExternalPage"
                src="http://localhost:8000/docs"
                width="100%"
                height="100%"
              ></iframe>
              </div>

              <div className="ai-fgr2">
                <div className="ai-conten2">
                  <div className="ai-tit2 txt_left">Chat GPT</div>
                  <div className='in-cont'>생성 인공지능(AI)이 '콘텐츠 조정자(moderator)'라는 새로운 직군을
                  만들어 내고 있다. '프롬포트 엔지니어'에 이어 등장한 이 직업은 생성
                  AI의 출력만을 전문적으로 검토하는 역할이다. 월스트리스저널과
                  CNBC는 최근 생성 AI의 등장으로 실직 위협이 늘어나는 가운데 반면
                  AI가 생성한 텍스트나 이미지의 적합성을 검토하는 일자리도 늘어나고
                  있다고 소개했다.</div>
                </div>
                <div className="ai-btnwrap2 ai-flexwrap">
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
                <div className='ai-cwrap1'>
                  <div className="ai-comment-list">
                    {/* 댓글 목록을 표시하는 부분 */}
                    {comments.map((comment, index) => (
                      <Comment key={index} comment={comment} />
                    ))}
                  </div>
                </div>
                )}
                {
                <div className='ai-cwrap2'>
                  <div className='ai-input_wrap'>
                  <div className="ai-flex">
                    <textarea className='ai-input_content'
                    value={editedContent}
                    onChange={handleInputChange}
                      placeholder="입력해주세요"
                    />
          
                  </div>
                  <div className='ai-flex' style={{ justifyContent: "space-between" }}>
                    <div onChange={onInputHandler} maxLength={2000}>
                      <p>
                        <span>{inputCount}</span>
                        /<span>{2000}</span>
                      </p>
                    </div>
                    <div className="ai-btnwrap" style={{ justifyContent: "right" }}>
                      <button className="ai-btn none" onClick={handleSave}>등록</button>
                    </div>    
                  </div>
                  </div>
                </div>    
                }
              </div> 
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HighlightDetail;
