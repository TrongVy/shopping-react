import React, { Component } from 'react'
import data from '../../Data/DataFilms.json'
import ListPhim from './ListPhim'
export default class Phim extends Component {

    render() {
        return (
            <div className="container">
                <ListPhim data={data} />
            </div>
        )
    }
}
