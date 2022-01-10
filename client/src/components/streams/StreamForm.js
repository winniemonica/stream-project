import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends Component {


    renderError({ error, touched }) {
        if (error && touched) {
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            )
        }
    }
    renderInput = ({ input, label, meta }) => {
        return (
            <div className='field'>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                {this.renderError(meta)}
            </div>

        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='title' component={this.renderInput} label='Enter the title' />
                <Field name='description' component={this.renderInput} label='Enter the description' />
                <button className='ui button primary'>Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const error = {}
    if (!formValues.title) {
        error.title = 'You must insert title';
    }
    if (!formValues.description) {
        error.description = 'You must insert description';
    }
    return error;
}


export default reduxForm({
    form: 'streamCreate', validate
})(StreamForm)
