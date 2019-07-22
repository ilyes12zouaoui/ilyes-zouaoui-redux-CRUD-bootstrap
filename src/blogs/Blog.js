import React, { Component } from "react";

export default ({
  id,
  title,
  description,
  imageUrl,
  onRemoveBlog,
  onRemoveBlogAsync,
  onClickShowUpdateForm,
  onClickShowUpdateFormAsync
}) => {
  return (
    <div className="card text-center">
      <img
        style={{ height: "200px", width: "100%", display: "block" }}
        src={imageUrl}
        alt="blog image"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="card-body mb-3">
        <p className="card-text">{description}</p>
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
};
