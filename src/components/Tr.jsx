import React, { Component } from 'react';

class Tr extends Component {
    render() {
        const { values } = this.props;
        return (
            <div>                
                {values.map(item => (
                    <tr>
                    <td>{item.title}</td>
                    <td>{item.director}</td>
                    <td>{item.genre}</td> 
                    </tr>
                ))}
            </div>            )
    }
}

export default Tr;