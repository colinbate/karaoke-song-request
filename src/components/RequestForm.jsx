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
            {name.touched && name.error && <div className="error">{name.error}</div>}
            <TextInput id="email" label="Your Email" {...email} />
            {email.touched && email.error && <div className="error">{email.error}</div>}
            <TextInput id="title" label="Song Title" {...title} ref={(ref) => this.titleField = ref} />
            {title.touched && title.error && <div className="error">{title.error}</div>}
            <TextInput id="artist" label="Song Artist" {...artist} />
            {artist.touched && artist.error && <div className="error">{artist.error}</div>}
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
  validate: vals => {
    const errors = {};
    if (!vals.name) { errors.name = 'Required'; }
    if (!vals.email) { errors.email = 'Required'; }
    if (!vals.title) { errors.title = 'Required'; }
    if (!vals.artist) { errors.artist = 'Required'; }
    return errors;
  },
  fields
})(RequestForm);