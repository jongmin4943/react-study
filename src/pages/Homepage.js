import React, { useEffect, useState } from "react";
import Home from "../components/home/Home";

const Homepage = () => {
  //http 요청 (jquery, ajax, axios)
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    //다운로드 가정
    let data = [
      { id: 1, title: "제목1", content: "내용1" },
      { id: 2, title: "제목2", content: "내용2" },
      { id: 3, title: "제목3", content: "내용3" },
      { id: 4, title: "제목4", content: "내용4" },
    ];
    setBoards([...data]);
    setUser({ id: 1, username: "ssar" });
  }, []);

  return (
    <div>
      <Home boards={boards} setBoards={setBoards} user={user} />
    </div>
  );
};

export default Homepage;
