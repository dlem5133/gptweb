import { useState } from "react";
import { postNews } from "./apis";

const ViewPosts = ({ openModal, closeModal }) => {
  const [title, setTitle] = useState("");
  const [registrant, setRegistrant] = useState("");
  const [attachment, setAttachment] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      title: title,
      content: content,
      registrant: registrant,
      attachment: attachment,
    };

    postNews(postData).then(() => {
      setTitle("");
      setRegistrant("");
      setContent("");
      setAttachment("");
      closeModal();
    });
  };  

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <div className="ai-tit ai-flexwrap">
        <div>최신 AI 기술 세미나 자료 게시판</div>
        <div className="txt_right">
          <button className="ai-btn_close"></button>
        </div>
      </div>
      <table>
        <div className="ai-row">
          <tr className="ai-col_2">
            <div
            className="ai-title ai-tit_text"
            readOnly
            type="text"
            value={title}
            onInput={(e) => {
              setTitle(e.target.value);
            }}
            >OPEN AI 생성형 AI 세미나 자료</div>
          </tr>
          <tr className="ai-col_2">
            <div className="date">등록일 2023-10-11</div>
            <div
            readOnly
            className="ai-content"
            radioGroup=""
            value={content}
            onInput={(e) => (e.target.value)}
            >생성 인공지능(AI)이 '콘텐츠 조정자(moderator)'라는 새로운 직군을
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
          </tr>
          <div className="ai-file_attachments_inner">
            <ul className="ai-file_list">
              <li className="ai-file_item">
                <div className="ai-file_link ai-flexwrap">
                  <div className="ai-flex">
                    <div className="ai-ico clp"></div>
                    <div className="ai-file_info ai-flex">
                        <span className="">파일명</span>
                        <span className="ai-file_extension">.pdf</span>
                    </div>
                  </div>                  
                  <div>
                    <div className="ai-ico down"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </table>
      <div className="ai-btnwrap mt-9">
        <button type="submit" className="ai-btn regists" onClick={closeModal}>등록</button>
        <button className="ai-btn edits">수정</button>
        <button className="ai-btn deletes">삭제</button>
      </div>
    </form>
  );
};

export default ViewPosts;
