import React from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import Routing from './routes';

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>
const NotFound = () => <h1>Not Found 404</h1>

function App() {
  return (
    <div className="my-app">
      <nav className="navbar is-light" role="navigation" aria-label="">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://youtube.com">MilerDev School</a>
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
            <NavLink to="/post" activeClassName="is-active" className="navbar-item">Posts</NavLink>
            <NavLink to="/project" activeClassName="is-active" className="navbar-item">Projects</NavLink>
            <NavLink to="/about" activeClassName="is-active" className="navbar-item">About</NavLink>
          </div>
        </div>
      </nav>

      <Routing />
    </div>

    // <div className="App container">
    //   <Switch>
    //     {/* ใช้กรณีพิมพ์ address แล้วไม่พบจะวิ่งไปที่ component */}
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/about" component={About} />
    //     <Route exact path="/posts" component={Post} />
    //     <Route exact path="/projects" component={Project} />
    //     <Route component={NotFound} />
    //   </Switch>
    // </div>
  );
}

export default App;
