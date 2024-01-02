import { useState } from "react";
import { postNews } from "./apis";

const PostPosts = ({ closeModal }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      title: title,
      content: content,
    };
    console.log(postData)
    postNews(postData).then(() => {
      setTitle("");
      setContent("");
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
        <div>게시판 작성</div>
        <div className="txt_right">
          <button className="ai-btn_close" onClick={closeModal}></button>
        </div>
      </div>
      <table>
        <tbody>
          <tr className="ai-col_1 ai-col">
            <th className="ai-td ai-fgr2">제목</th>
            <th>
              <input
                type="text"
                placeholder="제목"
                value={title}
                onInput={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </th>
          </tr>
          <tr className="ai-col_1">
            <th className="ai-td ai-fgr2">등록자</th>
            <th>
              <input
                type="text"
                placeholder="제목"
                value={title}
                onInput={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </th>
          </tr>
          <tr className="ai-col_1">
            <th className="ai-td ai-fgr2">첨부파일</th>
            <th className="ai-flex w80">
              <input
                type="text"
                placeholder="제목"
                value={title}
                onInput={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <div className="ai-btnwrap">
                <button className="ai-btn_att">첨부파일</button>
              </div>
            </th>
          </tr>
          <tr className="ai-col_1">
            <th className="ai-td ai-fgr2">내용</th>
            <th>
            <textarea
              placeholder="내용"
              value={content}
              onInput={(e) => setContent(e.target.value)}
            ></textarea>
            </th>
          </tr>
        </tbody>
      </table>
      <div className="ai-btnwrap mt-9">
        <button type="submit" className="ai-btn regists">등록</button>
      </div>
    </form>
  );
};

export default PostPosts;
