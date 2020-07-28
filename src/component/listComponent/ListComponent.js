import React,{ Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './listComponent.css';
import { Link } from 'react-router-dom';
export default class FirstComponent extends Component{
    
    constructor(props){
        super(props);
        this.state = {...this.props.data,real:this.props.data};
    }
    componentDidMount=()=>{
        this.onImageChange(0);
    }
    
    componentWillUpdate=()=>{

    }

    onImageChange=(e)=>{
       
        let list = this.props.data.images;
        
        if(e===0){
            let new_images = {
                img_1:list.img_1,
                img_2:list.img_1,
                img_3:list.img_2,
                img_4:list.img_3,
            }            
            this.setState({images:new_images});
        }else if(e===1){
            let new_images = {
                img_1:list.img_2,
                img_2:list.img_2,
                img_3:list.img_3,
                img_4:list.img_4,
            }            
            this.setState({images:new_images});
        }else if(e===2){
            let new_images = {
                img_1:list.img_3,
                img_2:list.img_3,
                img_3:list.img_4,
                img_4:list.img_1,
            }            
            this.setState({images:new_images});
        }else if(e===3){
            let new_images = {
                img_1:list.img_4,
                img_2:list.img_4,
                img_3:list.img_1,
                img_4:list.img_2,
            }            
            this.setState({images:new_images});
        }
        
    }

    onImage=(e)=>{
        let image = this.props.data.images['img_'+parseInt(e+1)];        
        this.props.onImageClick(image,this.props.data.images,this.props.data.venueName);
    }

    onImageClick=(e)=>{
        e.preventDefault();
        this.props.onImageClick(e.target.name,this.props.data.images,this.props.data.venueName); 
    }
    
    innerContainer_1=()=>{
        return(
                 <>
                    <div class='main-image'>

                       <Carousel onChange={this.onImageChange} onClickItem={this.onImage} infiniteLoop={true}
                       
                       interval={1} 
                       showArrows={true}  
                       useKeyboardArrows={true} 
                       showIndicators={true} showThumbs={false} >
                            <div>
                                <img src={this.props.data.images.img_1} />
            
                            </div>
                            
                            <div>
                                <img src={this.props.data.images.img_2} />
                               
                            </div>

                            <div>
                                <img src={this.props.data.images.img_3} />
                               
                            </div>
                            <div>
                                <img src={this.props.data.images.img_4} />
                                
                            </div>
                       </Carousel>
                    
                    </div>
                    <div class='sub-images'>
                        <div class='sub-images--img'>
                            <img src={this.state.images.img_2} name={this.state.images.img_2} onClick={this.onImageClick} alt='image'></img>
                        </div>
                        <div class='sub-images--img'>
                            <img src={this.state.images.img_3} name={this.state.images.img_3} onClick={this.onImageClick} alt='image'></img>
                        </div>
                        <div class='sub-images--img'>
                            <img src={this.state.images.img_4} name={this.state.images.img_4} onClick={this.onImageClick} alt='image'></img>
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
                <Link class='venue__name' to={{pathname: `/venue/${this.props.data.id}`,venueid: this.props.data.id }}>{this.props.data.venueName}</Link>
                    <div class='venue__address'>{this.props.data.address}</div>
                    <div class='venue__facilities'>
                    {this.facilitiesList()}
                    <div class='list list-more'>
                            <p href='#'> <span>+</span> More </p>
                    </div>
                </div>

                <div class="venue__price">
                    <strong>Starting from ₹{this.props.data.price} </strong>per person
                </div>

                <div class='venue__btn--div'>
                    <Link to={{pathname: `/venue/${this.props.data.id}`,venueid: this.props.data.id }} class='btn'>View Details</Link>
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