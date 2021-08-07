import Posts from "./components/Posts";
import Post from "./components/Post";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App(props) {
    return (
      <div className="blog">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <h1  className="home-page-posts-header">Posts</h1>
              <Posts/>
            </Route>
            <Route path="/posts/:id" component={Post}>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
