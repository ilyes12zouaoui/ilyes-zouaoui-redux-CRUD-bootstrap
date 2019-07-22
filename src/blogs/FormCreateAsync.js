import React, { Component } from "react";
import _ from "lodash";
import { generateUniqueId } from "../utilities/utilities";
import FormInput from "./FormInput";
import { connect } from "react-redux";
import * as actions from "./store/action";

class FormCreate extends Component {
  state = {
    title: "",
    description: "",
    imageUrl: "",
    isTitleFieldTouched: false,
    isDescriptionFieldTouched: false,
    isImageUrlFieldTouched: false,
    error: null
  };

  onInputChange = event => {
    let { name, value } = event.target;
    let isFieldName = `is${name.charAt(0).toUpperCase() +
      name.slice(1)}FieldTouched`;

    this.setState({ [name]: value, [isFieldName]: true });
  };

  verifyTitleInput = () => {
    const { title } = this.state;
    return title != "" && title.length >= 3;
  };
  verifyDescriptionInput = () => {
    const { description } = this.state;
    return description != "" && description.length >= 5;
  };
  verifyImageUrlInput = () => {
    const { imageUrl } = this.state;
    return imageUrl != "";
  };

  verifyFormInputs = () => {
    return (
      this.verifyDescriptionInput() &&
      this.verifyImageUrlInput() &&
      this.verifyTitleInput()
    );
  };

  onFormSubmit = event => {
    event.preventDefault();

    if (this.verifyFormInputs()) {
      this.props.onCreateBlog(
        generateUniqueId(),
        this.state.title,
        this.state.description,
        this.state.imageUrl
      );

      this.props.history.push("/blogs");
    }
    this.setState({ error: "failed verify your inputs values" });
  };

  render() {
    const {
      error,
      isDescriptionFieldTouched,
      isTitleFieldTouched,
      isImageUrlFieldTouched,
      description,
      title,
      imageUrl
    } = this.state;

    return (
      <div className="container">
        <h1 className="display-4">Create blog</h1>
        <form onSubmit={this.onFormSubmit}>
          <FormInput
            isDirty={isTitleFieldTouched || !!error}
            onInputChange={this.onInputChange}
            label="title :"
            name="title"
            success={this.verifyTitleInput()}
            errorMessage="title is required, minimum length 3"
            value={title}
          />
          <FormInput
            isDirty={isDescriptionFieldTouched || !!error}
            onInputChange={this.onInputChange}
            label="description :"
            name="description"
            type="textarea"
            success={this.verifyDescriptionInput()}
            errorMessage="description is required, minimum length 5"
            value={description}
          />
          <FormInput
            isDirty={isImageUrlFieldTouched || !!error}
            onInputChange={this.onInputChange}
            label="imageUrl :"
            name="imageUrl"
            success={this.verifyImageUrlInput()}
            value={imageUrl}
            errorMessage={"image url is required!"}
          />

          <button type="submit" className="btn btn-primary">
            create
          </button>
          {error && (
            <div className="small mt-2" style={{ color: "red" }}>
              {error}
            </div>
          )}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateBlog: (id, title, description, imageUrl) => {
      dispatch(actions.createAsync({ id, title, description, imageUrl }));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FormCreate);
