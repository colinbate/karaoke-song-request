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
      <form onSubmit={handleSubmit(::this.onSubmit)}>
        <TextInput id="name" label="Your Name" {...name} />
        <TextInput id="email" label="Your Email" {...email} />
        <TextInput id="title" label="Song Title" {...title} ref={(ref) => this.titleField = ref} />
        <TextInput id="artist" label="Song Artist" {...artist} />
        <Button onClick={handleSubmit(::this.onSubmit)}>Submit</Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'requestForm',
  fields
})(RequestForm);