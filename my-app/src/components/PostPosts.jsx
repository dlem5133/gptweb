import axios from "axios";
import { useState } from "react";

const PostPosts = ({ closeModal, fetchPosts }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postData = {
      title: title,
      content: content,
    };
    axios
      .post("http://localhost:8000/posts", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTitle("");
        setContent("");
        console.log(response);
      })
      .then(() => {
        fetchPosts();
      })
      .catch((error) => {
        console.error("게시글 생성 요청 실패:", error);
        // 요청 실패 시 에러 처리
      });
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
        closeModal();
      }}
    >
      <input
        type="text"
        placeholder="제목"
        value={title}
        onInput={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        placeholder="내용"
        value={content}
        onInput={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">게시글 작성</button>
      <button onClick={closeModal}>닫기</button>
    </form>
  );
};

export default PostPosts;
