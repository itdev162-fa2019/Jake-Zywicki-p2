import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostList from './components/PostList/PostList';
import Post from './components/Post/Post';
import './App.css';

class App extends React.Component {
  state = {
    posts: [],
    post: null
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/posts')
      .then((response) => {
        this.setState({
          posts: response.data
        })
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      })
  }

  viewPost = (post: any) => {
    console.log('view ${post.title}');
    this.setState({
      post: post
    });
  }

  render() {
    const { posts } = this.state;

  deletePost = post => {
    axios
      .delete('http://localhost:5000/api/posts/${post.id}')
      .then(response => {
        const newPosts = this.state.posts.filter(p => p.id !== post.id);
        this.setState({
          posts: [...newPosts]
        });
      })
      .catch(error => {
        console.error('Error deleting post: ${error}');
      });
  };

    return (
      <div className="App">
        <header className="App-header">
          Sports Blog
        </header>
        <main className="App-content">
          {posts.map((post: any) =>
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
            <Route exact path="/">
              <PostList
                posts={posts}
                clickPost={this.viewPost}
                deletePost={this.deletePost}
              />
            </Route>
          )}
        </main>
      </div>
    );
  }
}

export default App;
