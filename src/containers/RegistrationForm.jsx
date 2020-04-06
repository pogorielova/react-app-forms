import React from 'react';
import Input from '../components/Input';
import ChechboxGroup1 from '../components/CheckboxGroup1';
import RadioGroup from '../components/RadioGroup';
import { validateInputText } from '../utils/validation';
import { validateInputNumber } from '../utils/validation';


class RegistrationForm extends React.Component {
    state = {
        formData: {
            name: '',
            surname: '',
            age: '',
            hobbies: [],
            skills: [],
            sex: '',
            country: '',
        }
    }

    handleFieldChange = (value, fieldName) => {
        this.setState({ 
            formData: {
                ...this.state.formData,
                [fieldName]: value,
            }
        })
    }

    // handleNameChange = (name) => {
    //     this.setState({ 
    //         formData: {
    //             ...this.state.formData,
    //             name,
    //         }
    //     })
    // }

    // handleSurnameChange = (surname) => {
    //     this.setState({ 
    //         formData: {
    //             ...this.state.formData,
    //             surname,
    //         }
    //     })
    // }

    // handleAgeChange = (age) => {
    //     this.setState({ 
    //         formData: {
    //             ...this.state.formData,
    //             age,
    //         }
    //     })
    // }

    handleSexSelect = (event) => {
        this.setState({ 
            formData: {
                ...this.state.formData,
                sex: event.target.value,
            }
        })
    }

    handleCheckboxSelect = (items, CGName) => {
        this.setState({ 
            formData: {
                ...this.state.formData,
                [CGName]: items
            }
        })
    }

    render() {
        return (
            <div>
                <div className='form-container'>
                <Input name='name' handleChange={this.handleFieldChange} validate={validateInputText} />
                <Input name='surname' handleChange={this.handleFieldChange} validate={validateInputText} />
                <Input name='age' handleChange={this.handleFieldChange} validate={validateInputNumber} />

                <RadioGroup name='sex' values={[{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]} handleChange={this.handleSexSelect} />

                <ChechboxGroup1 name='hobbies' values={[{label: 'Snowboarding', value: 'snowboarding'}, {label: 'Food', value: 'food'}, {label: 'Travelling', value: 'travelling'}]} handleChange={this.handleCheckboxSelect} />
                <ChechboxGroup1 name='skills' values={[{label: 'JavaScript', value: 'js'}, {label: 'JQuery', value: 'jquery'}, {label: 'React', value: 'react'}]} handleChange={this.handleCheckboxSelect} />
                </div>
                <div className='tableContainer'>

                </div>
            </div>
        )
    }
}

export default RegistrationForm;