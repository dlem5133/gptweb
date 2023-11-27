import axios from "axios";
import { useState } from "react";

const EditPosts = ({ post, closeModal, fetchPosts }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const editData = {
      title: title,
      content: content,
    };
    const post_id = post.post_id;

    axios
      .put(`http://localhost:8000/posts/${post_id}`, editData, {
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
        console.error("게시글 수정 요청 실패:", error);
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
      <button type="submit">게시글 수정</button>
      <button onClick={closeModal}>닫기</button>
    </form>
  );
};

export default EditPosts;
