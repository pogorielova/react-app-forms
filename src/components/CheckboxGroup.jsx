import React from 'react';

class CheckboxGroup extends React.Component {
    state= {
        hobbies: [],
    }

    handleCheckbox = (e) => {
        if(this.state.hobbies.indexOf(e.target.name) === -1) {
            this.setState({
                hobbies: [...this.state.hobbies, e.target.name]
            })
        } else {
            this.setState({
                hobbies: this.state.hobbies.filter(item => item !== e.target.name)
            })
        }
        console.log(this.state.hobbies)
    }


    render() {

        return (
            <div className='hobbies'>
                <p>Choose your hobbies:</p>
                <div>
                    <label htmlFor='sport'>Sport</label>
                    <input type="checkbox" name='sport' onChange={this.handleCheckbox}/>
                </div>
                <div>
                    <label htmlFor='programming'>Programming</label>
                    <input type="checkbox" name='programming' onChange={this.handleCheckbox}/>
                </div>
                <div>
                    <label htmlFor='photography'>Photography</label>
                    <input type="checkbox" name='photography' onChange={this.handleCheckbox}/>
                </div>
                <div>
                    <label htmlFor='travelling'>Travelling</label>
                    <input type="checkbox" name='travelling' onChange={this.handleCheckbox}/>
                </div>
                <div>
                    <label htmlFor='food'>Food</label>
                    <input type="checkbox" name='food' onChange={this.handleCheckbox}/>
                </div>
            </div>
        )
    }
}

export default CheckboxGroup;