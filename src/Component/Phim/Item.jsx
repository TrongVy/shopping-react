import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className="card">
                <img height={300} with={300} className="card-img-top" src={item.hinhAnh} alt =''/>
                <div className="card-body" style={{height:100}}>
                    <h4 className="card-title" style={{fontSize:'16px'}}>{item.tenPhim}</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
        )
    }
}
