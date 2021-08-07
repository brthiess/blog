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
    fetch("/api/posts.json")
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
        <ul className="home-page-post-list">
          {posts.map((post) => (
            <li className="home-page-post-item" key={post.url}>
              <a className="home-page-post-item-link" href={"/posts/" + post.url}></a>
              <span className="home-page-post-title">{post.title}</span>
              <span className="home-page-post-date">{post.date}</span>
              <span className="home-page-post-text">
                {post.summary}
              </span>
              <span className="home-page-post-image">
                <img alt="blog post" src={'/images/' + post.image ?? "/stellar.png"} />
              </span>
              <span className="home-page-post-author">
                <img src="/images/me.png"/>
                Brad Thiessen
              </span>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Posts;
