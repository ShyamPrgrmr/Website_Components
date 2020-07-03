import React,{ Component } from 'react';
import './style.css';

export default class FirstComponent extends Component{
   

    imgSection=()=>{
        return(
            <div class='left'>
                    <div class='left__im1'>
                       <img src={this.props.data.imgs.img1} alt='image'></img>
                    </div>
                    <div class='left__ims'>
                        <div class='left__ims--img'>
                            <img src={this.props.data.imgs.img2} alt='image'></img>
                        </div>
                        <div class='left__ims--img'>
                            <img src={this.props.data.imgs.img3} alt='image'></img>
                        </div>
                        <div class='left__ims--img'>
                            <img src={this.props.data.imgs.img4} alt='image'></img>
                        </div>
                    </div> 
                </div>
        );
    }

    separateDescription=(myArray, chunk_size)=>{ 
        let index = 0;
        let arrayLength = myArray.length;
        let tempArray = [];
        
        for (index = 0; index < arrayLength; index += chunk_size) {
            let myChunk = myArray.slice(index, index+chunk_size);
            tempArray.push(myChunk);
        }

        return tempArray;
    }

    descriptionList=()=>{
        let list = this.props.data.description;
        let newList = this.separateDescription(list,3);
        let descList = newList.map(desc=>{       
            let data = desc.map(item=>{
            return(<div class='inner-list'>{item}</div>)
            })

            return(<div class='list'>
                {data}
            </div>)

        })

        return(descList); 
    }

    render(){

        

        return(
            <div class='container'>
                {this.imgSection()}

                <div class='right'>
                     <div class='right__title'>{this.props.data.title}</div>
                     <div class='right__address'>{this.props.data.address}</div>
                     <div class='right__description'>
                        {this.descriptionList()}
                        <div class='list list-more'>
                                <a href='#'> <span>+</span> more </a>
                        </div>
                     </div>

                     <div class="right__price">
                            <strong>Starting from ₹{this.props.data.perPersonPrice} </strong>per person
                     </div>

                     <div class='right__btn'>
                            <button class='btn'>View Details</button>
                     </div>
                </div>
            </div>
        );
    }

}