import React from 'react';

class Input extends React.Component {
    state = {
        error: '',
        value: '',
    };

    handleInputChange = (e) => {
        this.setState({value: e.target.value})
        this.props.handleChange(e.target.value, e.target.name)
    }

    handleBlur = () => {
        const error = this.props.validate(this.state.value)
        this.setState({ error })
    }

    render() {

        const { name } = this.props;

        return (
            <div className='flex'>
                <label htmlFor={name}>{name}</label>
                <input type="text" name={ name } id= {name} onChange={this.handleInputChange} onBlur={this.handleBlur}/>
                <div className='error'>{this.state.error}</div>
            </div>
        )
    }
}

export default Input;