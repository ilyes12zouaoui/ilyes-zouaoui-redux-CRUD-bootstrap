import React, { Component } from "react";

import { withRouter } from "react-router-dom";

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      title,
      description,
      imageUrl,
      onRemoveBlog,
      onRemoveBlogAsync,
      onClickShowUpdateForm,
      onClickShowUpdateFormAsync
    } = this.props;
    return (
      <div class="card text-center">
        <img
          style={{ height: "200px", width: "100%", display: "block" }}
          src={imageUrl}
          alt="blog image"
        />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
        </div>
        <div class="card-body mb-3">
          <p class="card-text">{description}</p>
        </div>
        <button className="btn btn-primary m-2" onClick={onClickShowUpdateForm}>
          update
        </button>
        <button className="btn btn-primary m-2" onClick={onRemoveBlog}>
          delete
        </button>

        <br />
        <button
          className="btn btn-primary m-2"
          onClick={onClickShowUpdateFormAsync}
        >
          update async
        </button>
        <button className="btn btn-primary m-2" onClick={onRemoveBlogAsync}>
          delete async
        </button>
      </div>
    );
  }
}

export default Blog;
