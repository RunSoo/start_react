import axios from "axios";
import { useState, useEffect } from "react";

const ListPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get("http://localhost:3002/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  };

  useEffect(() => {
    getPosts(); // state가 업데이트 돼도 처음 한번만 실행
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      {posts.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
};

export default ListPage;
