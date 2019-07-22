import React, { Component } from "react";

class PageNotFound extends Component {
  state = {};
  render() {
    return (
      <div
        class="jumbotron"
        style={{ backgroundColor: "white", minHeight: "70vh" }}
      >
        <div class="container text-center">
          <h1 className="display-3">page not found !!</h1>

          <p className="lead">
            ilyes zouaoui redux crud is a small project using{" "}
            <a
              href="https://redux-starter-kit.js.org/introduction/quick-start"
              target="_blank"
            >
              redux-starter-kit
            </a>{" "}
            librairy which help us to create redux store, action creator and
            reducers in a much simpler way then we used to do before using redux
            library directly, also it includes redux-thunk middleware by default
            for handling asynchronous operations, and we use react-redux library
            to be able to connect our react app with our redux solution in a
            simple way, this project was made for learning how to manage our
            react application state in a more efficient way using redux, i wish
            it helps you.
          </p>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
