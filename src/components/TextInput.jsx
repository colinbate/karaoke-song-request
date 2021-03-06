import React, {Component} from 'react';

class TextInput extends Component {
  componentDidUpdate() {
    if (this.widget.MaterialTextfield && this.props.value) {
      this.widget.MaterialTextfield.checkDirty();
    }
  }
  render() {
    let {id, label, type, value, onChange, onBlur, onFocus} = this.props;
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" ref={(ref) => this.widget = ref}>
        <input className="mdl-textfield__input" type={type || 'text'} id={id} value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus} ref={(ref) => this.input = ref} />
        <label className="mdl-textfield__label" htmlFor={id}>{label}</label>
      </div>
    );
  }
}

export default TextInput;