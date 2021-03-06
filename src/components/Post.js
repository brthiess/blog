import React from "react";
import { withRouter } from "react-router";
const marked = require("marked");

class Post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        post: []
      };
    }

    getMarkup(content){
      return {__html: marked(content)};
    }
  
    componentDidMount() {
      const id = this.props.match.params.id;
      console.log(id);
      fetch("/api/posts/" + id + ".json")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              post: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, post } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div className="post-container">
                <span className="post-image"><img src={'/images/' + post.image}/></span>
                <span className="post-title">{post.title}</span>
                <span className="post-text">
                  <div dangerouslySetInnerHTML={this.getMarkup(post.content)} />
                  </span>
            </div>
                
        );
      }
    }
  }

  export default withRouter(Post);