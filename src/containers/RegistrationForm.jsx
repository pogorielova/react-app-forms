import React from 'react';
import Input from '../components/Input';
import ChechboxGroup from '../components/CheckboxGroup'
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

    handleNameChange = (name) => {
        this.setState({ 
            formData: {
                ...this.state.formData,
                name,
            }
        })
    }

    handleSurnameChange = (surname) => {
        this.setState({ 
            formData: {
                ...this.state.formData,
                surname,
            }
        })
    }

    handleAgeChange = (age) => {
        this.setState({ 
            formData: {
                ...this.state.formData,
                age,
            }
        })
    }

    // handleHobbies = (hobbies) => {
    //     this.setState({
    //         formData: {
    //             ...this.state.formData,
    //             hobbies,
    //         }
    //     })
    // }

    render() {
        return (
            <div className='form-container'>
                <Input name='name' handleChange={this.handleNameChange} validate={validateInputText} />
                <Input name='surname' handleChange={this.handleSurnameChange} validate={validateInputText} />
                <Input name='age' handleChange={this.handleAgeChange} validate={validateInputNumber} />
                <ChechboxGroup />
            </div>
        )
    }
}

export default RegistrationForm;