import React,{Component} from 'react';
import './home.css';
import icons from './imgs/icons.svg';
import { Carousel } from 'react-responsive-carousel';
import headerImage from './imgs/header.jpg'
import img_1 from './imgs/Arati_Banquets.jpg'
import img_2 from './imgs/Ganeshji Resorts.jpg'
import img_3 from './imgs/Shivaji_Banquet_halls.jpg'
import img_4 from './imgs/Hang-e-out.jpg'
import promotion from './imgs/Promotion.jpg'
import banner from './imgs/banner.jpg'
import venueservices from './imgs/Venue_Services.jpg'
import nonvenueservices from './imgs/Non_Venue_Services.jpg'
import preservices from './imgs/Premium_Services.jpg'
import img_5 from './imgs/Photographers.jpg'
import img_6 from './imgs/Eveent_Planners.jpg'
import img_7 from './imgs/Makeup_Artist.jpg'
import img_8 from './imgs/DJs.jpg'
import img_9 from './imgs/Caterers.jpg'
import img_10 from './imgs/Decorators.jpg'
import img_11 from './imgs/Mehndi_Artist.jpg'
import img_12 from './imgs/Eveent_Planners.jpg'
import img_13 from './imgs/Venue_Super_Visors.jpg'
 
export default class Home extends Component{
    
    constructor(cons){
        super(cons);
    }
    state={selectedCity:'City',selectedArea:'Select Your Area'}

    onChangeCity=(e)=>{
        let city = e.target.value;
        this.setState({selectedCity:city});
    }

    onChangeArea=(e)=>{
        let area = e.target.value;
        this.setState({selectedArea:area});
    }

