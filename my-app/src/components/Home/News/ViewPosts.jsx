import { useState } from "react";
import './Pagination.css';
import { getNews,deleteNews } from "./apis";

const ViewPosts = ({ openModal, closeModal, post }) => {
  const [title, setTitle] = useState("");
  const [registrant, setRegistrant] = useState("");
  const [attachment, setAttachment] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const postData = {
    id: post.id,
    title: post.title,
    content: post.content
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
    closeModal();
    // postNews(postData).then(() => {
    //   setTitle("");
    //   setRegistrant("");
    //   setContent("");
    //   setAttachment("");
    //   closeModal();
    // });
  };  

  // 게시글 삭제
  const deletePost = (post_id1) => {
    deleteNews(post_id1);
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
            // type="text"
            // value={title}
            // onInput={(e) => {
            //   setTitle(e.target.value);
            // }}
            >{post.title}</div>
          </tr>
          <tr className="ai-col_2">
            <div className="date">등록일 2023-10-11</div>
            <div
            readOnly
            className="ai-content"
            radioGroup=""
            onInput={(e) => (e.target.value)}
            >{post.content}</div>
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
        {/* <button type="submit" className="ai-btn regists" onClick={closeModal}>등록</button> */}
        <button className="ai-btn edits">수정</button>
        <button className="ai-btn deletes" onClick={() => deletePost(post.post_id)}>삭제</button>
      </div>
    </form>
  );
};

export default ViewPosts;
