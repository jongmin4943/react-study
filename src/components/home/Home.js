import React from "react";
import styled from "styled-components";
const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === "ssar" ? "blue" : "red")};
`;
const StyledAddButton = styled(StyledDeleteButton)`
  color: ${(props) => (props.user.username === "ssar" ? "blue" : "red")};
  background-color: green;
`;

const Home = ({ boards, setBoards, user }) => {
  return (
    <div>
      <h1>홈페이지 입니다.</h1>
      <StyledDeleteButton
        user={user}
        onClick={() => {
          setBoards([]);
        }}
      >
        전체삭제
      </StyledDeleteButton>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
