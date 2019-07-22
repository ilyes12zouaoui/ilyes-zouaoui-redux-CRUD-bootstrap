import React, { Component } from "react";
import _ from "lodash";
import InputErrorMessage from "./InputErrorMessage";

import { connect } from "react-redux";
import * as actions from "./store/action";
import FormInput from "./FormInput";

class FormUpdate extends Component {
  state = {
    id: "",
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
  onCancel = () => {
    this.props.history.push("/blogs");
  };

  onFormSubmit = event => {
    event.preventDefault();

    if (this.verifyFormInputs()) {
      this.props.onUpdateBlog(
        this.state.id,
        this.state.title,
        this.state.description,
        this.state.imageUrl
      );

      this.props.history.push("/blogs");
    }
    this.setState({ error: "failed verify your inputs values" });
  };
  componentDidMount() {
    const { currentBlog } = this.props;
    this.setState({ ...currentBlog });
  }

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

          <button type="submit" class="btn btn-primary">
            update async
          </button>
          <button class="btn btn-primary ml-2" onClick={this.onCancel}>
            cancel
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
    onUpdateBlog: (id, title, description, imageUrl) => {
      dispatch(actions.updateAsync({ id, title, description, imageUrl }));
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentBlog: _.cloneDeep(
      state.blogs.list.find(blog => blog.id == ownProps.match.params.id)
    )
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormUpdate);
