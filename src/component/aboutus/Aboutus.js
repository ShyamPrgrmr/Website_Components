import React,{Component} from 'react';
import page1img from './imgs/page_1.jpeg';
import page2img from './imgs/page_2.jpeg';
import './Aboutus.css';

export default class AboutUs extends Component{
    state={page:1};
    

    page=()=>{
        if(this.state.page===1){
            return(
                <div className='page' >
                    <img src={page1img}></img>
                </div>
            )
        }else if(this.state.page===2){
            return(
                <div className='page'>
                    <img src={page2img}></img>
                </div>
            )
        }else{
            return(
                <div className='page' >
                    <img src={page1img}></img>
                </div>
            )
        }
    }

    onButtonClick=(buttonno)=>{
        this.setState({page:buttonno});
    }

    render(){
        return(
            <div className='aboutus-container'>
                <p className='heading'>
                   About Venuefy 
                </p>
                <div className='button-box'>
                    <button className={this.state.page===1?'button-box__btn button-active':'button-box__btn'} onClick={(e)=>{e.preventDefault(); this.onButtonClick(1);}}>Who we are?</button>
                    <button className={this.state.page===2?'button-box__btn button-active':'button-box__btn'} onClick={(e)=>{e.preventDefault(); this.onButtonClick(2);}}>How it works?</button>
                    <button className={this.state.page===3?'button-box__btn button-active':'button-box__btn'} onClick={(e)=>{e.preventDefault(); this.onButtonClick(3);}}>Why Us?</button>
                </div>
                <div class='page-container'>
                    {this.page()}
                </div>
            </div>
        )
    }
}