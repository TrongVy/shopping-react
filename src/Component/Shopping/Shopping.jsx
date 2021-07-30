import React, { Component } from 'react'
import ListProduct from './ListProduct';
import Modal from './Modal';
// import Modal from './Modal';

export default class Shopping extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            modalGH: []
        })
    }
    ProductList = [
        { id: 1, name: 'ao', soLuong: 1, price: 99, describe: "tre trung nang dong", hinhAnh: 'https://cf.shopee.vn/file/875423ac66e773f3bc8d7c485bbb65cd_tn' },
        { id: 2, name: 'quan', soLuong: 1, price: 300, describe: "gia ca yeu duoi", hinhAnh: 'https://cf.shopee.vn/file/f06a507aa0e91a498785b60bfe7a7659_tn' },
        { id: 3, name: 'giay', soLuong: 1, price: 299, describe: "giay trung quoc", hinhAnh: 'https://cf.shopee.vn/file/1746de023f7378d59eb2fd017da52f40' },
        { id: 4, name: 'ao khoac', soLuong: 1, price: 199, describe: "ao gio mua he", hinhAnh: 'https://cf.shopee.vn/file/d77d8b5b5ab6f33a500de137c5ade5fa', anhChiTiet1: 'https://cf.shopee.vn/file/8638b496d339cf5515e9fb4f80962e8b', anhChiTiet2: 'https://cf.shopee.vn/file/d77d8b5b5ab6f33a500de137c5ade5fa', anhChiTiet3: 'https://cf.shopee.vn/file/b308f0862048aa19f2fdc7f445fb12e2', anhChiTiet4: 'https://cf.shopee.vn/file/9528ce813445418349fbbfbed7a6343a' }
    ];
    addToCart = (product) => {
        //newArr : modalGH sau khi click
        let newArr = [...this.state.modalGH]
        let result = newArr.findIndex((sp) => {
            return sp.id === product.id
        })
        if (result !== -1) {
            product.soLuong += 1;
        } else {
            newArr.push(product);
        }
        this.setState({
            modalGH: newArr,
        })
    }
    xoaSP = (id) => {
        let newArr = [...this.state.modalGH];
        let result = newArr.findIndex((item) => {
            return item.id === id
        })
        if (result !== -1) {
            newArr.splice(result, 1);
        }
        this.setState({
            modalGH: newArr,
        })
    }
    tangGiamSL = (id, tangGiam) => {
        var gioHangCapNhat = [...this.state.modalGH];
        let index = gioHangCapNhat.findIndex(sp => sp.id === id);
        console.log('index',index);
        console.log(gioHangCapNhat);
        if (tangGiam) {
            gioHangCapNhat[index].soLuong += 1;
        } else {
            if (gioHangCapNhat[index].soLuong > 1) {
                gioHangCapNhat[index].soLuong -= 1;
            }
        }
        //cap nhat lai gio hang
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    render() {

        let tongSoLuong = this.state.modalGH.reduce((tongSL, item, index) => {
            return tongSL += item.soLuong;
        }, 0)
        return (
            <div className="container">
                <div className="" style={{ textAlign: 'right' }}>
                    <button style={{ padding: '5px', margin: '5px' }} className="btn btn-success"
                        data-toggle="modal" data-target="#modelId"
                    >Gio Hang <span style={{ color: 'black' }}>({tongSoLuong})</span></button>
                </div>
                <ListProduct listProduct={this.ProductList} addToCart={this.addToCart} />
                <Modal tangGiamSL={this.tangGiamSL} xoaSP={this.xoaSP} modalGH={this.state.modalGH} />
            </div>
        )
    }
}
