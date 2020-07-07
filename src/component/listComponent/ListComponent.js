import React,{ Component } from 'react';
import './style.css';

export default class FirstComponent extends Component{
   
    
    innerContainer_1=()=>{
        return(
                 <>
                    <div class='main-image'>
                       <img src={this.props.data.images.img_1} alt='image'></img>
                    </div>
                    <div class='sub-images'>
                        <div class='sub-images--img'>
                            <img src={this.props.data.images.img_2} alt='image'></img>
                        </div>
                        <div class='sub-images--img'>
                            <img src={this.props.data.images.img_3} alt='image'></img>
                        </div>
                        <div class='sub-images--img'>
                            <img src={this.props.data.images.img_4} alt='image'></img>
                        </div>
                    </div> 
                </>
        );
    }

    divideList=(myArray, chunk_size)=>{ 
        let index = 0;
        let arrayLength = myArray.length;
        let tempArray = [];
        
        for (index = 0; index < arrayLength; index += chunk_size) {
            let myChunk = myArray.slice(index, index+chunk_size);
            tempArray.push(myChunk);
        }

        return tempArray;
    }

    facilitiesList=()=>{
        let list = this.props.data.facilities;
        let newList = this.divideList(list,3);
        let faciList = newList.map(desc=>{       
            let data = desc.map(item=>{
            return(<div class='inner-list'>{item}</div>)
            })

            return(<div class='list'>
                {data}
            </div>)

        })

        return(faciList); 
    }

    innerContainer_2=()=>{
        return(
            <>
                <div class='venue__name'>{this.props.data.venueName}</div>
                    <div class='venue__address'>{this.props.data.address}</div>
                    <div class='venue__facilities'>
                    {this.facilitiesList()}
                    <div class='list list-more'>
                            <a href='#'> <span>+</span> More </a>
                    </div>
                </div>

                <div class="venue__price">
                    <strong>Starting from ₹{this.props.data.price} </strong>per person
                </div>

                <div class='venue__btn--div'>
                    <button class='btn'>View Details</button>
                </div>
            </>
        );
    }

    render(){

        

        return(
            <div class='wrapper'>
                
                <div class='innnerContainer__1'>
                    {this.innerContainer_1()}
                </div>

                <div class='innnerContainer__2'>
                    {this.innerContainer_2()}
                </div>
            </div>
        );
    }

}