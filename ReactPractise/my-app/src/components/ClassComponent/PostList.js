import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
            error:'Error retrieving data'
        })
      });
  }
  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        Lists of posts
        {posts.length
          ? posts.map((post) => (
              <div key={post.id}>
                <table>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                  </tr>
                  <tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                  </tr>
                </table>
              </div>
            ))
          : null}
          { errorMsg ? <div>{errorMsg}</div>:null}
      </div>
    );
  }
}

export default PostList;
