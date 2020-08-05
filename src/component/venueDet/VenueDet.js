import React,{Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
import ReactPlayer from 'react-player'
import './venuedet.css';
import Icons from './icons.svg';
import GoogleMapReact from 'google-map-react';

export default class VenueDet extends Component {
    constructor(props){
        super(props)
        this.state={id:this.props.location.venueid,
            data:{
                name:'',
                address:'',
                images:[],
                description:'',
                reviews:[],
                features:[],
                mapCenter:{center:{lat: 59.95,
                    lng: 30.33}}
                },
            galleryToggle:false,
            }
    }

    componentDidMount=()=>{
        window.scrollTo(0, 0)
        this.fetchVenueDetails();
    }

    componentWillReceiveProps=(props)=>{
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


    LoadFeatures=()=>{
        let features = this.state.data.features;
        let array = this.divideList(features,3);
        let newData = array.map(item=>{
            
            let row = item.map(p=>{
                    return(<p>{p}</p>)
                }
            );
            
            return(
            <div className='grid-box'>
                {row}
            </div>);
        });
        return newData;
    }

    loadReviews=()=>{
        let vids = this.state.data.reviews.map(item=>{
            return (<div className='grid-box'><ReactPlayer
                url={item}
                className='react-player'
                playing={false}
                width='100%'
                height='100%'>
            </ReactPlayer></div>
        )});

        return vids;
    }

    loadGallery=(e)=>{
        e.preventDefault();
        this.setState({galleryToggle:!this.state.galleryToggle});
    }   

    displayGallery=()=>{
        return (
            <>
            <img className='gallary--image' src='https://images.oyoroomscdn.com/uploads/hotel_image/16810/large/62cab65986879859.jpg'></img>
            <img className='gallary--image' src='https://images.oyoroomscdn.com/uploads/hotel_image/16810/large/62cab65986879859.jpg'></img>
            <img className='gallary--image' src='https://images.oyoroomscdn.com/uploads/hotel_image/16810/large/62cab65986879859.jpg'></img>
            <img className='gallary--image' src='https://images.oyoroomscdn.com/uploads/hotel_image/16810/large/62cab65986879859.jpg'></img>
            <img className='gallary--image' src='https://images.oyoroomscdn.com/uploads/hotel_image/16810/large/62cab65986879859.jpg'></img>
            <img className='gallary--image' src='https://images.oyoroomscdn.com/uploads/hotel_image/16810/large/62cab65986879859.jpg'></img>
            <img className='gallary--image' src='https://images.oyoroomscdn.com/uploads/hotel_image/16810/large/62cab65986879859.jpg'></img>
            <img className='gallary--image' src='https://images.oyoroomscdn.com/uploads/hotel_image/16810/large/62cab65986879859.jpg'></img>
            <img className='gallary--image' src='https://images.oyoroomscdn.com/uploads/hotel_image/16810/large/62cab65986879859.jpg'></img>
            </>
        )
    }


    //this will fetch venue data from server by id
    //currently I am using dummy data in it
    fetchVenueDetails = ()=>{
        let images= [
            'https://images.oyoroomscdn.com/uploads/hotel_image/16810/large/62cab65986879859.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3iXmITbVs6pb5Aoay2ETR9CJYV6s18Wee7A&usqp=CAU',
            'https://dec1osz9a7g7e.cloudfront.net/o_hotel_pune_new_o_hotel_pune_new_ODeluxe.png',
            'https://r-cf.bstatic.com/images/hotel/max1024x768/248/248013744.jpg'
        ];

        let description = `Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista.`;
        
        let reviews=[
                'https://www.youtube.com/watch?v=ysz5S6PUM-U',
                'https://www.youtube.com/watch?v=ysz5S6PUM-U',
                'https://youtu.be/wXhTHyIgQ_U',
                'https://youtu.be/4GFAZBKZVJY',
                'https://www.youtube.com/watch?v=ysz5S6PUM-U'
        ];
        

        let name='Jayanta Banquests';
        let mapCenter={center: {
            lat: 59.95,
            lng: 30.33
        }} 
        let address='Axis mall, NewTown, Kolkata';
        let features = [
            'AC','Changing Room','Valet Parking','Outside Alcohol','Catering','Veg/Non-Veg',
            'AC','Changing Room','Valet Parking','Outside Alcohol','Catering','Veg/Non-Veg',
            'AC','Changing Room','Valet Parking','Outside Alcohol','Catering','Veg/Non-Veg',
            'AC','Changing Room','Valet Parking','Outside Alcohol','Catering','Veg/Non-Veg',
            'AC','Changing Room','Valet Parking','Outside Alcohol','Catering','Veg/Non-Veg',
            'AC','Changing Room','Valet Parking','Outside Alcohol','Catering','Veg/Non-Veg',
        ]
        
        let details = {name:name,mapCenter:mapCenter,address:address,images:images,features:features,description:description,reviews:reviews};

        this.setState({data:details});
    }


    render(){
      return(
      <div className='venue-det-container'>

        <div className='gallary' style={{top:this.state.galleryToggle?'0':'-200%'}}>
            <div className='gallary--container'>
                <div className='gallary--inner'>
                    {this.displayGallery()}
                </div>
            </div>
            <button className='gallary--close' onClick={this.loadGallery} style={{display:this.state.galleryToggle?'flex':'none'}}>x</button>
        </div>
        
        <div className='header'>
              <Carousel showThumbs={false} showArrows={true} showStatus={false} infiniteLoop={true}>
                    <div>
                        <img src={this.state.data.images[0]}></img>
                        <img src={this.state.data.images[1]}></img>
                    </div>

                    <div>
                        <img src={this.state.data.images[2]}></img>
                        <img src={this.state.data.images[3]}></img>
                    </div> 

                    <div className='gallery-btn-div'>
                        <button className='gallery-btn' onClick={this.loadGallery}>Open Gallery</button>
                    </div>       
              </Carousel>
          </div>
        <div className='details'>
            <div className='left'>
                <div className='head'>
                    <div className='con-1'>
                        <p className='venue-name'>{this.state.data.name}</p>
                        <p className='venue-address'>{this.state.data.address}</p>
                    </div>
                    <div className='con-1 flow-right'>
                        <a className='record' href='#'>Record your video reviews</a>
                        <p className='info'>Share your past experience with venue</p>
                    </div>
                </div>
                <div className='description'>
                    <p className='heading'>Description</p>
                    <p className='text'>{this.state.data.description}</p>
                </div>

            </div>
            <div className='right'>
                <div className='form'>
                    <label>Event Date</label>
                    <input type='date'/>

                    <label>Name</label>
                    <input type='text' placeholder='Name'/>

                    <label>Email Id</label>
                    <input type='text' placeholder='Email'/>

                    <label>Phone number</label>
                    <div className='phone'>
                       <div className='in-1'>
                            <input type='text' ></input>   
                        </div> 
                        <div className='in-2'>
                            <input type='text' placeholder='phone'></input>
                        </div>
                    </div>

                    <button>Call me</button>

                    <small>We will get in touch with you within 24 hours.</small>
                </div>
            </div>
        </div>
        <div className='venue-feature'>
            <div className='container-p'>
                <p className='heading'>Venue features</p>
                <div className='grid'>
                    {this.LoadFeatures()}
                </div>
            </div>
        </div>
        <div className='venue-review'>
            <p className='heading'>Venue Review</p>
            <div className='review-grid'>
                {this.loadReviews()}              
            </div>
        </div>
        <div className='distance-calculator'>
            <p className='heading'>Distace Calculator</p>
            <div className='distance-calculator-con'>
                    <div className='left-con'>
                        <div className='con'>
                            <p class='space'> <svg><use xlinkHref={Icons+'#icon-target'}></use></svg>{this.state.data.name}</p>
                            <p class='space'> <svg><use xlinkHref={Icons+'#icon-target'}></use></svg>Enter location to find distance.</p>
                        </div>
                    </div>
                    <div className='right-con'>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDrDf2E7FDB9W8o0dFXGYUsy4SY-XoIFig' }}
                        defaultCenter={this.state.data.mapCenter.center} 
                        defaultZoom={11}
                    ></GoogleMapReact>
                    </div>
            </div>
        </div>
      </div>);  
    }
} 