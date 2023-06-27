import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const ListPage = () => {
  const history = useHistory();
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
      <div className="d-flex justify-content-between">
        <h1>Blogs</h1>
        <div>
          <Link to="/blogs/create" className="btn btn-success">
            Create New
          </Link>
        </div>
      </div>
      {posts.map((post) => {
        return (
          <Card
            key={post.id}
            title={post.title}
            onClick={() => history.push("/blogs/edit")}
          >
            <div>
              <button
                className="btn btn-danger btn-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("delete");
                }}
              >
                Delete
              </button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ListPage;
