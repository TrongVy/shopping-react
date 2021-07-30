import React, { Component } from 'react'
import Item from './Item';

export default class ListPhim extends Component {
    render() {
        console.log(this.props.data);
        const { data } = this.props;
        return (
            <div className="row">
                {data.map( (item, index) =>{
                    return(
                        <div className="col-3" key={index}>
                                <Item item={item}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
