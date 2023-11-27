import axios from "axios";
import { useState } from "react";
import { editNews } from "./apis";

const EditPosts = ({ post, closeModal }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const editData = {
      title: title,
      content: content,
    };
    const post_id = post.post_id;

    editNews(post_id, editData).then(() => {
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
      <button type="submit">게시글 수정</button>
      <button onClick={closeModal}>닫기</button>
    </form>
  );
};

export default EditPosts;
