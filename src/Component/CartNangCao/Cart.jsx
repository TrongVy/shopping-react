import React, { Component } from 'react'
import data from '../../Data/arrayFeatures.json';
import './Cart.css'
export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            src: './images/images-black/images-black-1/civic-1.jpg'
        })
    }
    changeItem = (id) => {
        console.log(id);
        this.setState({
            src: id.srcImg
        })
    }
    changeWheels = (id) => {
        console.log(id);
        this.setState({
            src: id.wheels[1].srcImg
        })
    }
    changeWheels2 = (id) => {
        console.log(id);
        this.setState({
            src: id.wheels[2].srcImg
        })
    }
    changeWheels3 = (id) => {
        console.log(id);
        this.setState({
            src: id.wheels[0].srcImg
        })
    }
    render() {
        console.log(data);

        return (

            <div className="container">
                <div className="text-center">
                    <h1>Bài tập xe nâng cao</h1>
                </div>
                <div className="row">
                    <div className="col-7">
                        <img height={300} width={500} src={this.state.src} alt="" />
                    </div>
                    <div className="col-5">
                        <h2>chon mau xe</h2>
                        {data.map((item, index) => {
                            return (
                                <div className="mb-1  item-icon" key={index}>
                                    <img onClick={() => this.changeItem(item)} height={50} width={50} src={item.img} alt="" />
                                    {/* <span>{item.title}</span>  */}
                                    <button
                                        className="btn btn-primary" onClick={() => this.changeWheels(item)}>BánhXeLoại1</button>

                                    <button
                                        className="btn btn-info"
                                        onClick={() => this.changeWheels2(item)}>BánhXeLoại2</button>

                                    <button
                                        className="btn btn-warning"
                                        onClick={() => this.changeWheels3(item)}>BánhXeLoại3</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
