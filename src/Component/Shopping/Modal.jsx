import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const { modalGH, xoaSP,tangGiamSL } = this.props;
        return (
            <div>
                <div>
                    {/* Button trigger modal */}
                    {/* <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                        Launch
                    </button> */}
                    {/* Modal */}
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content" style={{ maxWidth: '800px', width: '800px' }}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <td>ma SP</td>
                                                <td>ten </td>
                                                <td>so luong</td>
                                                <td>gia</td>
                                                <td>hinh anh</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {modalGH.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.id}</td>
                                                        <td>{item.name} </td>
                                                        <td>
                                                            <button className="btn btn-primary" onClick={() => tangGiamSL(item.id,true)} >+</button>
                                                            {item.soLuong}
                                                            <button className="btn btn-primary"  onClick={() => tangGiamSL(item.id,false)}>-</button>
                                                        </td>
                                                        <td>{item.price}</td>
                                                        <td>
                                                            <img height={50} width={50} src={item.hinhAnh} alt="" />
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-danger"
                                                                onClick={() => xoaSP(item.id)}
                                                            >Xóa</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan='2'></td>
                                                <td>tong tien</td>
                                                <td>
                                                    {this.props.modalGH.reduce((tongTien, spGioHang, index) => {
                                                        return tongTien += spGioHang.soLuong * spGioHang.price
                                                    }, 0)} $
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div></div>

            </div>


        )
    }
}