    render(){
        return(
        <div className='home-container'>
            <div className='jumbotron' style={{backgroundImage:`url('${headerImage}')`}}>
                <p className='text'>#VenuefyYourVenue</p>
                <div class='search-selector'>

                    <div className='city-selector'>
                        <svg><use xlinkHref={icons+'#icon-office'}></use></svg>
                        <p class='text'>{this.state.selectedCity}</p>
                        
                        <select id='city-select' class='select' onChange={this.onChangeCity}>
                            <option disabled>City</option>
                            <option value='Mumbai'>Mumbai</option>
                            <option valu='Pune'>Pune</option>
                        </select>
                    </div>

                    <div class='area-selector'>
                         <p className='text'>{this.state.selectedArea}</p>
                         <select id='city-select' class='select' onChange={this.onChangeArea}>
                            <option disabled>City</option>
                            <option value='Mumbai'>Mumbai</option>
                            <option valu='Pune'>Pune</option>
                        </select>
                    </div>

                    <div className='search-div'>
                        <button>
                            <svg>
                                <use xlinkHref={icons+'#icon-search'}>

                                </use>
                             </svg>
                        </button>
                    </div>

                    <div className='nearby-div'>
                        <p className='text'>Nearby</p>
                        <button>
                            <svg>
                                <use xlinkHref={icons+'#icon-target'}>    
                                </use>
                            </svg>
                        </button>
                    </div>
                    
                    
                </div>
            </div>
            <div className='services-div'>
                <div class='background'></div>
                <div class='services'>
                    <p class='heading'>Venuefy Services</p>
                    <div class='head-text'>
                        <p>Banquest</p>
                        <p>Resorts</p>
                    </div>
                    <div className='services--container'>
                        
                        <div className='div-1' style={{backgroundImage:`url('${img_1}')`}}>
                            <div class='info'>
                                <div className='venue-details'>
                                    <p className='venue-name'>Aarti Banquest</p>
                                    <p className='venue-address'>NewTown</p>
                                </div>
                                <button class='btn'>Book Now</button>
                            </div>    
                        </div>
                        <div className='div-2' style={{backgroundImage:`url('${img_2}')`}}>
                            <div class='info'>
                                <div className='venue-details'>
                                    <p className='venue-name'>Ganeshji Resorts</p>
                                    <p className='venue-address'>Digha</p>
                                </div>
                                <button class='btn'>Book Now</button>
                            </div> 
                        </div>

                    </div>
                </div>
                
                <div className='services'>
                    <div class='head-text head-text_no-margin'>
                            <p>Hotel Banquest</p>
                            <p>Pubs</p>
                    </div>

                    <div className='services--container'>
                        
                        <div className='div-3' style={{backgroundImage:`url('${img_3}')`}}>
                            <div class='info'>
                                <div className='venue-details'>
                                    <p className='venue-name'>Shivaji Banquest Hall</p>
                                    <p className='venue-address'>Siliguru</p>
                                </div>
                                <button class='btn'>Book Now</button>
                            </div>    
                        </div>
                        <div className='div-4' style={{backgroundImage:`url('${img_4}')`}}>
                            <div class='info'>
                                <div className='venue-details'>
                                    <p className='venue-name'>Hang-e-out</p>
                                    <p className='venue-address'>Saltlake</p>
                                </div>
                                <button class='btn'>Book Now</button>
                            </div> 
                        </div>

                    </div>

                </div>
            
            </div>
            <div className='booknow'>

                

                <Carousel
                infiniteLoop={true}
                interval={1} 
                showArrows={true}  
                useKeyboardArrows={true} 
                showIndicators={true} showThumbs={false}>
                    <div>
                        <img src={promotion} alt='image'></img>
                        <div className='booknow-box'>
                            <p className='heading'>Book Now</p>
                            <p className='text'>Disount on Pre-Booking</p>
                            <ul className='list'>
                            <li>Banquests</li>
                            <li>Resorts</li>
                            <li>Vendors</li>
                            </ul>
                            <a href='/home' class='link'>Explore</a>
                        </div>
                    </div>

                    <div>
                    <div className='booknow-box'>
                            <p className='heading'>Book Now</p>
                            <p className='text'>Disount on Pre-Booking</p>
                            <ul className='list'>
                            <li>Banquests</li>
                            <li>Resorts</li>
                            <li>Vendors</li>
                            </ul>
                            <a href='/home' class='link'>Explore</a>
                        </div>
                        <img src={promotion} alt='image'></img>
                    </div>

                    <div>
                    <div className='booknow-box'>
                            <p className='heading'>Book Now</p>
                            <p className='text'>Disount on Pre-Booking</p>
                            <ul className='list'>
                            <li>Banquests</li>
                            <li>Resorts</li>
                            <li>Vendors</li>
                            </ul>
                            <a href='/home' class='link'>Explore</a>
                        </div>
                        <img src={promotion} alt='image'></img>
                    </div>

                </Carousel>
            </div>
            <div className='about-desc'>
                <div className='box-1'>
                    <p className='heading'>Who we are ?</p>
                    <div className='inner-box'>
                        <p>
                            We provide all venue and non-venue services related to all 
                            events, from your choice of makeUp Artist and florist to exquisite
                            Banquests and Cruise Ships.     
                         </p>
                        <p className='greeting'>
                            Venuefy
                        </p>
                    </div>
                </div>
                <div className='box-2' style={{backgroundImage:`url('${banner}')`}}></div>
            </div>
            <div className='features-vendor'>
                <div className='background'></div>
                <div className='heading'>Venuefy Services</div>
                <div className='features-grid'>
                    <div className='box'>
                        <img src={venueservices}></img>
                        <p>Venue Services</p>
                        <a href='#'>Explore</a>
                    </div>
                    <div className='box'>
                        <img src={nonvenueservices}></img>
                        <p>Non-Venue Services</p>
                        <a href='#'>Explore</a>
                    </div>
                    <div className='box'>
                        <img src={preservices}></img>
                        <p>Premium Services</p>
                        <a href='#'>Explore</a>
                    </div>
                </div>

                <div className='heading margin'>Venuefy Vendors</div>
                <div class='vendor-grid'>
                    <div className='box'>
                        <img src={img_5}></img>
                        <p>Photographers</p>
                    </div>

                    <div className='box'>
                    <img src={img_6}></img><p>Event Planner</p>
                    </div>

                    <div className='box'>
                    <img src={img_7}></img><p>Mackup artist</p>
                    </div>

                    <div className='box'>
                    <img src={img_8}></img><p>Djs</p>
                    </div>

                    <div className='box'>
                    <img src={img_9}></img><p>Caterers</p>
                    </div>

                    <div className='box'>
                    <img src={img_10}></img><p>Decorator</p>
                    </div>

                    <div className='box'>
                    <img src={img_11}></img> <p>Mahendi Artist</p>
                    </div>

                    <div className='box'>
                    <img src={img_12}></img> <p>Event Planner</p>
                    </div>
                </div>
            </div>
            <div className='main-features'>
                <div className='heading'>Our Main Services</div>
                
                <div className='main-box'>
                    <div className='box-1'>
                        <div className='box-1__shadow'></div>
                        <div className='box-1__main'>
                            <p>Venue Supervisors</p>
                        </div>
                        
                        <div className='box-1__sub first-sub'>
                            <p>Free Event Coordination</p>
                        </div>

                        <div className='box-1__sub'>
                            <p>Management Counsultancy</p>
                        </div>

                        <div className='box-1__sub'>
                            <p>No Start Rating</p>
                        </div>

                        <div className='box-1__sub'>
                            <p>Segment Best Discount</p>
                        </div>

                        <div className='box-1__sub'>
                            <p>Video Review</p>
                        </div>
                    </div>
                    <div className='box-2'>
                        <div className='block-1'>
                            <p className='head'>Venue Supervisors</p>
                            <p className='sub-head'>we will be provide Venue Supervisors for your event, to take care of all the stuffs related to the Venue in your event</p>
                        </div>
                        <div className='block-2'>
                            <div className='image' style={{backgroundImage:`url('${img_13}')`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}