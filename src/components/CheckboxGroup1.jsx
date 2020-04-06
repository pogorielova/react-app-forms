import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxGroup1 extends Component {


    state= {
        checked: [],
        error: null,
    }

    handleSelect = (e) => {
        const { checked } = this.state;
        if(checked.includes(e.target.value)) {
            this.setState({checked: checked.filter(item => item !== e.target.value)}, () => this.props.handleChange(this.state.checked, this.state.name))
        } else {
            this.setState({ checked: [...this.state.checked, e.target.value]}, () => this.props.handleChange(this.state.checked, this.state.name))
        }
    }

    render() {
        const { values } = this.props;
        return (
            <div>
                {
                    values.map(item => (
                        <div className='checkboxGroup'>
                            <input type="checkbox" value={item.value} name={this.props.name} id={item.value}  onChange={this.handleSelect} />
                    <label htmlFor={item.value}>{item.label}</label>
                        </div>
                    ))
                }
            </div>
        )
    }
}

CheckboxGroup1.propTypes = {
    name: PropTypes.string,
    handleChange: PropTypes.func,
    value: {
        label: PropTypes.string,
        value: PropTypes.string
    }
};

export default CheckboxGroup1;