import axios from "axios";

export const getNews = async () => {
  return axios.get("http://localhost:8000/posts").then((response) => {
    console.log(response);
    return response;
  });
};

export const postNews = async (postData) => {
  return axios
    .post("http://localhost:8000/posts", postData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error("게시글 생성 요청 실패:", error);
      // 요청 실패 시 에러 처리
    });
};

export const editNews = async (post_id, editData) => {
  return axios
    .put(`http://localhost:8000/posts/${post_id}`, editData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error("게시글 수정 요청 실패:", error);
    });
};

export const deleteNews = async (post_id) => {
  axios
    .delete(`http://localhost:8000/posts/${post_id}`)
    .then((response) => {
      // 성공적으로 삭제된 후에 새로운 게시글 목록을 가져옵니다.
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error("게시글 삭제 요청 실패:", error);
      // 요청 실패 시 에러 처리
    });
};
