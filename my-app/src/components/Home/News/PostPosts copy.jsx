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
