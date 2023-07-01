import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const ShowPage = () => {
  const { id } = useParams(); // routes.js랑 같은 값으로 (id) 해야 가져올 수 있음
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const getPost = (id) => {
    axios.get(`http://localhost:3002/posts/${id}`).then((res) => {
      setPost(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getPost(id);
  }, [id]); // 의존성 배열

  const printDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <small class="text-muted">Created At: {printDate(post.createdAt)}</small>
      <hr />
      <p>{post.body}</p>
    </div>
  );
};

export default ShowPage;
