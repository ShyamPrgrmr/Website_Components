import React,{Component} from 'react';
import page1img from './imgs/page_1.jpeg';
import page2img from './imgs/page_2.jpeg';
import './Aboutus.css';

export default class AboutUs extends Component{
    state={page:1};
    

    page=()=>{
        if(this.state.page===1){
            return(
                
                    <img src={page1img} class={this.state.page===1?'animate':'img'}></img>
                
            )
        }else if(this.state.page===2){
            return(
                
                    <img src={page2img} class={this.state.page===2?'animate':'img'}></img>
                
            )
        }else{
            return(
               
                    <img src={page1img} class={this.state.page===3?'animate':'img'}></img>
               
            )
        }
    }

    onButtonClick=(buttonno)=>{
        this.setState({page:buttonno});
    }

    componentDidMount=()=>{
        window.scrollTo(0, 0);
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
                    <div className='page'>
                        {this.page()}
                    </div>
                </div>
            </div>
        )
    }
}