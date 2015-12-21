import React from 'react';
import {reduxForm} from 'redux-form';
import TextInput from './TextInput';
import Button from './Button';
import {addRequest} from '../actions';
export const fields = ['title', 'artist', 'name', 'email'];

const onSubmit = (values, dispatch) => {
  dispatch(addRequest(values));
};

const RequestForm = ({
    fields: {title, artist, name, email},
    handleSubmit,
    resetForm,
    submitting}) => (
  <form onSubmit={handleSubmit}>
    <TextInput id="name" label="Your Name" {...name} />
    <TextInput id="email" label="Your Email" {...email} />
    <TextInput id="title" label="Song Title" {...title} />
    <TextInput id="artist" label="Song Artist" {...artist} />
    <Button onClick={handleSubmit}>Submit</Button>
  </form>
);

export default reduxForm({
  form: 'requestForm',
  fields,
  onSubmit
})(RequestForm);