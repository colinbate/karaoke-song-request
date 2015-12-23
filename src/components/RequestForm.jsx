import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import TextInput from './TextInput';
import Button from './Button';
import {addRequest} from '../actions';
export const fields = ['title', 'artist', 'name', 'email'];

class RequestForm extends Component {
  onSubmit(values, dispatch) {
    dispatch(addRequest(values));
    this.titleField.input.focus();
  }
  render() {
    let {fields: {title, artist, name, email},
      handleSubmit,
      resetForm,
      submitting} = this.props;
    return (
      <div className="mdl-card mdl-shadow--2dp form-card">
        <div className="mdl-card__title mdl-color--accent mdl-color-text--accent-contrast">
          <h2 className="mdl-card__title-text">Add New Song Request</h2>
        </div>
        <form onSubmit={handleSubmit(::this.onSubmit)}>
          <div className="mdl-card__supporting-text">
            <TextInput id="name" label="Your Name" {...name} />
            <TextInput id="email" label="Your Email" {...email} />
            <TextInput id="title" label="Song Title" {...title} ref={(ref) => this.titleField = ref} />
            <TextInput id="artist" label="Song Artist" {...artist} />
          </div>
          <div className="mdl-card__actions">
            <Button onClick={handleSubmit(::this.onSubmit)}>Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'requestForm',
  fields
})(RequestForm);