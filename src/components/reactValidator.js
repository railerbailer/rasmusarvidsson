import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator} from 'react-material-ui-form-validator';
 
class MyForm extends React.Component {
 
    constructor(props) {
        super(props);
 
        this.handleChange = this.handleChange.bind(this);
    }
 
    handleChange(event) {
        const email = event.target.value;
        this.setState({ email });
    }
 
    handleSubmit() {
        // your submit logic
    }
 
    render() {
        const { email } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    floatingLabelText="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <RaisedButton type="submit" />
            </ValidatorForm>
        );
    }
}