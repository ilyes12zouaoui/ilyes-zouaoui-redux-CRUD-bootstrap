import React from "react";

export default ({
  isDirty,
  success,
  type = "input",
  onInputChange,
  value,
  label,
  name,
  errorMessage = "failed"
}) => {
  let divGroupClassNames = "form-group";
  let inputClassNames = "form-control";
  let FeedBackDiv = null;
  if (isDirty && success) {
    divGroupClassNames = "form-group has-success";
    FeedBackDiv = (
      <div className="valid-feedback">Success! You've done it.</div>
    );
    inputClassNames = "form-control is-valid";
  }
  if (isDirty && !success) {
    divGroupClassNames = "form-group has-danger";
    FeedBackDiv = <div className="invalid-feedback">{errorMessage}</div>;
    inputClassNames = "form-control is-invalid";
  }
  return (
    <div className={divGroupClassNames}>
      <label className="col-form-label col-form-label-lg" for={name}>
        {label}
      </label>
      {type == "input" ? (
        <input
          className={inputClassNames}
          type="text"
          placeholder="..."
          value={value}
          onChange={onInputChange}
          name={name}
          id={name}
        />
      ) : (
        <textarea
          className={inputClassNames}
          type="text"
          placeholder="..."
          value={value}
          onChange={onInputChange}
          name={name}
          id={name}
        />
      )}
      {FeedBackDiv}
    </div>
  );
};
