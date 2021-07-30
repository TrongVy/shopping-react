import React, { Component } from 'react'
// import ProductList from './ProductList';


export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            product: this.productList[0]
        })
    }
    productList = [
        { id: 1, name: 'black cart', price: 100, hinhAnh: './img/products/black-car.jpg', icon: './img/icons/icon-black.jpg' },
        { id: 2, name: 'red cart', price: 200, hinhAnh: './img/products/red-car.jpg', icon: './img/icons/icon-red.jpg' },
        { id: 3, name: 'silver cart', price: 300, hinhAnh: './img/products/silver-car.jpg', icon: './img/icons/icon-silver.jpg' },
        { id: 4, name: 'steel cart', price: 400, hinhAnh: './img/products/steel-car.jpg', icon: './img/icons/icon-steel.jpg' }
    ];
    renderProduct = (item) => {
        this.setState({
            product: item
        })
    };
    render() {
        const styleButton = {
            border: 'none',
            padding: '3px',
            display: 'flex',
            margin: '2px',
            width: 200,
            fontWeight: 'bold',
        }
        return (
            <div className="text-center container">
                <div className="row">
                    <div className="col-8">
                        <h3>san pham</h3>
                        <img height={300} width={500} src={this.state.product.hinhAnh} alt="" />
                    </div>
                    <div className="col-4">
                        <h3>chon mau xe</h3>
                        {this.productList.map((item, index) => {
                            return (
                                <div key={index} >
                                    <button style={styleButton} onClick={() => this.renderProduct(item)}>
                                        <img height={50} width={50} src={item.icon} alt="" />
                                        <p style={{ margin: '15px' }}>{item.name}</p>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
