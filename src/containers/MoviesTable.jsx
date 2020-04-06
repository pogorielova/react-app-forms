import React, { Component } from 'react';
import Tr from '../components/Tr'

class MoviesTable extends Component {
    
    render() {
        return (
            <table border='1'>
                <caption>Really good movies</caption>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                </tr>
                <Tr values={{title: '1917', director: 'Sam Mendes', genre: 'drama'}} />
                <Tr values={{title: 'Jojo Rabbit', director: 'Taika Waititi', genre: 'drama'}} />
                <Tr values={{title: 'Parasite', director: 'Bong Joon Ho', genre: 'thriller'}} />
            </table>
        )
    }
}

export default MoviesTable;