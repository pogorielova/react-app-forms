import React, { Component } from 'react';

class Tr extends Component {
    render() {
        const { values } = this.props;
            return (
                <tr>
                    <td>{values.title}</td>
                    <td>{values.director}</td>
                    <td>{values.genre}</td> 
                </tr>
            )
    }
}

export default Tr;