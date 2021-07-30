import React, { Component } from 'react'
import data from '../../Data/dataGlasses.json';
import './Glasses.css';
export default class Glasses extends Component {
    constructor(props){
        super(props)
        this.state= ({
            item :[]
        })
    }
    changeItem = (data) => {
            console.log(data);
            this.setState({
                item: data
            })

    }
    render() {
        console.log(data)
   
        return (
            <div className="home">
              <img  src="./img/glassesImage/background.jpg" alt="" />
                <div  className="home__item">
                        <img src="./img/glassesImage/model.jpg" alt="" />
                        <h3>click vào để thay kính</h3>
                </div>
                <div className="kinh">
                    <img  src={this.state.item.url} alt="" />
                </div>
                <div className="home__footer row">
                        {data.map( (item, index)=>{
                            return(
                                <div onClick={()=>this.changeItem(item)} style={{height:'50px'}} key={index} className="col-2">
                                    <img  width={50} src={item.url} alt="" />
                                </div>
                            )
                        })}
                </div> 
            </div>
        )
    }
}
