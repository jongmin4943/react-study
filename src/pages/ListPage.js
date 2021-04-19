import React, { useState } from "react";
import styled from "styled-components";

const ListPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "제목1", content: "내용1" },
    { id: 2, title: "제목2", content: "내용2" },
    { id: 3, title: "제목3", content: "내용3" },
    { id: 4, title: "제목4", content: "내용4" },
  ]);
  const [num, setNum] = useState(posts.length + 1);
  const [post, setPost] = useState({
    id: num,
    title: "",
    content: "",
  });
  // const handleChangeContent = (e) => {
  //   setPost({ content: e.target.value });
  // };
  // const handleChangeTitle = (e) => {
  //   setPost({ title: e.target.value });
  // };
  const handleForm = (e) => {
    setPost({ ...post, id: num, [e.target.name]: e.target.value });
  };
  const handleWrite = () => {
    setPosts([...posts, post]);
    setNum(num + 1);
    setPost({ title: "", content: "" });
  };

  const StyledItemBoxDiv = styled.div`
    border: 1px solid black;
    padding: 10px;
    height: 100px;
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <div>
      <h1>리스트페이지</h1>
      <form>
        <input type='text' placeholder='제목' value={post.title} name='title' onChange={handleForm} />
        <input type='text' placeholder='내용' value={post.content} name='content' onChange={handleForm} />
        <button type='button' onClick={handleWrite}>
          글쓰기
        </button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            번호:{post.id} 제목: {post.title} 내용 : {post.content}
          </div>
          <button>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
