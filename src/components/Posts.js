import React from "react";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <ul className="post-list">
          {posts.map((post) => (
            <li className="post-item" key={post.id}>
              <a className="post-item-link" href={"/post/" + post.id}></a>
              <span className="post-title">{post.title}</span>
              <span className="post-text">
                {post.text.substring(0, 200)}...
              </span>
              <span className="post-image">
                <img alt="blog post" src={post.image ?? "/stellar.png"} />
              </span>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Posts;
