import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { useHistory } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";
import { bool } from "prop-types";
import Pagination from "./Pagination";

const BlogList = ({ isAdmin }) => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = () => {
    axios.get("http://localhost:3002/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deleteBlog = (e, id) => {
    e.stopPropagation();
    axios.delete(`http://localhost:3002/posts/${id}`).then(() => {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id)); // 같지 않을 때만 남겨두기
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (posts.length === 0) {
    return <div>No blog post found</div>;
  }
  const renderBlogList = () => {
    return posts
      .filter((post) => {
        return isAdmin || post.publish;
      })
      .map((post) => {
        return (
          <Card
            key={post.id}
            title={post.title}
            onClick={() => history.push(`/blogs/${post.id}`)}
          >
            {isAdmin ? (
              <div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={(e) => {
                    deleteBlog(e, post.id);
                  }}
                >
                  Delete
                </button>
              </div>
            ) : null}
          </Card>
        );
      });
  };

  return (
    <div>
      {renderBlogList()}
      <Pagination />
    </div>
  );
};

export default BlogList;
