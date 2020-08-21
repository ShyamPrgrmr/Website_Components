import React,{Component} from 'react';
import './carousel.css'
import {Carousel} from 'react-responsive-carousel';

export default class Carousel1 extends Component{
    constructor(props){
        super(props)
        this.state={data:'',imageList:{},name:''}
    }

    componentWillReceiveProps(props){
        this.setState({data:props.data,imageList:props.list,name:props.name})
    }

    render(){
        return(
            <div className='popup-container'>
                <h1>{this.state.name}</h1>
                <Carousel 
                       infiniteLoop={true}
                       interval={1} 
                       showArrows={true}  
                       useKeyboardArrows={true} 
                       showIndicators={true} showThumbs={true}>
                    <div>
                        <img src={this.state.imageList.img_1}>
                        </img>
                    </div>

                    <div>
                        <img src={this.state.imageList.img_2}>
                        </img>
                    </div>

                    <div>
                        <img src={this.state.imageList.img_3}>
                        </img>
                    </div>

                    <div>
                        <img src={this.state.imageList.img_4}>
                        </img>
                    </div>
                </Carousel>
            </div>
        );
    }
}
